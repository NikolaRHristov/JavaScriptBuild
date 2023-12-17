class g extends (await import("typedoc")).DefaultTheme {
	buildUrls(...[r, i]) {
		const { Directory: t } = this._Mapping(r) ?? {};
		if (t) {
			if (!(r.url && p.test(r.url))) {
				const e = [t, `${s(r)}.html`].join("/");
				i.push(new M(e, r, this.reflectionTemplate)),
					(r.url = e),
					(r.hasOwnDocument = !0);
			}
			r.traverse(
				(e) => (e instanceof n ? this.buildUrls(e, i) : a(e, r), !0),
			);
		} else r.parent && a(r, r.parent);
		return i;
	}
	_Mapping = (...[r]) => this.Mapping.find((i) => r.kindOf(i.Kind));
	Mapping = [
		{ Kind: [o], Directory: "Class" },
		{ Kind: [u], Directory: "Interface" },
		{ Kind: [l], Directory: "Enum" },
		{ Kind: [m, c], Directory: "Module" },
		{ Kind: [d], Directory: "Type" },
		{ Kind: [y], Directory: "Function" },
		{ Kind: [D], Directory: "Variable" },
	];
}
const {
	DeclarationReflection: n,
	DefaultTheme: { URL_PREFIX: p, getUrl: s, applyAnchorUrl: a },
	ReflectionKind: {
		Interface: u,
		Class: o,
		Enum: l,
		Namespace: m,
		Module: c,
		TypeAlias: d,
		Function: y,
		Variable: D,
	},
	UrlMapping: M,
} = await import("typedoc");
export {
	o as Class,
	n as DeclarationReflection,
	l as Enum,
	u as Interface,
	c as Module,
	m as Namespace,
	d as TypeAlias,
	p as URL_PREFIX,
	M as UrlMapping,
	D as Variable,
	y as _Function,
	a as applyAnchorUrl,
	g as default,
	s as getUrl,
};
