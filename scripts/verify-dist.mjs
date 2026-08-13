import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
const requiredFiles = [
  'index.html',
  'research/index.html',
  'projects/index.html',
  'blog/poetry/index.html',
  'blog/poetry/graduation-song/index.html',
  'blog/poetry/on-solid-things/index.html',
  'blog/poetry/the-only-way-for-youth-to-last-forever/index.html',
  'blog/poetry/final-wishes/index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
  'og.png',
  'favicon.png',
];

const forbiddenPatterns = [
  /John Doe/i,
  /youremail@yourdomain\.com/i,
  /tel:/i,
  /intern_cv/i,
  /\/Users\/chgp/i,
  /Last updated in September 2024/i,
  /\bTBD\b/,
];

const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(join(dist, file))) failures.push(`Missing required output: ${file}`);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(html)) failures.push(`Forbidden public content in ${file}: ${pattern}`);
  }

  const references = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|#|data:)/.test(reference)) continue;

    const pathname = reference.split(/[?#]/, 1)[0];
    const relativePath = pathname.replace(/^\//, '');
    const expectedPath = pathname.endsWith('/')
      ? join(dist, relativePath, 'index.html')
      : join(dist, relativePath);

    if (!existsSync(expectedPath)) {
      failures.push(`Broken internal reference in ${file}: ${reference}`);
    }
  }
}

const bilingualPoems = [
  {
    file: 'blog/poetry/graduation-song/index.html',
    englishOpening: 'Walk out the West Gate',
    chineseOpening: '从西门走出',
  },
  {
    file: 'blog/poetry/on-solid-things/index.html',
    englishOpening: 'I worship solid things',
    chineseOpening: '我崇拜坚固的事物',
  },
];

for (const poem of bilingualPoems) {
  const poemHtml = readFileSync(join(dist, poem.file), 'utf8');
  const englishPosition = poemHtml.indexOf(poem.englishOpening);
  const chinesePosition = poemHtml.indexOf(poem.chineseOpening);

  if (englishPosition === -1) failures.push(`Missing English translation in ${poem.file}.`);
  if (chinesePosition === -1) failures.push(`Missing Chinese original in ${poem.file}.`);
  if (englishPosition >= chinesePosition) {
    failures.push(`English translation must precede Chinese original in ${poem.file}.`);
  }
}

const chineseOnlyPoems = [
  {
    file: 'blog/poetry/the-only-way-for-youth-to-last-forever/index.html',
    title: '青春永久的唯一办法',
    opening: '黄昏是我一天中视力最差的时候',
  },
  {
    file: 'blog/poetry/final-wishes/index.html',
    title: '最后的祝愿',
    opening: '祝愿在凌晨品一的楼道背诵党章的人',
  },
];

for (const poem of chineseOnlyPoems) {
  const poemHtml = readFileSync(join(dist, poem.file), 'utf8');

  if (!poemHtml.includes(poem.title)) failures.push(`Missing Chinese title in ${poem.file}.`);
  if (!poemHtml.includes(poem.opening)) failures.push(`Missing Chinese poem in ${poem.file}.`);
  if (poemHtml.includes('English translation')) {
    failures.push(`Unexpected English translation section in ${poem.file}.`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files and ${requiredFiles.length} required outputs.`);
