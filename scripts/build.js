import { build } from 'esbuild'

build({
	entryPoints: ['src/app.tsx'],
	outfile: 'build/app.js',
	bundle: true,
})
