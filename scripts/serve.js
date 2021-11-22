import { serve } from 'esbuild'

serve(
	{
		servedir: 'www',
	},
	{
		entryPoints: ['src/app.tsx'],
		outfile: 'www/app.js',
		bundle: true,
	},
)
