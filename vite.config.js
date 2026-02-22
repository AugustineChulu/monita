import { defineConfig } from 'vite'

export default defineConfig(() => {
  const projectName = 'monita';
  const outDir = process.env.GITHUB_ACTIONS ? 'dist' : `dist/${projectName}`;

  return {
    base: `/${projectName}/`,
    build: { outDir },
  }
})