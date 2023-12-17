var r = {
	color: !0,
	format: "esm",
	metafile: !0,
	minify: !0,
	outdir: "Target",
	platform: "node",
	target: "esnext",
	write: !0,
	logLevel: "debug",
	plugins: [
		{
			name: "Target",
			setup({ onStart: e, initialOptions: { outdir: t } }) {
				e(async () => {
					try {
						t &&
							(await (
								await import("fs/promises")
							).rm(t, { recursive: !0 }));
					} catch {}
				});
			},
		},
		(await import("esbuild-plugin-copy")).copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./Source/Notation/TypeScript.json",
					to: "./Notation/",
				},
				{ from: "./Source/Stylesheet/Theme.css", to: "./Stylesheet/" },
			],
		}),
	],
	define: {
		"process.env.VERSION_PACKAGE": `'${
			(
				await (
					await import("../Function/JSON.js")
				).default("package.json")
			)?.version
		}'`,
	},
};
export { r as default };
