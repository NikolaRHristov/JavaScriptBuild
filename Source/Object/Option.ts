import type { PluginBuild as Build, BuildOptions as Option } from "esbuild";

import { copy as Copy } from "esbuild-plugin-copy";
import { rm as Remove } from "fs/promises";

const Out = "Target";

export default {
	format: "esm",
	minify: true,
	outdir: Out,
	platform: "node",
	target: "esnext",
	write: true,
	plugins: [
		{
			name: "Target",
			setup(Build: Build) {
				Build.onStart(async () => {
					console.log(Out)
					try {
						await Remove(Out, {
							recursive: true,
						});
					} catch (_Error) {
						console.log(_Error);
					}
				});
			},
		},
		Copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./Source/Notation/TypeScript.json",
					to: "./Notation/",
				},
			],
		}),
	],
} satisfies Option as Option;
