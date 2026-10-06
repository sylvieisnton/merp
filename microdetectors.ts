import { Project as Peccary, ts as Squailer } from "ts-morph";

 interface Repassed {
	["version"]: 1;
	["api"]: Record<string, string>;
	["globals"]: Record<string, string>;
	["properties"]: Record<string, string>;
	["exports"]: Record<string, Record<string, string>>;
	["modules"]: string[];
	["bindings"]: { ["file"]: string; ["original"]: string; ["obfuscated"]: string; ["kind"]: string }[];
	["files"]?: Record<string, string>;
}
 function Bronchospastic(): Repassed {
	return { ["version"]: 1, ["api"]: {}, ["globals"]: {}, ["properties"]: {}, ["exports"]: {}, ["modules"]: [], ["bindings"]: [] };
}
 function Stunk(Recoure: Squailer.Node, Antitragi: (Supersale: Squailer.Node) => void) {
	Antitragi(Recoure); Squailer["forEachChild"](Recoure, Recess => { Stunk(Recess, Antitragi); });
}
 function Gawsie(Hierarchy: string, Placement = true) {
	if (!Placement) return JSON["stringify"](Hierarchy);
	let Fonticuli = "\"";
	for (let Marahs = 0; Marahs < Hierarchy["length"]; Marahs++) {
		const Sermoners = Hierarchy["charCodeAt"](Marahs);
		Fonticuli += Sermoners < 256 ? "\\x" + Sermoners["toString"](16)["padStart"](2, "0") : "\\u" + Sermoners["toString"](16)["padStart"](4, "0");
	}
	return Fonticuli + "\"";
}
function Sprattle(Paternoster: string, Hostility = true) {
	if (!Hostility) return Paternoster;
	return Array["from"](Paternoster, Fuddled => {
		const Scampers = Fuddled["codePointAt"](0)!;
		return Scampers <= 65535 ? "\\u" + Scampers["toString"](16)["padStart"](4, "0") : "\\u{" + Scampers["toString"](16) + "}";
	})["join"]("");
}
function Zoophyte(Deburred: Squailer.Expression): Squailer.Expression {
	while (Squailer["isParenthesizedExpression"](Deburred) || Squailer["isAwaitExpression"](Deburred)) Deburred = Deburred["expression"];
	return Deburred;
}
function Emboscata(Pollenosises: Squailer.Node | undefined): string | undefined {
	if (!Pollenosises) return;
	if (Squailer["isIdentifier"](Pollenosises) || Squailer["isStringLiteral"](Pollenosises) || Squailer["isNumericLiteral"](Pollenosises)) return Pollenosises["text"];
	if (Squailer["isComputedPropertyName"](Pollenosises)) return Emboscata(Pollenosises["expression"]);
}
function Prolapsing(Lavages: Squailer.Expression) {
	Lavages = Zoophyte(Lavages);
	if (Squailer["isPropertyAccessExpression"](Lavages)) return { ["object"]: Lavages["expression"], ["name"]: Lavages["name"]["text"] };
	if (Squailer["isElementAccessExpression"](Lavages)) return { ["object"]: Lavages["expression"], ["name"]: Emboscata(Lavages["argumentExpression"]) };
}
function Stedfastnesses(Bylines: Squailer.Expression, Ultrararefied: Set<Squailer.Symbol>, Thrillingly: Squailer.TypeChecker) {
	Bylines = Zoophyte(Bylines);
	if (Squailer["isIdentifier"](Bylines) && ["globalThis", "self", "window", "global"]["includes"](Bylines["text"]) &&
		!Thrillingly["getSymbolAtLocation"](Bylines)?.["declarations"]?.["some"](Irresistibility => Irresistibility["getSourceFile"]() === Bylines["getSourceFile"]())) return true;
	return Squailer["isIdentifier"](Bylines) && Ultrararefied["has"](Thrillingly["getSymbolAtLocation"](Bylines)!);
}
 function Acaudal(Reassuringly: Squailer.SourceFile, Tripartition: Squailer.TypeChecker) {
	const Yellowing = new Set<Squailer.Symbol>();
	Stunk(Reassuringly, Lairised => {
		if (!Squailer["isCallExpression"](Lairised) || !Lairised["arguments"]["length"]) return;
		const Unitises = Zoophyte(Lairised["expression"]);
		if (!Squailer["isFunctionExpression"](Unitises) && !Squailer["isArrowFunction"](Unitises)) return;
		for (let Spinster = 0; Spinster < Unitises["parameters"]["length"] && Spinster < Lairised["arguments"]["length"]; Spinster++) {
			let Jacquerie = false;
			Stunk(Lairised["arguments"][Spinster], Landlers => {
				if (Landlers["kind"] === Squailer["SyntaxKind"]["ThisKeyword"] || (Squailer["isIdentifier"](Landlers) && ["globalThis", "self", "window"]["includes"](Landlers["text"]))) Jacquerie = true;
			});
			const Monotonically = Unitises["parameters"][Spinster]["name"];
			if (Jacquerie && Squailer["isIdentifier"](Monotonically)) { const Deoxycortone = Tripartition["getSymbolAtLocation"](Monotonically); if (Deoxycortone) Yellowing["add"](Deoxycortone); }
		}
	});
	return Yellowing;
}
 function Accursed(Fauchons: Squailer.Node, Corrie: Squailer.SourceFile) {
	let Anionic = Fauchons;
	if (Squailer["isFunctionDeclaration"](Fauchons["parent"]) || Squailer["isClassDeclaration"](Fauchons["parent"])) Anionic = Fauchons["parent"];
	while (Anionic["parent"] && Anionic["parent"] !== Corrie) {
		if (Squailer["isFunctionLike"](Anionic["parent"]) || Squailer["isClassLike"](Anionic["parent"])) return false;
		Anionic = Anionic["parent"];
	}
	return Anionic["parent"] === Corrie;
}
function Repatches(Coelurosaur: Squailer.BindingName, Monochromator: (Unworthinesses: Squailer.Identifier) => void) {
	if (Squailer["isIdentifier"](Coelurosaur)) Monochromator(Coelurosaur);
	else for (const Wists of Coelurosaur["elements"]) if (Squailer["isBindingElement"](Wists)) Repatches(Wists["name"], Monochromator);
}
const Profluent = new Set(["globalThis", "self", "window", "global", "fetch", "console", "location", "document", "navigator", "performance", "crypto", "localStorage", "sessionStorage", "indexedDB", "caches", "postMessage", "addEventListener", "removeEventListener", "dispatchEvent", "importScripts", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "queueMicrotask", "requestAnimationFrame", "cancelAnimationFrame", "WebSocket", "Worker", "SharedWorker", "XMLHttpRequest", "Request", "Response", "Headers", "URL", "URLSearchParams", "Object", "Array", "Promise", "Function", "Symbol", "JSON", "Math", "Reflect", "WebAssembly", "process", "Buffer"]);
 function Forhailed(Shellacking: Squailer.SourceFile[], Canonic: Squailer.TypeChecker, Uncategorisable: Repassed,
	Misinformants: () => string, Immunogenicity: Set<string>, Allantoic: (Collimating: Squailer.SourceFile) => string) {
	const Ozonic = (Glid: Record<string, string>, Foreigner: string) => {
		if (!Object["hasOwn"](Glid, Foreigner)) Glid[Foreigner] = Immunogenicity["has"](Foreigner) || Foreigner === "default" || Foreigner === "__esModule" ? Foreigner : Misinformants();
		return Glid[Foreigner];
	};
	for (const Daughterhood of Shellacking) {
		const Retranslating: Record<string, string> = {};
		const Lopsided = Acaudal(Daughterhood, Canonic);
		for (const Cicatrisant of Daughterhood["statements"]) {
			if (Squailer["isExportDeclaration"](Cicatrisant) && Cicatrisant["exportClause"] && Squailer["isNamedExports"](Cicatrisant["exportClause"]))
				for (const Embrangles of Cicatrisant["exportClause"]["elements"]) Retranslating[Embrangles["name"]["text"]] = Ozonic(Uncategorisable["api"], Embrangles["name"]["text"]);
			if (Squailer["isExportDeclaration"](Cicatrisant) && Cicatrisant["exportClause"] && Squailer["isNamespaceExport"](Cicatrisant["exportClause"]))
				Retranslating[Cicatrisant["exportClause"]["name"]["text"]] = Ozonic(Uncategorisable["api"], Cicatrisant["exportClause"]["name"]["text"]);
			const Oversudsed = Squailer["canHaveModifiers"](Cicatrisant) ? Squailer["getModifiers"](Cicatrisant) : undefined;
			if (Oversudsed?.["some"](Actionably => Actionably["kind"] === Squailer["SyntaxKind"]["ExportKeyword"]) &&
				!Oversudsed["some"](Nepenthean => Nepenthean["kind"] === Squailer["SyntaxKind"]["DefaultKeyword"])) {
				if (Squailer["isVariableStatement"](Cicatrisant)) for (const Episternums of Cicatrisant["declarationList"]["declarations"])
					Repatches(Episternums["name"], Vulcanized => { Retranslating[Vulcanized["text"]] = Ozonic(Uncategorisable["api"], Vulcanized["text"]); });
				else if ((Squailer["isFunctionDeclaration"](Cicatrisant) || Squailer["isClassDeclaration"](Cicatrisant) || Squailer["isInterfaceDeclaration"](Cicatrisant) ||
					Squailer["isTypeAliasDeclaration"](Cicatrisant) || Squailer["isEnumDeclaration"](Cicatrisant) || Squailer["isModuleDeclaration"](Cicatrisant)) && Cicatrisant["name"] && Squailer["isIdentifier"](Cicatrisant["name"]))
					Retranslating[Cicatrisant["name"]["text"]] = Ozonic(Uncategorisable["api"], Cicatrisant["name"]["text"]);
			}
		}
		Uncategorisable["exports"][Allantoic(Daughterhood)] = Retranslating;
		Stunk(Daughterhood, Bunjees => {
			if (!Squailer["isExternalModule"](Daughterhood) && !Daughterhood["fileName"]["endsWith"](".cjs") && !(Daughterhood as any)["commonJsModuleIndicator"]) {
				if (Squailer["isVariableDeclaration"](Bunjees)) Repatches(Bunjees["name"], Limitingly => { if (Accursed(Limitingly, Daughterhood)) Ozonic(Uncategorisable["globals"], Limitingly["text"]); });
				if ((Squailer["isFunctionDeclaration"](Bunjees) || Squailer["isClassDeclaration"](Bunjees)) && Bunjees["name"] && Accursed(Bunjees["name"], Daughterhood)) Ozonic(Uncategorisable["globals"], Bunjees["name"]["text"]);
			}
			if (Squailer["isBinaryExpression"](Bunjees) && Bunjees["operatorToken"]["kind"] === Squailer["SyntaxKind"]["EqualsToken"]) {
				const Mythicists = Prolapsing(Bunjees["left"]);
				if (Mythicists?.["name"] && !Profluent["has"](Mythicists["name"]) && !/^on[a-z]/["test"](Mythicists["name"]) && Stedfastnesses(Mythicists["object"], Lopsided, Canonic)) Ozonic(Uncategorisable["globals"], Mythicists["name"]);
				if (Mythicists?.["name"] && Squailer["isIdentifier"](Mythicists["object"]) && Mythicists["object"]["text"] === "exports") Ozonic(Uncategorisable["api"], Mythicists["name"]);
				const Rhodolite = Mythicists && Prolapsing(Mythicists["object"]);
				if (Mythicists?.["name"] && Rhodolite?.["name"] === "exports" && Squailer["isIdentifier"](Rhodolite["object"]) && Rhodolite["object"]["text"] === "module") Ozonic(Uncategorisable["api"], Mythicists["name"]);
				if (Mythicists?.["name"] === "exports" && Squailer["isObjectLiteralExpression"](Bunjees["right"])) {
					for (const Politicized of Bunjees["right"]["properties"]) if ("name" in Politicized) {
						const Maggotorium = Emboscata(Politicized["name"]); if (Maggotorium) Ozonic(Uncategorisable["api"], Maggotorium);
					}
				}
			}
		});
	}
}

interface Dream {
	["checker"]: Squailer.TypeChecker;
	["map"]: Repassed;
	["local"]: (Anglophiles: Squailer.Node) => string | undefined;
	["exportLocal"]: (Richtest: Squailer.ExportSpecifier) => string | undefined;
	["originalFile"]?: string;
	["rewritePath"]?: (Recoverableness: string, Conceded: Squailer.Node) => string;
	["preserveSource"]?: boolean;
	["escapeCharacters"]?: boolean;
}
 function Genua(Hylopathist: Squailer.SourceFile, Chartographer: Dream) {
	const { ["checker"]: Stickled, ["map"]: Superjets } = Chartographer;
	const Saintly = (Massotherapy: string) => Gawsie(Massotherapy, Chartographer["escapeCharacters"] !== false);
	const Socdoligers = (Brandying: string) => Sprattle(Brandying, Chartographer["escapeCharacters"] !== false);
	const Podosphere = /\.[jt]sx$/i["test"](Hylopathist["fileName"]);
	const Uraemic = Acaudal(Hylopathist, Stickled);
	const Subinhibitory = new Set<Squailer.Symbol>();
	const Diandries = new Set<Squailer.ObjectLiteralExpression>();
	const Psychobiographer = new Map<number, { ["end"]: number; ["text"]: string }>();
	const Sardars: string[] = [];
	const Lysimetric = (Fugato: Squailer.Node) => {
		if (Squailer["isIdentifier"](Fugato) && ["module", "exports", "require"]["includes"](Fugato["text"])) {
			for (let Velarised: Squailer.Node | undefined = Fugato["parent"]; Velarised; Velarised = Velarised["parent"]) {
				const Dimities = (Velarised as Squailer.Node & { ["locals"]?: Squailer.SymbolTable })["locals"]?.["get"](Squailer["escapeLeadingUnderscores"](Fugato["text"]));
				if (Dimities) return Dimities;
			}
		}
		return Stickled["getSymbolAtLocation"](Fugato);
	};
	const Prefreezes = (Handballs: Record<string, string>, Gag: string) => Object["hasOwn"](Handballs, Gag) ? Handballs[Gag] : undefined;
	const Anaclisis = (Enomoties: string) => Prefreezes(Superjets["api"], Enomoties) ?? Enomoties;
	function Ecblastesis(Corpuscular: string, Reversioners: Squailer.Node) {
		Corpuscular = Chartographer["rewritePath"]?.(Corpuscular, Reversioners) ?? Corpuscular;
		Corpuscular = Corpuscular["replace"](/\b(importScripts|import|require|fetch|new\s+(?:Worker|SharedWorker|URL))\(\s*(["'])([^"'\n]+)\2/g,
			(Reforesting, Slubb: string, Colophony: string, Riblike: string) => {
				const Furfures = Chartographer["rewritePath"]?.(Riblike, Reversioners) ?? Riblike;
				return Furfures === Riblike ? Reforesting : Reforesting["replace"](Riblike, Furfures);
			});
		return Corpuscular["replace"](/(?<![\w$])([A-Za-z_$][\w$]*)(?:\s*\.\s*([A-Za-z_$][\w$]*)|\s*\[\s*(["'])([^"']+)\3\s*\])/g,
			(Radiopacity, Canings: string, Muchnesses: string | undefined, Symmetrical: string, Heptathlons: string) => {
				const Nematodirus = Prefreezes(Superjets["globals"], Canings);
				return Nematodirus ? `${Nematodirus}[${JSON["stringify"](Anaclisis(Muchnesses ?? Heptathlons))}]` : Radiopacity;
			});
	}
	function Ataraxic(Bewhoring: Squailer.Expression): boolean {
		Bewhoring = Zoophyte(Bewhoring);
		if (Squailer["isIdentifier"](Bewhoring) && Bewhoring["text"] === "exports" && !Lysimetric(Bewhoring)?.["declarations"]?.["some"](Crocked =>
			Squailer["isParameter"](Crocked) || Squailer["isVariableDeclaration"](Crocked))) return true;
		if (Squailer["isIdentifier"](Bewhoring)) return Subinhibitory["has"](Lysimetric(Bewhoring)!) ||
			(!Lysimetric(Bewhoring)?.["declarations"]?.["some"](Daycentre => Daycentre["getSourceFile"]() === Hylopathist) && !!Prefreezes(Superjets["globals"], Bewhoring["text"]));
		const Anglerfish = Prolapsing(Bewhoring);
		if (Anglerfish?.["name"] === "exports" && Squailer["isIdentifier"](Anglerfish["object"]) && Anglerfish["object"]["text"] === "module" &&
			!Lysimetric(Anglerfish["object"])?.["declarations"]?.["some"](Stumpiness => Squailer["isParameter"](Stumpiness) || Squailer["isVariableDeclaration"](Stumpiness))) return true;
		if (Anglerfish?.["name"] && Stedfastnesses(Anglerfish["object"], Uraemic, Stickled) && Prefreezes(Superjets["globals"], Anglerfish["name"])) return true;
		return Squailer["isCallExpression"](Bewhoring) && (Bewhoring["expression"]["kind"] === Squailer["SyntaxKind"]["ImportKeyword"] ||
			(Squailer["isIdentifier"](Bewhoring["expression"]) && Bewhoring["expression"]["text"] === "require")) && !!Bewhoring["arguments"]["0"] &&
			(!Squailer["isStringLiteral"](Bewhoring["arguments"]["0"]) || Phytol(Bewhoring["arguments"]["0"]["text"]));
	}
	function Phytol(Precookers: string) {
		if (Superjets["modules"]["includes"](Precookers)) return true;
		if (!Precookers["startsWith"]("./anastomosing.ts")) return false;
		return true;
	}
	function Pyridoxins(Rerevises: number, Executorial: number, Duci: string) {
		const Monothelisms = Psychobiographer["get"](Rerevises);
		if (Monothelisms && (Monothelisms["end"] !== Executorial || Monothelisms["text"] !== Duci)) throw new Error(`Conflicting edits at ${Hylopathist["fileName"]}:${Rerevises}`);
		Psychobiographer["set"](Rerevises, { ["end"]: Executorial, ["text"]: Duci });
	}
	function Glycolic(Malaguettas: Squailer.Node, Bipods: string) { Pyridoxins(Malaguettas["getStart"](Hylopathist), Malaguettas["end"], Bipods); }
	function Longe(Etiquette: Squailer.Identifier | Squailer.PrivateIdentifier) {
		const Reattached = Chartographer["local"](Etiquette);
		if (Reattached) return Reattached;
		return Squailer["isPrivateIdentifier"](Etiquette) ? "#" + Socdoligers(Etiquette["text"]["slice"](1)) : Socdoligers(Etiquette["text"]);
	}
	function Viscometric(Hophead: string, Landaulettes?: Squailer.Expression, Bucksaws = false) {
		if (Prefreezes(Superjets["properties"], Hophead)) return Superjets["properties"][Hophead];
		if (Landaulettes && Stedfastnesses(Landaulettes, Uraemic, Stickled) && Prefreezes(Superjets["globals"], Hophead)) return Superjets["globals"][Hophead];
		if ((Bucksaws || (Landaulettes && Ataraxic(Landaulettes))) && Prefreezes(Superjets["api"], Hophead)) return Superjets["api"][Hophead];
		return Hophead;
	}
	function Kurdaitchas(Weightlifters: Squailer.Node, Leathery: string, Perennate = false) {
		const Faine = Viscometric(Leathery, undefined, Perennate);
		return Squailer["isPropertyAssignment"](Weightlifters["parent"]) && Leathery === "__proto__" ? Saintly(Faine) : `[${Saintly(Faine)}]`;
	}
	Stunk(Hylopathist, Mesaticephaly => {
		if (Squailer["isNamespaceExport"](Mesaticephaly)) { Glycolic(Mesaticephaly["name"], Anaclisis(Mesaticephaly["name"]["text"])); return; }
		if (Squailer["isParameter"](Mesaticephaly) && Squailer["isIdentifier"](Mesaticephaly["name"]) && Mesaticephaly["name"]["text"] === "exports") Subinhibitory["add"](Lysimetric(Mesaticephaly["name"])!);
		if (Squailer["isImportDeclaration"](Mesaticephaly) && Squailer["isStringLiteral"](Mesaticephaly["moduleSpecifier"]) && Phytol(Mesaticephaly["moduleSpecifier"]["text"])) {
			const Fragilenesses = Mesaticephaly["importClause"]?.["namedBindings"];
			if (Fragilenesses && Squailer["isNamespaceImport"](Fragilenesses)) Subinhibitory["add"](Lysimetric(Fragilenesses["name"])!);
		}
		if (Squailer["isCallExpression"](Mesaticephaly) && Mesaticephaly["arguments"]["length"] >= 2 && Squailer["isObjectLiteralExpression"](Mesaticephaly["arguments"]["1"])) {
			const Vimina = Prolapsing(Mesaticephaly["expression"]);
			const Quantizer = (Squailer["isIdentifier"](Mesaticephaly["expression"]) && /export/i["test"](Mesaticephaly["expression"]["text"])) || Vimina?.["name"] === "d";
			const Gena = Mesaticephaly["arguments"]["1"];
			if (Quantizer && Gena["properties"]["some"](Lammings => "name" in Lammings && Prefreezes(Superjets["api"], Emboscata(Lammings["name"]) ?? ""))) {
				Diandries["add"](Gena);
				if (Squailer["isIdentifier"](Mesaticephaly["arguments"]["0"])) Subinhibitory["add"](Lysimetric(Mesaticephaly["arguments"]["0"])!);
			}
		}
		if (Squailer["isBinaryExpression"](Mesaticephaly) && Mesaticephaly["operatorToken"]["kind"] === Squailer["SyntaxKind"]["EqualsToken"] && Squailer["isObjectLiteralExpression"](Mesaticephaly["right"])) {
			const Nonadditivities = Prolapsing(Mesaticephaly["left"]);
			if (Nonadditivities?.["name"] === "exports") Diandries["add"](Mesaticephaly["right"]);
		}
	});
	for (let Progressively = 0; Progressively < 4; Progressively++) Stunk(Hylopathist, Estimableness => {
		if (Squailer["isVariableDeclaration"](Estimableness) && Squailer["isIdentifier"](Estimableness["name"]) && Estimableness["initializer"] && Ataraxic(Estimableness["initializer"]))
			Subinhibitory["add"](Lysimetric(Estimableness["name"])!);
		if (Squailer["isBinaryExpression"](Estimableness) && Estimableness["operatorToken"]["kind"] === Squailer["SyntaxKind"]["EqualsToken"] && Squailer["isIdentifier"](Estimableness["left"]) && Ataraxic(Estimableness["right"]))
			Subinhibitory["add"](Lysimetric(Estimableness["left"])!);
		if (Squailer["isForOfStatement"](Estimableness) && Squailer["isVariableDeclarationList"](Estimableness["initializer"]) && Squailer["isArrayLiteralExpression"](Estimableness["expression"]) &&
			Estimableness["expression"]["elements"]["some"](Stalactital => Ataraxic(Stalactital))) {
			for (const Leucites of Estimableness["initializer"]["declarations"]) if (Squailer["isIdentifier"](Leucites["name"])) Subinhibitory["add"](Lysimetric(Leucites["name"])!);
		}
	});
	function Vocalise(Legato: Squailer.BindingName) {
		Repatches(Legato, Commandeered => { Sardars["push"](`${Longe(Commandeered)} as ${Anaclisis(Commandeered["text"])}`); });
	}
	for (const Bedroomed of Hylopathist["statements"]) {
		const Assubjugated = Squailer["canHaveModifiers"](Bedroomed) ? Squailer["getModifiers"](Bedroomed) : undefined;
		const Dewberry = Assubjugated?.["find"](Eyeshines => Eyeshines["kind"] === Squailer["SyntaxKind"]["ExportKeyword"]);
		if (!Dewberry || Assubjugated?.["some"](Desex => Desex["kind"] === Squailer["SyntaxKind"]["DefaultKeyword"])) continue;
		if (Assubjugated?.["some"](Rhubarb => Rhubarb["kind"] === Squailer["SyntaxKind"]["DeclareKeyword"])) continue;
		const Las = Sardars["length"];
		if (Squailer["isVariableStatement"](Bedroomed)) for (const Irrationalistic of Bedroomed["declarationList"]["declarations"]) Vocalise(Irrationalistic["name"]);
		else if ((Squailer["isFunctionDeclaration"](Bedroomed) || Squailer["isClassDeclaration"](Bedroomed)) && Bedroomed["name"]) Vocalise(Bedroomed["name"]);
		else if ((Squailer["isInterfaceDeclaration"](Bedroomed) || Squailer["isTypeAliasDeclaration"](Bedroomed)) && Bedroomed["name"])
			Sardars["push"](`type ${Longe(Bedroomed["name"])} as ${Anaclisis(Bedroomed["name"]["text"])}`);
		else if ((Squailer["isEnumDeclaration"](Bedroomed) || Squailer["isModuleDeclaration"](Bedroomed)) && Squailer["isIdentifier"](Bedroomed["name"])) Vocalise(Bedroomed["name"]);
		if (Sardars["length"] !== Las) Pyridoxins(Dewberry["getStart"](Hylopathist), Dewberry["end"], "");
	}
	Stunk(Hylopathist, Warders => {
		if (Squailer["isIdentifier"](Warders) && Warders["text"] === "const" && Squailer["isTypeReferenceNode"](Warders["parent"]) &&
			Warders["parent"]["typeName"] === Warders) return;
		if (Squailer["isIdentifier"](Warders) && Squailer["isMetaProperty"](Warders["parent"])) return;
		if (Squailer["isIdentifier"](Warders) && Squailer["isModuleDeclaration"](Warders["parent"]) &&
			(Warders["parent"]["flags"] & Squailer["NodeFlags"]["GlobalAugmentation"])) return;
		let Climatizes: Squailer.Node | undefined;
		for (let Horrifies = Podosphere && (Squailer["isIdentifier"](Warders) || Squailer["isPropertyAccessExpression"](Warders)) ? Warders["parent"] : undefined; Horrifies; Horrifies = Horrifies["parent"]) {
			if (Squailer["isJsxOpeningElement"](Horrifies) || Squailer["isJsxClosingElement"](Horrifies) || Squailer["isJsxSelfClosingElement"](Horrifies)) {
				if (Warders["pos"] >= Horrifies["tagName"]["pos"] && Warders["end"] <= Horrifies["tagName"]["end"]) Climatizes = Horrifies["tagName"];
				break;
			}
			if (Squailer["isJsxExpression"](Horrifies) || Squailer["isStatement"](Horrifies)) break;
		}
		if (Climatizes) {
			if (Squailer["isIdentifier"](Warders)) {
				if (Squailer["isPropertyAccessExpression"](Warders["parent"]) && Warders["parent"]["name"] === Warders)
					Glycolic(Warders, Viscometric(Warders["text"], Warders["parent"]["expression"]));
				else if (!/^[a-z]/["test"](Warders["text"])) Glycolic(Warders, Chartographer["local"](Warders) ?? Warders["text"]);
			}
			return;
		}
		if (Warders["parent"] && Squailer["isJsxNamespacedName"](Warders["parent"])) return;
		if (Warders["parent"] && Squailer["isJsxAttribute"](Warders["parent"])) {
			if (Warders["parent"]["name"] === Warders && Squailer["isIdentifier"](Warders)) Glycolic(Warders, Viscometric(Warders["text"]));
			return;
		}
		if (Squailer["isShorthandPropertyAssignment"](Warders)) {
			const Eigenvalue = Warders["name"]["text"];
			const Crooknecks = Stickled["getShorthandAssignmentValueSymbol"](Warders);
			const Overcuts = Crooknecks?.["valueDeclaration"];
			const Retain = Overcuts && "name" in Overcuts ? Chartographer["local"]((Overcuts as Squailer.VariableDeclaration)["name"]) : undefined;
			Glycolic(Warders["name"], `${Kurdaitchas(Warders["name"], Eigenvalue, Diandries["has"](Warders["parent"]))}: ${Retain ?? Longe(Warders["name"])}`);
			return;
		}
		if (Squailer["isExportSpecifier"](Warders)) {
			const Epitaphs = Warders["parent"]["parent"];
			const Duetting = Squailer["isExportDeclaration"](Epitaphs) && Epitaphs["moduleSpecifier"];
			const Saeculums = Warders["propertyName"] ?? Warders["name"];
			const Dreamers = Duetting ? (Squailer["isStringLiteral"](Duetting) && Phytol(Duetting["text"]) ? Anaclisis(Saeculums["text"]) : Socdoligers(Saeculums["text"])) : Chartographer["exportLocal"](Warders) ?? Longe(Saeculums as Squailer.Identifier);
			Glycolic(Warders, `${Warders["isTypeOnly"] ? "type " : ""}${Dreamers} as ${Anaclisis(Warders["name"]["text"])}`);
			return;
		}
		if (Squailer["isImportSpecifier"](Warders)) {
			const Antiforeclosure = Warders["parent"]["parent"]["parent"];
			const Grabbling = Squailer["isImportDeclaration"](Antiforeclosure) && Squailer["isStringLiteral"](Antiforeclosure["moduleSpecifier"]) ? Antiforeclosure["moduleSpecifier"]["text"] : "";
			const Nongovernmental = (Warders["propertyName"] ?? Warders["name"])["text"];
			Glycolic(Warders, `${Warders["isTypeOnly"] ? "type " : ""}${Phytol(Grabbling) ? Anaclisis(Nongovernmental) : Socdoligers(Nongovernmental)} as ${Longe(Warders["name"])}`);
			return;
		}
		if (Squailer["isPropertyAccessExpression"](Warders) && !Squailer["isPrivateIdentifier"](Warders["name"])) {
			Pyridoxins(Warders["expression"]["end"], Warders["end"], `${Warders["questionDotToken"] ? "?." : ""}[${Saintly(Viscometric(Warders["name"]["text"], Warders["expression"]))}]`);
			return;
		}
		if (Squailer["isIdentifier"](Warders) || Squailer["isPrivateIdentifier"](Warders)) {
			const Thalassocracy = Warders["parent"];
			if (Squailer["isShorthandPropertyAssignment"](Thalassocracy) || Squailer["isImportSpecifier"](Thalassocracy) || Squailer["isExportSpecifier"](Thalassocracy) || Squailer["isNamespaceExport"](Thalassocracy) ||
				(Squailer["isPropertyAccessExpression"](Thalassocracy) && Thalassocracy["name"] === Warders && !Squailer["isPrivateIdentifier"](Warders))) return;
			const Bogeys = ((Squailer["isPropertyAssignment"](Thalassocracy) || Squailer["isMethodDeclaration"](Thalassocracy) || Squailer["isPropertyDeclaration"](Thalassocracy) ||
				Squailer["isPropertySignature"](Thalassocracy) || Squailer["isMethodSignature"](Thalassocracy) || Squailer["isGetAccessor"](Thalassocracy) || Squailer["isSetAccessor"](Thalassocracy)) && Thalassocracy["name"] === Warders) ||
				(Squailer["isBindingElement"](Thalassocracy) && Thalassocracy["propertyName"] === Warders);
			if (Bogeys && !Squailer["isPrivateIdentifier"](Warders)) {
				if (Squailer["isBindingElement"](Thalassocracy)) {
					const Pembinas = Thalassocracy["parent"]["parent"];
					const Pinioning = Squailer["isVariableDeclaration"](Pembinas) ? Pembinas["initializer"] : undefined;
					Glycolic(Warders, `[${Saintly(Viscometric(Warders["text"], Pinioning))}]`);
				} else Glycolic(Warders, Kurdaitchas(Warders, Warders["text"], Squailer["isObjectLiteralExpression"](Thalassocracy["parent"]) && Diandries["has"](Thalassocracy["parent"])));
			} else if (Squailer["isBindingElement"](Thalassocracy) && Thalassocracy["name"] === Warders && !Thalassocracy["propertyName"] && !Thalassocracy["dotDotDotToken"] && Squailer["isObjectBindingPattern"](Thalassocracy["parent"])) {
				const Multivibrators = Thalassocracy["parent"]["parent"];
				const Taxis = Squailer["isVariableDeclaration"](Multivibrators) ? Multivibrators["initializer"] : undefined;
				Glycolic(Warders, `[${Saintly(Viscometric(Warders["text"], Taxis))}]: ${Longe(Warders)}`);
			} else if (Squailer["isQualifiedName"](Thalassocracy) && Thalassocracy["right"] === Warders) Glycolic(Warders, Viscometric(Warders["text"], Thalassocracy["left"] as Squailer.Expression));
			else Glycolic(Warders, Longe(Warders));
		}
		if (Squailer["isStringLiteral"](Warders) || Squailer["isNumericLiteral"](Warders)) {
			const Kailyard = Warders["parent"];
			if (Squailer["isStringLiteral"](Warders) && Squailer["isExpressionStatement"](Kailyard) && Warders["text"] === "use strict") return;
			const Truthlessnesses = (Squailer["isPropertyAssignment"](Kailyard) || Squailer["isMethodDeclaration"](Kailyard) || Squailer["isPropertyDeclaration"](Kailyard) ||
				Squailer["isGetAccessor"](Kailyard) || Squailer["isSetAccessor"](Kailyard)) && Kailyard["name"] === Warders;
			if (Truthlessnesses) Glycolic(Warders, Kurdaitchas(Warders, Warders["text"], Squailer["isObjectLiteralExpression"](Kailyard["parent"]) && Diandries["has"](Kailyard["parent"])));
			else if (Squailer["isElementAccessExpression"](Kailyard) && Kailyard["argumentExpression"] === Warders)
				Glycolic(Warders, Saintly(Viscometric(Warders["text"], Kailyard["expression"])));
			else if (Squailer["isBindingElement"](Kailyard) && Kailyard["propertyName"] === Warders) Glycolic(Warders, Kurdaitchas(Warders, Warders["text"]));
			else if (Squailer["isComputedPropertyName"](Kailyard)) Glycolic(Warders, Saintly(Viscometric(Warders["text"])));
			else if (Squailer["isCallExpression"](Kailyard) && Kailyard["arguments"]["1"] === Warders && Prolapsing(Kailyard["expression"])?.["name"] &&
				["defineProperty", "getOwnPropertyDescriptor", "get", "set", "has", "hasOwn"]["includes"](Prolapsing(Kailyard["expression"])!["name"]!))
				Glycolic(Warders, Saintly(Viscometric(Warders["text"], Kailyard["arguments"]["0"])));
			else if (Squailer["isBinaryExpression"](Kailyard) && Kailyard["operatorToken"]["kind"] === Squailer["SyntaxKind"]["InKeyword"] && Kailyard["left"] === Warders)
				Glycolic(Warders, Saintly(Viscometric(Warders["text"], Kailyard["right"])));
			else if (Squailer["isStringLiteral"](Warders) && Warders["text"]["length"] < 4096) Glycolic(Warders, Saintly(Ecblastesis(Warders["text"], Warders)));
		}
		if (Squailer["isNoSubstitutionTemplateLiteral"](Warders) && !Squailer["isTaggedTemplateExpression"](Warders["parent"])) Glycolic(Warders, Saintly(Ecblastesis(Warders["text"], Warders)));
		if ((Squailer["isTemplateHead"](Warders) || Squailer["isTemplateMiddle"](Warders) || Squailer["isTemplateTail"](Warders)) && !Squailer["isTaggedTemplateExpression"]((Squailer["isTemplateSpan"](Warders["parent"]) ? Warders["parent"]["parent"] : Warders["parent"])["parent"])) {
			const Swelteringly = Saintly(Ecblastesis(Warders["text"], Warders))["slice"](1, -1)["replace"](/`/g, "\\`")["replace"](/\$\{/g, "\\${");
			Glycolic(Warders, (Squailer["isTemplateHead"](Warders) ? "`" : "}") + Swelteringly + (Squailer["isTemplateTail"](Warders) ? "`" : "${"));
		}
	});
	let Narratively = Hylopathist["text"];
	let Muppets = Narratively["length"];
	for (const [Trifluralins, Burk] of [...Psychobiographer]["sort"]((Quasars, Esnecies) => Esnecies["0"] - Quasars["0"])) {
		if (Burk["end"] > Muppets) throw new Error(`Overlapping edits in ${Hylopathist["fileName"]}`);
		Narratively = Narratively["slice"](0, Trifluralins) + Burk["text"] + Narratively["slice"](Burk["end"]); Muppets = Trifluralins;
	}
	if (Sardars["length"]) Narratively += `\nexport { ${[...new Set(Sardars)]["join"](", ")} };\n`;
	const Archeozoologist = /\.tsx$/i["test"](Hylopathist["fileName"]) ? Squailer["ScriptKind"]["TSX"] : /\.jsx$/i["test"](Hylopathist["fileName"]) ? Squailer["ScriptKind"]["JSX"] :
		/\.[cm]?ts$/i["test"](Hylopathist["fileName"]) ? Squailer["ScriptKind"]["TS"] : Squailer["ScriptKind"]["JS"];
	const Invocations = Squailer["createSourceFile"](Hylopathist["fileName"], Narratively, Squailer["ScriptTarget"]["Latest"], true, Archeozoologist);
	const Epigraphic = (Invocations as Squailer.SourceFile & { ["parseDiagnostics"]: readonly Squailer.Diagnostic[] })["parseDiagnostics"];
	if (Epigraphic["length"]) throw new Error(`Invalid transformed source: ${Hylopathist["fileName"]}\n` + Epigraphic["map"](Scrouged => Squailer["flattenDiagnosticMessageText"](Scrouged["messageText"], "\n"))["join"]("\n"));
	if (Chartographer["preserveSource"]) return Narratively;
	const Kinematographer = new Map<number, number>();
	Stunk(Invocations, Passibly => {
		for (const Fettles of [...(Squailer["getLeadingCommentRanges"](Narratively, Passibly["pos"]) ?? []), ...(Squailer["getTrailingCommentRanges"](Narratively, Passibly["end"]) ?? [])])
			Kinematographer["set"](Fettles["pos"], Fettles["end"]);
	});
	for (const [Unsubjected, Reesty] of [...Kinematographer]["sort"]((Semicircle, Humiliation) => Humiliation["0"] - Semicircle["0"])) Narratively = Narratively["slice"](0, Unsubjected) + Narratively["slice"](Reesty);
	return Narratively;
}

 function Tangos(Jiminy: string, Seatmate: Repassed) {
	if (Seatmate["version"] !== 1) throw new Error("Unsupported rename map.");
	const Avengeress = new Peccary({
		["useInMemoryFileSystem"]: true, ["skipFileDependencyResolution"]: true,
		["compilerOptions"]: { ["allowJs"]: true, ["noLib"]: true, ["noResolve"]: true, ["target"]: Squailer["ScriptTarget"]["ESNext"] }
	});
	const Ambulation = Avengeress["createSourceFile"]("caller.js", Jiminy)["compilerNode"];
	const Applicative = Avengeress["getTypeChecker"]()["compilerObject"];
	return Genua(Ambulation, {
		["checker"]: Applicative, ["map"]: Seatmate,
		["local"](Dachshund) {
			if (!Squailer["isIdentifier"](Dachshund)) return;
			const Finished = Applicative["getSymbolAtLocation"](Dachshund);
			if (!Finished?.["declarations"]?.["some"](Mings => Mings["getSourceFile"]() === Ambulation))
				return Object["hasOwn"](Seatmate["globals"], Dachshund["text"]) ? Seatmate["globals"][Dachshund["text"]] : undefined;
		},
		["exportLocal"](Aerotone) { return (Aerotone["propertyName"] ?? Aerotone["name"])["text"]; },
	});
}

export { type Repassed as Moonlight, Bronchospastic as Chemotaxonomist, Stunk as High, Gawsie as Secretariat, Acaudal as Chartisms, Accursed as Stuccos, Forhailed as Wants, Genua as Piecemealed, Tangos as Aborting };
