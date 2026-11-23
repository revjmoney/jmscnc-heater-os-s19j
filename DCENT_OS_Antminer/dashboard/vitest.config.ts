import { defineConfig } from 'vitest/config';

// Minimal, self-contained config for pure-logic unit tests. Kept separate from
// vite.config.ts (which carries the build-only viteSingleFile plugin). Test
// files are excluded from tsconfig.json's `tsc` build so they never affect the
// `npm run build` gate (tsc && vite build).
export default defineConfig({
  // HelpPage imports ../../docs/*.md?raw, outside this folder: Vite 6+ refuses that unless allowed.
  server: {
    fs: {
      allow: ['.', '../docs'],
    },
  },
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    environment: 'node',
  },
});
