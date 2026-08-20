import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
const requiredFiles = [
  'index.html',
  'research/index.html',
  'projects/index.html',
  'projects/dcfa/index.html',
  'dcfa/prepared-demo-v1/prepared-demo.csv',
  'dcfa/prepared-demo-v1/prepared-prompt.txt',
  'dcfa/prepared-demo-v1/visitor-plot.png',
  'dcfa/prepared-demo-v1/verification-summary.json',
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

const sha256 = (payload) => `sha256:${createHash('sha256').update(payload).digest('hex')}`;

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
  {
    file: 'blog/poetry/the-only-way-for-youth-to-last-forever/index.html',
    englishOpening: 'Dusk is when my eyesight is at its worst',
    chineseOpening: '黄昏是我一天中视力最差的时候',
  },
  {
    file: 'blog/poetry/final-wishes/index.html',
    englishOpening: 'May the one reciting the Party Constitution',
    chineseOpening: '祝愿在凌晨品一的楼道背诵党章的人',
  },
];

const homeHtml = readFileSync(join(dist, 'index.html'), 'utf8');
const presentationMarkers = [
  '<h2 id="presentations-title">News</h2>',
  'CIMA Lab Seminar',
  'Joint Statistical Meetings 2026',
  '2026 Decision Sciences Institute Annual Conference',
  'STAI-X 2026',
];

for (const marker of presentationMarkers) {
  if (!homeHtml.includes(marker)) failures.push(`Missing presentation content: ${marker}`);
}

const preparedDataPath = resolve('src/data/dcfa/prepared-demo-v1.json');
const preparedData = JSON.parse(readFileSync(preparedDataPath, 'utf8'));
const expectedDcfaAssets = {
  prepared_csv: '/dcfa/prepared-demo-v1/prepared-demo.csv',
  prepared_prompt: '/dcfa/prepared-demo-v1/prepared-prompt.txt',
  verification_summary: '/dcfa/prepared-demo-v1/verification-summary.json',
  visitor_plot: '/dcfa/prepared-demo-v1/visitor-plot.png',
};

for (const [name, expectedPath] of Object.entries(expectedDcfaAssets)) {
  const asset = preparedData.assets?.[name];
  if (asset?.path !== expectedPath) {
    failures.push(`DCFA prepared asset path mismatch: ${name}`);
    continue;
  }
  const observedHash = sha256(readFileSync(join(dist, expectedPath.replace(/^\//, ''))));
  if (observedHash !== asset.sha256) failures.push(`DCFA prepared asset hash mismatch: ${name}`);
}

const sourceProjection = structuredClone(preparedData);
delete sourceProjection.assets;
delete sourceProjection.release_sha256;
delete sourceProjection.source_visitor_result_sha256;
const sourceProjectionHash = sha256(`${JSON.stringify(sourceProjection, null, 2)}\n`);
if (sourceProjectionHash !== preparedData.source_visitor_result_sha256) {
  failures.push('DCFA visitor projection no longer matches the verified source projection.');
}

const verificationSummary = JSON.parse(
  readFileSync(join(dist, 'dcfa/prepared-demo-v1/verification-summary.json'), 'utf8'),
);
if (verificationSummary.release_sha256 !== preparedData.release_sha256) {
  failures.push('DCFA release hash does not match the copied verification summary.');
}
if (verificationSummary.dcfa_release_commit !== preparedData.release.dcfa_commit) {
  failures.push('DCFA release commit does not match the copied verification summary.');
}

const dcfaHtml = readFileSync(join(dist, 'projects/dcfa/index.html'), 'utf8');
const requiredDcfaMarkers = [
  'Replay the verified example',
  'This replays a previously executed and independently verified workflow. No API call is made.',
  'From the low to the high treatment level, the estimated median outcome increases by 4.47 outcome units.',
  'Residual dependence remains',
  'Open in Colab',
  'https://colab.research.google.com/github/GepingChen/DCFA/blob/main/notebooks/DCFA_Custom_Analysis_Colab.ipynb',
  'https://github.com/GepingChen/DCFA',
];
for (const marker of requiredDcfaMarkers) {
  if (!dcfaHtml.includes(marker)) failures.push(`Missing DCFA public content: ${marker}`);
}

const forbiddenDcfaPatterns = [
  /<iframe/i,
  /fetch\s*\(/i,
  /localStorage|sessionStorage/i,
  /4\.46969806321701/,
  /(?:evidence|bundle|specification|trace)_[0-9a-f]{12,}/i,
  /DEVELOPMENT_[A-Z_]+/,
  /website_demo_gemini_v1|tabpfn_client_managed_demo_v2/,
  /api\.priorlabs\.ai/,
];
for (const pattern of forbiddenDcfaPatterns) {
  if (pattern.test(dcfaHtml)) failures.push(`Forbidden DCFA public content: ${pattern}`);
}

const projectsHtml = readFileSync(join(dist, 'projects/index.html'), 'utf8');
if (projectsHtml.includes('Three evidence-backed projects.')) {
  failures.push('Projects page retains the stale hard-coded project count.');
}

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

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files and ${requiredFiles.length} required outputs.`);
