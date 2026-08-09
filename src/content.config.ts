import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const namedLink = z.object({
  label: z.string().min(1),
  url: z.url(),
});

const editorialFields = {
  order: z.number().int().nonnegative().default(0),
  draft: z.boolean().default(true),
  visibility: z.enum(['private-draft', 'public']).default('private-draft'),
  sources: z.array(z.string().min(1)).min(1),
};

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    startDate: z.string().min(4),
    endDate: z.string().nullable().default(null),
    status: z.enum(['active', 'completed', 'archived']),
    kind: z.enum(['research', 'engineering', 'data', 'other']),
    role: z.string().min(1),
    contributions: z.array(z.string().min(1)).min(1),
    methods: z.array(z.string().min(1)).min(1),
    links: z.array(namedLink).min(1),
    tags: z.array(z.string().min(1)).default([]),
    featured: z.boolean().default(false),
    ...editorialFields,
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    authors: z.array(z.string().min(1)).min(1),
    year: z.number().int().min(1900),
    venue: z.string().nullable().default(null),
    status: z.enum([
      'published',
      'accepted',
      'under-review',
      'preprint',
      'working-paper',
      'in-progress',
    ]),
    type: z.enum(['paper', 'workshop', 'poster', 'thesis', 'report', 'dataset', 'software']),
    summary: z.string().min(1),
    contribution: z.string().nullable().default(null),
    links: z.array(namedLink).min(1),
    doi: z.string().nullable().default(null),
    tags: z.array(z.string().min(1)).default([]),
    featured: z.boolean().default(false),
    ...editorialFields,
  }),
});

const experiences = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    organization: z.string().min(1),
    role: z.string().min(1),
    startDate: z.string().min(4),
    endDate: z.string().nullable().default(null),
    summary: z.string().min(1),
    highlights: z.array(z.string().min(1)).default([]),
    organizationUrl: z.url().nullable().default(null),
    ...editorialFields,
  }),
});

// Register this schema as a collection only when real posts exist. Keeping the
// schema now reserves the content boundary without creating an empty route.
export const futurePostSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  publishedAt: z.coerce.date().nullable().default(null),
  updatedAt: z.coerce.date().nullable().default(null),
  language: z.enum(['en', 'zh']).default('en'),
  tags: z.array(z.string().min(1)).default([]),
  series: z.string().nullable().default(null),
  canonicalUrl: z.url().nullable().default(null),
  draft: z.boolean().default(true),
});

export const collections = { projects, publications, experiences };
