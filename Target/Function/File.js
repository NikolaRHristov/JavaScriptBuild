var a = async (...[t]) => {
	if (t.split(".").pop() === "ts") {
		const { options: i } = (
			await import("typescript")
		).default.convertCompilerOptionsFromJson(
			(
				await (
					await import("./JSON.js")
				).default(
					"../Notation/TypeScript.json",
					(
						await import("path")
					).dirname(
						(await import("url")).fileURLToPath(import.meta.url),
					),
				)
			)?.compilerOptions,
			".",
		);
		(await import("typescript")).default
			.createProgram(
				[t],
				i,
				(await import("typescript")).default.createCompilerHost(i),
			)
			.emit(),
			await (await import("fs/promises")).writeFile(
				t.replace(".ts", ".js"),
				(await import("typescript")).default.transpile(
					(
						await (await import("fs/promises")).readFile(t, "utf-8")
					).toString(),
					i,
				),
			);
	}
	return (
		await import(
			(
				await import("url")
			)
				.pathToFileURL(t)
				.toString()
				.replace(".ts", ".js")
		)
	).default;
};
export { a as default };
