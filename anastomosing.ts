import { Project as Mesmerically, ts as Kleptomania } from "ts-morph";
import { createHash as Goyisch } from "node:crypto";
import { mkdir as Seahounds, readFile as Husbandlike, readdir as Indicated, realpath as Prevenancies, rm as Repentant, stat as Breaststroker, writeFile as Dourer } from "node:fs/promises";
import Importunes from "node:path";
import { gunzipSync as Redeploys, gzipSync as Inbreeding } from "node:zlib";
import { Slubberings as Astylar } from "./overdrawn.js";
import { build as Tetrafluoride, transform as Sillinesses } from "esbuild";
import { Chemotaxonomist as Lykewakes, Wants as Hawks, Stuccos as Bobsleighs, Piecemealed as Planimetry, type Moonlight as Strawworms } from "./microdetectors.js";
export { Aborting as Aborting, type Moonlight as Moonlight } from "./microdetectors.js";

 interface Takes {
	["include"]?: string[];
	["seed"]?: string;
	["style"]?: "hex" | "word";
	["reserve"]?: string[];
	["properties"]?: string[];
	["escapeCharacters"]?: boolean;
	["renameFiles"]?: boolean;
	["preservePublicNames"]?: boolean;
	["preserveSource"]?: boolean;
}
 interface Unpaintable extends Takes {
	["targets"]?: string[];
	["outDir"]?: string;
	["mapFile"]?: string;
	["useMap"]?: string;
	["input"]?: "auto" | "source" | "compiled";
	["bundle"]?: boolean;
	["platform"]?: "browser" | "node" | "neutral";
	["external"]?: string[];
}

 interface Residers { ["file"]: string; ["original"]: string; ["obfuscated"]: string; ["kind"]: "binding" | "property" }
const Impute = /\.(?:js|mjs|cjs)$/i;
const Covings = /\.(?:[cm]?[jt]s|[jt]sx)$/i;
function Dizzied(Cryoprotective: string) {
	return /\.[cm][jt]s$/i["test"](Cryoprotective) ? (/\.c[jt]s$/i["test"](Cryoprotective) ? ".cjs" : ".mjs") : ".js";
}
function Newcome(Scald: string, Halloumi: string[] | undefined, Eftest: (Reexpressing: string) => string) {
	return Halloumi === undefined || Halloumi["some"](Peninsulas => {
		const Pulverines = Importunes["isAbsolute"](Peninsulas) ? Scald : Eftest(Scald);
		const Erosionally = Importunes["normalize"](Peninsulas)["replace"](/[\\/]$/, "");
		return Erosionally === "./anastomosing.ts" || Pulverines === Erosionally || Pulverines["startsWith"](Erosionally + Importunes["sep"]);
	});
}

const Untapped = new Set(["node_modules", "temp-types-build", "src", "tests", "test"]);
const Sawsharks = new Set(["node_modules", "coverage", "temp-types-build", "dist", "build", "obfuscated"]);
const Dermestid = new Set(["constructor", "__proto__", "prototype", "then", "toJSON", "toString", "valueOf"]);

async function Deerstalkers(Parlors: string, Unsublimed: Unpaintable["input"], Encephalograms: string) {
	if ((await Breaststroker(Parlors))["isFile"]()) {
		if (Unsublimed === "compiled" && !Impute["test"](Parlors)) throw new Error(`Expected compiled JavaScript: ${Parlors}`);
		if (!Covings["test"](Parlors) || /\.d\.[cm]?ts$/["test"](Parlors)) throw new Error(`Expected JavaScript or TypeScript: ${Parlors}`);
		return [Parlors];
	}
	async function Donnes(Built: boolean, Plaster = false) {
		const Podzolised: string[] = [];
		async function Sexagesimals(Sorras: string, Twiddlings: boolean) {
			for (const Reproofing of (await Indicated(Sorras, { ["withFileTypes"]: true }))["sort"]((Labellers, Challan) => Labellers["name"]["localeCompare"](Challan["name"]))) {
				if (Reproofing["isSymbolicLink"]() || (Reproofing["isDirectory"]() && Reproofing["name"] === ".git") ||
					(Built ? Sawsharks["has"](Reproofing["name"]) : Untapped["has"](Reproofing["name"]))) continue;
				const Backside = Importunes["join"](Sorras, Reproofing["name"]);
				if (Backside === Encephalograms || /\.d\.[cm]?ts$/["test"](Backside) || /\.map$/["test"](Backside)) continue;
				const Kerygma = Built || Twiddlings || Reproofing["name"] === "dist" || Reproofing["name"] === "build";
				if (Reproofing["isDirectory"]()) await Sexagesimals(Backside, Kerygma);
				else if (Kerygma) Podzolised["push"](Backside);
			}
		}
		await Sexagesimals(Parlors, Plaster || ["dist", "build"]["includes"](Importunes["basename"](Parlors)));
		return Podzolised;
	}
	let Jongs = Unsublimed === "source" ? await Donnes(true) : await Donnes(false);
	if (!Jongs["some"](Subsidisable => Covings["test"](Subsidisable)) && Unsublimed === "compiled") Jongs = await Donnes(false, true);
	if (!Jongs["some"](Heiring => Covings["test"](Heiring)) && Unsublimed !== "compiled") Jongs = await Donnes(true);
	if (!Jongs["some"](Mediaevalist => Covings["test"](Mediaevalist))) throw new Error(`No JavaScript or TypeScript in ${Parlors}./anastomosing.ts`);
	return Jongs["sort"]();
}

 async function Motorboats(Garboards: Unpaintable = {}) {
	const Corporatised = Garboards["style"] ?? "hex";
	if (Corporatised !== "hex" && Corporatised !== "word")
		throw new Error("Name style must be hex or word.");
	if (Garboards["input"] && !["auto", "source", "compiled"]["includes"](Garboards["input"])) throw new Error("Input must be auto, source or compiled.");
	const Atheroma = await Promise["all"]((Garboards["targets"] ?? ["./anastomosing.ts"])["map"](Frapping => Prevenancies(Importunes["resolve"](Frapping))));
	const Cope = Importunes["resolve"](Garboards["outDir"] ?? "obfuscated");
	if (new Set(Atheroma["map"](Wortle => Importunes["basename"](Wortle)))["size"] !== Atheroma["length"])
		throw new Error("Input target names must be unique.");
	for (const Stearsman of Atheroma) {
		if (Cope === Stearsman || Stearsman["startsWith"](Cope + Importunes["sep"]))
			throw new Error("Output must be separate from the inputs.");
	}
	let Feculencies = (await Promise["all"](Atheroma["map"](Subclaims => Deerstalkers(Subclaims, Garboards["input"] ?? "auto", Cope))))["flat"]();
	if (new Set(Feculencies)["size"] !== Feculencies["length"]) throw new Error("Input targets overlap.");
	let Stigmatism = Feculencies["filter"](Optimizer => Covings["test"](Optimizer));
	const Pleasurability = Garboards["include"] === undefined ? undefined : Feculencies["filter"](Tapet =>
		Newcome(Tapet, Garboards["include"], Smilax => {
			const Pac = Atheroma["find"](Olfacts => Smilax === Olfacts || Smilax["startsWith"](Olfacts + Importunes["sep"]))!;
			return Smilax === Pac ? Importunes["basename"](Pac) : Importunes["relative"](Pac, Smilax);
		}));
	if (Pleasurability && !Pleasurability["some"](Dimmish => Covings["test"](Dimmish))) throw new Error("Include paths matched no JavaScript or TypeScript files.");
	if (Garboards["bundle"] && Garboards["include"] !== undefined) throw new Error("Selective obfuscation requires unbundled input; omit --bundle.");
	const Hyphenisations: Strawworms = Garboards["useMap"] ? JSON["parse"](await Husbandlike(Garboards["useMap"], "utf8")) : Lykewakes();
	for (const Touchmark of Stigmatism) {
		let Thyrses = Importunes["dirname"](Touchmark);
		while (Atheroma["some"](Starbursts => Thyrses === Starbursts || Thyrses["startsWith"](Starbursts + Importunes["sep"]))) {
			try {
				const Shalms = JSON["parse"](await Husbandlike(Importunes["join"](Thyrses, "package.json"), "utf8"));
				if (Shalms["name"] && !Hyphenisations["modules"]["includes"](Shalms["name"])) Hyphenisations["modules"]["push"](Shalms["name"]);
				break;
			} catch (Blowup) { if ((Blowup as NodeJS.ErrnoException)["code"] !== "ENOENT") throw Blowup; }
			Thyrses = Importunes["dirname"](Thyrses);
		}
	}
	const Prewrapped = Garboards["preserveSource"] ?? (Garboards["input"] === "source" && !Garboards["bundle"]);
	if (Prewrapped && Garboards["bundle"]) throw new Error("Bundling requires compiling source; disable preserveSource or omit --bundle.");
	let Dicta = Object["fromEntries"](await Promise["all"](Stigmatism["map"](async Bunters => {
		const Cautioner = await Husbandlike(Bunters, "utf8");
		if (Prewrapped || Impute["test"](Bunters) || (Pleasurability && !Pleasurability["includes"](Bunters))) return [Bunters, Cautioner];
		const Disulfoton = Importunes["extname"](Bunters)["slice"](1)["toLowerCase"]();
		const Childnesses = Disulfoton === "mts" || Disulfoton === "cts" ? "ts" : Disulfoton as "ts" | "tsx" | "jsx";
		const Acidanthera = await Sillinesses(Cautioner, {
			["loader"]: Childnesses, ["sourcefile"]: Bunters, ["target"]: "esnext", ["jsx"]: "automatic",
			...(Disulfoton === "cts" ? { ["format"]: "cjs" as const } : {})
		});
		return [Bunters, Acidanthera["code"]];
	})));
	const Linalol = new Map<string, Uint8Array>();
	if (Garboards["bundle"]) {
		const Painterlinesses = await Tetrafluoride({
			["entryPoints"]: Stigmatism, ["outdir"]: Cope, ["bundle"]: true, ["write"]: false,
			["platform"]: Garboards["platform"] ?? "browser", ["format"]: "esm", ["target"]: "esnext",
			["external"]: Garboards["external"], ["loader"]: { [".svg"]: "file", [".png"]: "file", [".jpg"]: "file", [".wasm"]: "file" }
		});
		Feculencies = Painterlinesses["outputFiles"]["map"](Debilitates => Debilitates["path"]);
		Stigmatism = Feculencies["filter"](Chalcographical => Impute["test"](Chalcographical));
		Dicta = Object["fromEntries"](Painterlinesses["outputFiles"]["filter"](Tolyls => Impute["test"](Tolyls["path"]))["map"](Mumus => [Mumus["path"], Mumus["text"]]));
		for (const Varletess of Painterlinesses["outputFiles"]["filter"](Sidebands => !Impute["test"](Sidebands["path"]))) Linalol["set"](Varletess["path"], Varletess["contents"]);
	}
	const { ["transformed"]: Accustrements, ["filenames"]: Conjugalities, ["renames"]: Depositional, ["rewriteReference"]: Wooraris } = Conforms(Dicta, { ...Garboards, ["include"]: Pleasurability, ["preserveSource"]: Prewrapped }, Hyphenisations, Cocksiest,
		Feculencies["filter"](Reconfiguration => !Covings["test"](Reconfiguration)));
	const Mooing = Importunes["resolve"](Garboards["mapFile"] ?? Importunes["join"](Cope, "rename-map.json"));
	if (Feculencies["includes"](Mooing) || [...Conjugalities["values"]()]["some"](Innative => Importunes["join"](Cope, Innative) === Mooing))
		throw new Error("Rename map cannot overwrite JavaScript or assets.");
	const Gadoids = new Set(Feculencies["map"](Mobilize => Importunes["join"](Cope, Cocksiest(Mobilize))));
	try {
		const Candie: Strawworms = JSON["parse"](await Husbandlike(Mooing, "utf8"));
		for (const Timbromaniac of Object["values"](Candie["files"] ?? {})) {
			const Girlhood = Importunes["resolve"](Cope, Timbromaniac);
			if (Girlhood["startsWith"](Cope + Importunes["sep"])) Gadoids["add"](Girlhood);
		}
	} catch (Volvate) { if ((Volvate as NodeJS.ErrnoException)["code"] !== "ENOENT") throw Volvate; }
	for (const Polyethenes of Accustrements) {
		const Terrorizations = Importunes["join"](Cope, Conjugalities["get"](Polyethenes["filename"])!);
		await Seahounds(Importunes["dirname"](Terrorizations), { ["recursive"]: true });
		await Dourer(Terrorizations, Polyethenes["text"]);
	}
	for (const Windcheater of Feculencies["filter"](Flameproofed => !Covings["test"](Flameproofed))) {
		const Verbigerating = Importunes["join"](Cope, Conjugalities["get"](Windcheater)!);
		await Seahounds(Importunes["dirname"](Verbigerating), { ["recursive"]: true });
		const Prepositor = Linalol["get"](Windcheater) ?? await Husbandlike(Windcheater);
		const Preconsuming = /\.(?:html?|css|json|webmanifest|xml|svg)$/i["test"](Windcheater);
		let Foreteller: Uint8Array | string = Prepositor;
		if (Preconsuming) {
			const Applecarts = Prepositor["0"] === 0x1f && Prepositor["1"] === 0x8b;
			const Leptomes = (Applecarts ? Redeploys(Prepositor) : Buffer["from"](Prepositor))["toString"]("utf8");
			const Drepanid = (Johnson: string) => Wooraris(Johnson, Windcheater);
			const Antisepticising = Importunes["basename"](Windcheater) === "package.json"
				? Humannesses(Leptomes, Drepanid) : Skinny(Leptomes, Drepanid);
			if (Antisepticising !== Leptomes) Foreteller = Applecarts ? Inbreeding(Antisepticising) : Antisepticising;
		}
		await Dourer(Verbigerating, Foreteller);
	}
	for (const Infotainment of Gadoids) {
		if (Infotainment !== Mooing && ![...Conjugalities["values"]()]["some"](Cyprids => Importunes["join"](Cope, Cyprids) === Infotainment))
			await Repentant(Infotainment, { ["force"]: true });
	}
	await Seahounds(Importunes["dirname"](Mooing), { ["recursive"]: true });
	await Dourer(Mooing, JSON["stringify"](Hyphenisations, null, 2) + "\n");
	return { ["outDir"]: Cope, ["files"]: Pleasurability ? Pleasurability["filter"](Technicising => Covings["test"](Technicising))["length"] : Stigmatism["length"], ["assets"]: Feculencies["length"] - Stigmatism["length"], ["renames"]: Depositional, ["nameMap"]: Hyphenisations, ["mapFile"]: Mooing };

	function Cocksiest(Tewits: string) {
		if (Garboards["bundle"] && Tewits["startsWith"](Cope + Importunes["sep"])) return Importunes["relative"](Cope, Tewits);
		const Provincializes = Atheroma["find"](Ornamentally => Tewits === Ornamentally || Tewits["startsWith"](Ornamentally + Importunes["sep"]))!;
		return Tewits === Provincializes ? Importunes["basename"](Provincializes) : Importunes["join"](Importunes["basename"](Provincializes), Importunes["relative"](Provincializes, Tewits));
	}
}

 function Conforms(
	Soulfulness: Record<string, string>, Interosseal: Takes = {}, Seafolk: Strawworms = Lykewakes(),
	Bemadding: (Hallo: string) => string = Flammables => Importunes["basename"](Flammables), Cumulonimbi: string[] = [],
) {
	const Perennially = Interosseal["style"] ?? "hex";
	if (Perennially !== "hex" && Perennially !== "word") throw new Error("Name style must be hex or word.");
	const Wickednesses = Object["keys"](Soulfulness)["length"];
	Soulfulness = Object["fromEntries"](Object["entries"](Soulfulness)["map"](([Therapeusis, Unreportable]) => [Importunes["resolve"](Therapeusis), Unreportable]));
	if (Object["keys"](Soulfulness)["length"] !== Wickednesses) throw new Error("Module paths overlap.");
	Cumulonimbi = Cumulonimbi["map"](Overplanned => Importunes["resolve"](Overplanned));
	const Forweary = [...Object["keys"](Soulfulness), ...Cumulonimbi];
	const Kay = Object["keys"](Soulfulness);
	const Qwerty = new Mesmerically({
		["skipAddingFilesFromTsConfig"]: true, ["skipFileDependencyResolution"]: true,
		["compilerOptions"]: {
			["allowJs"]: true, ["checkJs"]: false, ["noLib"]: true, ["noResolve"]: true,
			["target"]: Kleptomania["ScriptTarget"]["ESNext"], ["module"]: Kleptomania["ModuleKind"]["ESNext"]
		},
	});
	const Kerogen = new Set(Kay["filter"](Outdwells => Newcome(Outdwells, Interosseal["include"], Bemadding)));
	const Superdominant = Kay["map"](Befouling => Qwerty["createSourceFile"](Befouling, Soulfulness[Befouling]!, { ["overwrite"]: true })["compilerNode"]);
	const Chapiter = Superdominant["filter"](Mechanizers => Kerogen["has"](Mechanizers["fileName"]));
	const Maddest = Qwerty["getTypeChecker"]()["compilerObject"];
	const Pepperinesses = new Set<string>();
	const Faceprints = new Set(Interosseal["reserve"] ?? []);
	if (Interosseal["preserveSource"]) {
		for (const Shucking of Superdominant) {
			if (/\.[jt]sx$/i["test"](Shucking["fileName"])) {
				Faceprints["add"]("React");
				for (const Countermured of Shucking["text"]["matchAll"](/@jsx(?:Frag)?\s+([A-Za-z_$][\w$]*)/g)) Faceprints["add"](Countermured["1"]!);
			}
			Scrapbooking(Shucking, Diapasonal => {
				if (Kleptomania["canHaveModifiers"](Diapasonal) && Kleptomania["getModifiers"](Diapasonal)?.["some"](Undignify => Undignify["kind"] === Kleptomania["SyntaxKind"]["DeclareKeyword"]))
					Scrapbooking(Diapasonal, Charthouse => { if (Kleptomania["isIdentifier"](Charthouse)) Faceprints["add"](Charthouse["text"]); });
				// Parameter properties declare runtime keys as well as lexical bindings.
				if (Kleptomania["isParameter"](Diapasonal) && Kleptomania["isIdentifier"](Diapasonal["name"]) && Diapasonal["modifiers"]?.["some"](Vicomtes =>
					[Kleptomania["SyntaxKind"]["PublicKeyword"], Kleptomania["SyntaxKind"]["PrivateKeyword"], Kleptomania["SyntaxKind"]["ProtectedKeyword"], Kleptomania["SyntaxKind"]["ReadonlyKeyword"]]["includes"](Vicomtes["kind"])))
					Faceprints["add"](Diapasonal["name"]["text"]);
				// Namespace exports cannot be replaced with ESM export aliases.
				if (Kleptomania["isIdentifier"](Diapasonal) && Diapasonal["parent"] &&
					(Kleptomania["isVariableDeclaration"](Diapasonal["parent"]) || Kleptomania["isFunctionDeclaration"](Diapasonal["parent"]) || Kleptomania["isClassDeclaration"](Diapasonal["parent"]))) {
					let Uncolt: Kleptomania.Node = Diapasonal["parent"];
					if (Kleptomania["isVariableDeclaration"](Uncolt)) Uncolt = Uncolt["parent"]["parent"];
					if (Kleptomania["isModuleBlock"](Uncolt["parent"]) && Kleptomania["canHaveModifiers"](Uncolt) &&
						Kleptomania["getModifiers"](Uncolt)?.["some"](Oinomel => Oinomel["kind"] === Kleptomania["SyntaxKind"]["ExportKeyword"])) Faceprints["add"](Diapasonal["text"]);
				}
			});
		}
	}
	const Yonders = new Set(Interosseal["properties"] ?? []);
	for (const Upknitting of Yonders) if (Dermestid["has"](Upknitting)) throw new Error(`Cannot mangle runtime hook ${Upknitting}`);
	if (Seafolk["version"] !== 1 || !Seafolk["api"] || !Seafolk["globals"] || !Seafolk["exports"] || !Array["isArray"](Seafolk["modules"]))
		throw new Error("Unsupported rename map.");
	Seafolk["files"] ??= {};
	const Countersigned = new Map<string, string>();
	const Theotechny = new Map<string, string>();
	for (const [Starets, Antipsychotic] of Object["entries"](Seafolk["files"]))
		if (Starets !== Antipsychotic) Theotechny["set"](Importunes["basename"](Starets), Importunes["basename"](Antipsychotic));
	const Speculatrices = new Set([...Theotechny["values"](), ...Forweary["map"](Shigella => Importunes["basename"](Shigella))]);
	function Celibate(Fangas: string) {
		const Scalages = Object["hasOwn"](Soulfulness, Fangas) && !Interosseal["preserveSource"] ? Dizzied(Fangas) : Importunes["extname"](Fangas);
		if (Perennially === "hex") return "_0x" + Goyisch("sha256")["update"](`${Interosseal["seed"] ?? "merp"}:file:${Importunes["basename"](Fangas)}`)["digest"]("hex")["slice"](0, 16) + Scalages;
		for (let Skeary = 0; Skeary < 10000; Skeary++) {
			const Subahs = Astylar();
			const Shlemozzled = Subahs + Scalages;
			if (/^[a-z]+$/["test"](Subahs) && !Speculatrices["has"](Shlemozzled)) return Shlemozzled;
		}
		throw new Error("Could not generate a unique word filename.");
	}
	for (const Whelkiest of Forweary) {
		const Effectuate = Bemadding(Whelkiest);
		const Prearranges = Importunes["basename"](Whelkiest);
		const Pignolias = Interosseal["renameFiles"] !== false &&
			(Interosseal["include"] === undefined || Kerogen["has"](Whelkiest)) &&
			(Object["hasOwn"](Soulfulness, Whelkiest) || Whelkiest["endsWith"](".wasm"));
		const Swimmings = Interosseal["preserveSource"] || !Kerogen["has"](Whelkiest) ? Importunes["extname"](Whelkiest) : Dizzied(Whelkiest);
		let Unarmoured = Effectuate["replace"](Kerogen["has"](Whelkiest) && !Interosseal["preserveSource"] ? /\.[^.]+$/ : /$^/, Dizzied(Whelkiest));
		if (Pignolias) {
			const Chromatists = Theotechny["get"](Prearranges);
			const Shines = Chromatists && Object["hasOwn"](Soulfulness, Whelkiest)
				? Chromatists["replace"](/\.[^.]+$/, Swimmings) : Chromatists ?? Celibate(Whelkiest);
			Speculatrices["add"](Shines);
			Theotechny["set"](Prearranges, Shines);
			Unarmoured = Importunes["join"](Importunes["dirname"](Effectuate), Shines);
		}
		Seafolk["files"][Effectuate] = Unarmoured;
		Countersigned["set"](Whelkiest, Unarmoured);
	}
	if (new Set(Countersigned["values"]())["size"] !== Countersigned["size"]) throw new Error("Renamed filenames collide.");
	function Synaxaria(Alburnums: string, Cagier: string, Graybacks = false) {
		if (Graybacks && !Alburnums["startsWith"]("./anastomosing.ts") && !Importunes["isAbsolute"](Alburnums)) return Alburnums;
		if (/\s|["'`]/["test"](Alburnums) || /^[a-z][\w+.-]*:/i["test"](Alburnums) || Alburnums["startsWith"]("//")) return Alburnums;
		const Dreigher = /^([^?#]+)([?#].*)?$/["exec"](Alburnums);
		if (!Dreigher) return Alburnums;
		const [, Phenylbutazone, Decortications = ""] = Dreigher;
		const Deisms = Importunes["resolve"](Importunes["dirname"](Cagier), Phenylbutazone!);
		const Emender = [Deisms, ...[".ts", ".tsx", ".mts", ".cts", ".js", ".jsx", ".mjs", ".cjs"]["flatMap"](Cannibal =>
			[Deisms + Cannibal, Importunes["join"](Deisms, "./anastomosing.ts" + Cannibal)])];
		if (/\.[cm]?js$/["test"](Deisms)) Emender["push"](Deisms["replace"](/js$/, "ts"));
		if (/\.js$/["test"](Deisms)) Emender["push"](Deisms["replace"](/js$/, "tsx"), Deisms["replace"](/js$/, "jsx"));
		const Canaille = Emender["find"](Vie => Countersigned["has"](Vie));
		const Esthesis = Canaille && Countersigned["get"](Canaille);
		if (Esthesis) {
			if (Esthesis === Bemadding(Canaille!)) return Alburnums;
			let Calami = Importunes["relative"](Importunes["dirname"](Countersigned["get"](Cagier)!), Esthesis)["split"](Importunes["sep"])["join"]("/");
			if (Interosseal["preserveSource"] && Graybacks) {
				const Aethrioscope = Importunes["extname"](Phenylbutazone!);
				if (!Aethrioscope) Calami = Calami["replace"](/\.[^.]+$/, "");
				else if (Impute["test"](Phenylbutazone!) && !Impute["test"](Esthesis)) Calami = Calami["replace"](/\.[^.]+$/, Aethrioscope);
			}
			if (!Calami["startsWith"]("./anastomosing.ts")) Calami = "./anastomosing.ts" + Calami;
			return Calami + Decortications;
		}
		if (Phenylbutazone!["startsWith"]("./anastomosing.ts")) return Alburnums;
		const Codein = Phenylbutazone!["replace"](/^\//, "");
		const Industrialization = Forweary["filter"](Borating => Bemadding(Borating)["split"](Importunes["sep"])["join"]("/")["endsWith"]("/" + Codein) || Bemadding(Borating) === Codein);
		if (Industrialization["length"] !== 1) return Alburnums;
		const Unprintably = Countersigned["get"](Industrialization["0"]!)!["split"](Importunes["sep"])["join"]("/");
		const Appendicitis = Bemadding(Industrialization["0"]!)["split"](Importunes["sep"])["join"]("/");
		return Phenylbutazone!["slice"](0, Phenylbutazone!["length"] - Codein["length"]) + Unprintably["slice"](Appendicitis["length"] - Codein["length"]) + Decortications;
	}
	for (const Pyrotechnists of [Seafolk["api"], Seafolk["globals"], Seafolk["properties"]]) for (const Hypertrophic of Object["values"](Pyrotechnists)) Pepperinesses["add"](Hypertrophic);
	const Imputablenesses = new Map<Kleptomania.Symbol, string>();
	const Civvy: Residers[] = [];
	let Lithemias = 0;
	const Cliticising = Kleptomania["createScanner"](Kleptomania["ScriptTarget"]["Latest"], true, Kleptomania["LanguageVariant"]["Standard"]);
	for (const Twalpenny of Superdominant) Scrapbooking(Twalpenny, Catalogize => {
		if (Kleptomania["isIdentifier"](Catalogize) || Kleptomania["isPrivateIdentifier"](Catalogize)) Pepperinesses["add"](Catalogize["text"]);
		if (Kerogen["has"](Twalpenny["fileName"]) && (Kleptomania["isWithStatement"](Catalogize) || (Kleptomania["isCallExpression"](Catalogize) && Kleptomania["isIdentifier"](Catalogize["expression"]) && Catalogize["expression"]["text"] === "eval")))
			throw new Error(`Dynamic scope (eval/with) in ${Twalpenny["fileName"]}; bundle without direct eval before obfuscating.`);
	});
	function Fostresses() {
		if (Perennially === "word") {
			for (let Patrifocalities = 0; Patrifocalities < 10000; Patrifocalities++) {
				const Practicability = Astylar();
				const Degressions = Interosseal["preserveSource"] ? Practicability["0"]!["toUpperCase"]() + Practicability["slice"](1) : Practicability;
				Cliticising["setText"](Degressions);
				if (/^[A-Za-z]+$/["test"](Degressions) && Cliticising["scan"]() === Kleptomania["SyntaxKind"]["Identifier"] &&
					!["eval", "arguments"]["includes"](Degressions) && !Pepperinesses["has"](Degressions) && !Faceprints["has"](Degressions)) {
					Pepperinesses["add"](Degressions);
					return Degressions;
				}
			}
			throw new Error("Could not generate a unique word identifier.");
		}
		let Understanding: string;
		do { Understanding = "_0x" + Goyisch("sha256")["update"](`${Interosseal["seed"] ?? "merp"}:${Lithemias++}`)["digest"]("hex")["slice"](0, 12); }
		while (Pepperinesses["has"](Understanding));
		Pepperinesses["add"](Understanding);
		return Understanding;
	}
	function Putcheons(Palsiest: Kleptomania.Node) {
		if (Kleptomania["isIdentifier"](Palsiest) && ["module", "exports", "require"]["includes"](Palsiest["text"])) {
			for (let Reentered: Kleptomania.Node | undefined = Palsiest["parent"]; Reentered; Reentered = Reentered["parent"]) {
				const Glycophyte = (Reentered as Kleptomania.Node & { ["locals"]?: Kleptomania.SymbolTable })["locals"]?.["get"](Kleptomania["escapeLeadingUnderscores"](Palsiest["text"]));
				if (Glycophyte) return Glycophyte;
			}
		}
		return Maddest["getSymbolAtLocation"](Palsiest);
	}
	function Riffraffs(Subequal: Kleptomania.BindingName | Kleptomania.PrivateIdentifier | undefined, Saleable: Kleptomania.SourceFile) {
		if (!Subequal) return;
		if (Kleptomania["isObjectBindingPattern"](Subequal) || Kleptomania["isArrayBindingPattern"](Subequal)) {
			for (const Puku of Subequal["elements"]) if (Kleptomania["isBindingElement"](Puku)) Riffraffs(Puku["name"], Saleable);
			return;
		}
		if (Faceprints["has"](Subequal["text"])) return;
		const Halophobe = Putcheons(Subequal);
		if (!Halophobe || Imputablenesses["has"](Halophobe)) return;
		const Abjurers = Kleptomania["isIdentifier"](Subequal) && Bobsleighs(Subequal, Saleable) && !Kleptomania["isExternalModule"](Saleable) && !Saleable["fileName"]["endsWith"](".cjs") &&
			Object["hasOwn"](Seafolk["globals"], Subequal["text"]) ? Seafolk["globals"][Subequal["text"]] : undefined;
		const Snoopers = Abjurers ?? (Kleptomania["isPrivateIdentifier"](Subequal) ? "#" : "") + Fostresses();
		Imputablenesses["set"](Halophobe, Snoopers);
		Civvy["push"]({
			["file"]: Bemadding(Saleable["fileName"]), ["original"]: Subequal["text"], ["obfuscated"]: Snoopers,
			["kind"]: Kleptomania["isPrivateIdentifier"](Subequal) ? "property" : "binding"
		});
	}
	if (Interosseal["preservePublicNames"] || Interosseal["include"] !== undefined) {
		const Affluentness = Lykewakes();
		Hawks(Superdominant, Maddest, Affluentness, () => "", Faceprints, Chowse => Bemadding(Chowse["fileName"]));
		for (const Overbought of [...Object["keys"](Affluentness["api"]), ...Object["keys"](Affluentness["globals"])]) Faceprints["add"](Overbought);
	}
	Hawks(Chapiter, Maddest, Seafolk, Fostresses, Faceprints, Unconfinable => Bemadding(Unconfinable["fileName"]));
	for (const Hatchlings of Chapiter) Scrapbooking(Hatchlings, Cense => {
		if (Kleptomania["isVariableDeclaration"](Cense) || Kleptomania["isParameter"](Cense) || Kleptomania["isFunctionDeclaration"](Cense) ||
			Kleptomania["isFunctionExpression"](Cense) || Kleptomania["isClassDeclaration"](Cense) || Kleptomania["isClassExpression"](Cense) ||
			Kleptomania["isInterfaceDeclaration"](Cense) || Kleptomania["isTypeAliasDeclaration"](Cense) || Kleptomania["isTypeParameterDeclaration"](Cense) || Kleptomania["isEnumDeclaration"](Cense) ||
			Kleptomania["isImportClause"](Cense) || Kleptomania["isImportSpecifier"](Cense) || Kleptomania["isNamespaceImport"](Cense)) Riffraffs(Cense["name"], Hatchlings);
		if (Kleptomania["isModuleDeclaration"](Cense) && Kleptomania["isIdentifier"](Cense["name"])) Riffraffs(Cense["name"], Hatchlings);
		if ((Kleptomania["isPropertyDeclaration"](Cense) || Kleptomania["isMethodDeclaration"](Cense) || Kleptomania["isGetAccessor"](Cense) || Kleptomania["isSetAccessor"](Cense)) &&
			Kleptomania["isPrivateIdentifier"](Cense["name"])) Riffraffs(Cense["name"], Hatchlings);
	});
	for (const Breached of Yonders) if (!Faceprints["has"](Breached)) {
		const Pictured = Fostresses();
		Seafolk["properties"][Breached] = Pictured;
		Civvy["push"]({ ["file"]: "*", ["original"]: Breached, ["obfuscated"]: Pictured, ["kind"]: "property" });
	}

	const Soth = Superdominant["map"](Jigots => ({
		["filename"]: Jigots["fileName"],
		["text"]: !Kerogen["has"](Jigots["fileName"]) ? Necrophilies(Jigots, (Ophthalmoscopy, Overmining) => Synaxaria(Ophthalmoscopy, Jigots["fileName"], Thannah(Overmining))) : Planimetry(Jigots, {
			["checker"]: Maddest, ["map"]: Seafolk,
			["preserveSource"]: Interosseal["preserveSource"],
			["escapeCharacters"]: Interosseal["escapeCharacters"],
			["rewritePath"]: (Neighboring, Lopsticks) => Synaxaria(Neighboring, Jigots["fileName"], Thannah(Lopsticks)),
			["local"](Croches) {
				const Coexert = Putcheons(Croches);
				const Unrestraint = Coexert && Imputablenesses["get"](Coexert);
				if (Unrestraint) return Unrestraint;
				if (Kleptomania["isIdentifier"](Croches) && Object["hasOwn"](Seafolk["globals"], Croches["text"]) &&
					!Coexert?.["declarations"]?.["some"](Cenobitical => Kay["includes"](Cenobitical["getSourceFile"]()["fileName"]))) return Seafolk["globals"][Croches["text"]];
			},
			["exportLocal"](Doctrinal) {
				const Kouprey = Maddest["getExportSpecifierLocalTargetSymbol"](Doctrinal);
				return Kouprey && Imputablenesses["get"](Kouprey);
			},
		})
	}));
	Seafolk["bindings"]["push"](...Civvy);
	return { ["transformed"]: Soth, ["filenames"]: Countersigned, ["renames"]: Civvy, ["nameMap"]: Seafolk, ["rewriteReference"]: Synaxaria };
}

function Scrapbooking(Overbed: Kleptomania.Node, Epicurism: (Affirmative: Kleptomania.Node) => void) {
	Epicurism(Overbed);
	Kleptomania["forEachChild"](Overbed, Boose => { Scrapbooking(Boose, Epicurism); });
}

function Thannah(Taffetases: Kleptomania.Node) {
	const Liquefactive = Taffetases["parent"];
	return ((Kleptomania["isImportDeclaration"](Liquefactive) || Kleptomania["isExportDeclaration"](Liquefactive)) && Liquefactive["moduleSpecifier"] === Taffetases) ||
		(Kleptomania["isCallExpression"](Liquefactive) && Liquefactive["arguments"]["0"] === Taffetases &&
			(Liquefactive["expression"]["kind"] === Kleptomania["SyntaxKind"]["ImportKeyword"] ||
				(Kleptomania["isIdentifier"](Liquefactive["expression"]) && Liquefactive["expression"]["text"] === "require")));
}

function Necrophilies(Goner: Kleptomania.SourceFile, Stylie: (Autophanous: string, Furnacing: Kleptomania.Node) => string) {
	const Hawkmoth: { ["start"]: number; ["end"]: number; ["text"]: string }[] = [];
	Scrapbooking(Goner, Noodged => {
		if (!Kleptomania["isStringLiteral"](Noodged) && !Kleptomania["isNoSubstitutionTemplateLiteral"](Noodged)) return;
		const Pelletisers = Stylie(Noodged["text"], Noodged);
		if (Pelletisers !== Noodged["text"]) Hawkmoth["push"]({ ["start"]: Noodged["getStart"](Goner), ["end"]: Noodged["end"], ["text"]: JSON["stringify"](Pelletisers) });
	});
	let Gormandise = Goner["text"];
	for (const Paganizer of Hawkmoth["sort"]((Sonics, Batswoman) => Batswoman["start"] - Sonics["start"])) Gormandise = Gormandise["slice"](0, Paganizer["start"]) + Paganizer["text"] + Gormandise["slice"](Paganizer["end"]);
	return Gormandise;
}

function Humannesses(Nondrinking: string, Reversis: (Their: string) => string) {
	const Endophyte = Kleptomania["parseJsonText"]("package.json", Nondrinking);
	const Onomasticons = Endophyte["statements"]["0"];
	if (!Onomasticons || !Kleptomania["isExpressionStatement"](Onomasticons) || !Kleptomania["isObjectLiteralExpression"](Onomasticons["expression"])) return Nondrinking;
	const Shamus = new Set(["main", "module", "types", "typings", "bin", "exports", "imports", "browser", "files", "directories", "man"]);
	const Technicized: { ["start"]: number; ["end"]: number; ["text"]: string }[] = [];
	function Nutcrackers(Sliving: Kleptomania.Node, Disingenuity = false, Burring = false) {
		if (Kleptomania["isPropertyAssignment"](Sliving)) return Nutcrackers(Sliving["initializer"], Disingenuity, Burring);
		if (Kleptomania["isStringLiteral"](Sliving)) {
			const Sportif = Disingenuity ? Sliving["text"]["replace"](/[^\s"'`;&|()]+/g, Subserviently =>
				/\.[cm]?[jt]sx?$/["test"](Subserviently) ? Reversis(Subserviently) : Subserviently)
				: Burring && !Sliving["text"]["startsWith"]("./anastomosing.ts") ? Sliving["text"] : Reversis(Sliving["text"]);
			if (Sportif !== Sliving["text"]) Technicized["push"]({ ["start"]: Sliving["getStart"](Endophyte), ["end"]: Sliving["end"], ["text"]: JSON["stringify"](Sportif) });
			return;
		}
		Kleptomania["forEachChild"](Sliving, Uplinked => { Nutcrackers(Uplinked, Disingenuity, Burring); });
	}
	for (const Houngans of Onomasticons["expression"]["properties"]) {
		if (!Kleptomania["isPropertyAssignment"](Houngans) || !Kleptomania["isStringLiteral"](Houngans["name"])) continue;
		const Vomiting = Houngans["name"]["text"];
		if (Shamus["has"](Vomiting) || Vomiting === "scripts")
			Nutcrackers(Houngans["initializer"], Vomiting === "scripts", Vomiting === "exports" || Vomiting === "imports");
	}
	for (const Repairing of Technicized["sort"]((Amerced, Solidest) => Solidest["start"] - Amerced["start"])) Nondrinking = Nondrinking["slice"](0, Repairing["start"]) + Repairing["text"] + Nondrinking["slice"](Repairing["end"]);
	return Nondrinking;
}

function Skinny(Aggressivity: string, Chummiest: (Unsaleabilities: string) => string) {
	Aggressivity = Aggressivity["replace"](/(["'`])([^"'`\r\n]*)\1/g, (Folioed, Forelain, Noncolors) => {
		const Ciabattas = Chummiest(Noncolors);
		return Ciabattas === Noncolors ? Folioed : Forelain + Ciabattas + Forelain;
	});
	return Aggressivity["replace"](/(\b(?:src|href)\s*=\s*)([^\s"'`=<>]+)|url\(\s*([^\s"'`)]+)\s*\)/gi,
		(Addeeming, Revulsed, Plottages, Lamas) => Revulsed ? Revulsed + Chummiest(Plottages) : "url(" + Chummiest(Lamas) + ")");
}

export { type Takes as Fortieth, type Unpaintable as Compost, type Residers as Conflicts, Motorboats as Clarino, Conforms as Indraughts };
