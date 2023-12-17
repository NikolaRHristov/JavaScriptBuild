var u = async (...[s, t]) => {
	for (const e of s)
		for (const l of await (await import("fast-glob")).default(
			e.replaceAll("'", "").replaceAll('"', ""),
		))
			o.push(l);
	o.reverse();
	const i = r((await import("../Variable/ESBuild.js")).default, {
		entryPoints: Object.fromEntries(
			o.map((e) => [
				e.replace("Source/", "").split(".").slice(0, -1).join("."),
				e,
			]),
		),
	});
	console.log(
		await (await import("esbuild")).analyzeMetafile(
			(
				await (
					await import("esbuild")
				).build(
					t?.ESBuild
						? r(
								i,
								await (
									await import("../Function/File.js")
								).default(t.ESBuild),
						  )
						: i,
				)
			)?.metafile ?? "",
			{ verbose: !0 },
		),
	),
		a(`tsc -p ${t?.TypeScript ?? "tsconfig.json"}`),
		a(
			[
				"typedoc",
				"--commentStyle all",
				"--gitRevision main",
				`--customCss ${n(`${p}/../Stylesheet/Theme.css`)}`,
				"--includeVersion",
				"--out ./Documentation",
				`--plugin ${n(`${p}/../../Target/Variable/Load.js`)}`,
				"--plugin typedoc-plugin-remove-references",
				"--plugin typedoc-plugin-rename-defaults",
				"--plugin typedoc-plugin-mdn-links",
				"--plugin typedoc-plugin-zod",
				"--plugin typedoc-plugin-merge-modules",
				"--plugin typedoc-plugin-keywords",
				"--searchInComments",
				`--keywords ${
					(
						await (
							await import("../Function/JSON.js")
						).default("package.json", process.cwd())
					)?.keywords?.join(" --keywords ") ?? " typescript-esbuild "
				}`,
				"--theme TypeScriptESBuild",
				"--entryPointStrategy expand",
				"--mergeModulesRenameDefaults",
				"--mergeModulesMergeMode module",
				`--entryPoints ${Object.values(i.entryPoints).join(
					" --entryPoints ",
				)}`,
			].join(" "),
		);
};
const { default: a } = await import("../Function/Exec.js"),
	{ default: r } = await import("../Function/Merge.js"),
	{ resolve: n } = await import("path"),
	o = [],
	p = (await import("url")).fileURLToPath(
		(await import("path")).dirname(import.meta.url),
	);
export {
	p as Current,
	a as Exec,
	r as Merge,
	o as Pipe,
	u as default,
	n as resolve,
};
