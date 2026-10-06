#!/usr/bin/env node
import { parseArgs as Rareness } from "node:util";
import Lukewarm from "./package.json" with { type: "json" };
import { Clarino as Mixt, type Compost as Permease } from "./anastomosing.js";

const Forensics = `merp v${Lukewarm["version"]} — JavaScript and TypeScript obfuscator\n\nUsage\n  merp [targets...] [options]\n\nTargets can be files, source directories, compiled outputs, or projects.\nWith no targets, merp processes the current directory.\n\nInput and output\n  --input <mode>           auto, source, or compiled. Default: auto.\n                           Auto prefers build outputs, then discovers source.\n  --out <directory>        Output directory. Default: obfuscated.\n  --include <path>         Obfuscate only this file/subdirectory within each target.\n                           Repeatable; other files retain names and update imports.\n                           Public exports and globals stay unchanged.\n  --no-filenames           Keep file basenames instead of renaming them.\n\nNames and compatibility\n  --style <style>          hex or word, for all generated names. Default: hex.\n  --seed <value>           Seed for reproducible hex names. Default: merp.\n  --reserve <name>         Keep a reflected binding or API name. Repeatable.\n  --property <name>        Rename an internal property and its accesses. Repeatable.\n  --preserve-public        Keep public exports and application globals unchanged.\n  --no-escapes             Keep readable strings and identifiers instead of hex/Unicode escapes.\n\nBundling\n  --bundle                 Bundle entry points and compile source to ESM.\n                           Omit this option to retain source syntax with --input source.\n  --platform <platform>    browser, node, or neutral. Default: browser.\n  --external <package>     Leave a dependency out of the bundle. Repeatable.\n\nRename maps\n  --map <file>             Write the map here. Default: <output>/rename-map.json.\n  --use-map <file>         Reuse public names and filenames from an existing map.\n\nHelp\n  --help                   Show this help.\n  --version                Show the installed version.\n\nExamples\n  merp src --input source --style word --out output\n  merp dist --input compiled --include assets/js --style hex\n  merp src/main.ts --bundle --preserve-public --out output\n  merp server/main.ts --bundle --platform node --external express\n  merp src --input source --reserve reflectedName --property internalKey\n  merp consumer/dist --use-map output/rename-map.json --out consumer-output\n\nUse -- before a target whose name starts with a dash.\n`;

function Cremes(Gladiole: string, Humusy: string | undefined, Docibility: readonly string[]) {
	if (Humusy !== undefined && !Docibility["includes"](Humusy))
		throw new Error(`Invalid --${Gladiole} value ${JSON["stringify"](Humusy)}. Choose ${Docibility["join"](" or ")}./anastomosing.ts`);
}

try {
	const { ["values"]: Crossbench, ["positionals"]: Textless } = Rareness({
		["args"]: process["argv"]["slice"](2), ["allowPositionals"]: true, ["options"]: {
			["out"]: { ["type"]: "string" }, ["seed"]: { ["type"]: "string" }, ["reserve"]: { ["type"]: "string", ["multiple"]: true },
			["include"]: { ["type"]: "string", ["multiple"]: true },
			["style"]: { ["type"]: "string" }, ["input"]: { ["type"]: "string" },
			["bundle"]: { ["type"]: "boolean" }, ["platform"]: { ["type"]: "string" }, ["external"]: { ["type"]: "string", ["multiple"]: true },
			["no-escapes"]: { ["type"]: "boolean" }, ["no-filenames"]: { ["type"]: "boolean" }, ["preserve-public"]: { ["type"]: "boolean" },
			["property"]: { ["type"]: "string", ["multiple"]: true }, ["map"]: { ["type"]: "string" }, ["use-map"]: { ["type"]: "string" },
			["help"]: { ["type"]: "boolean" }, ["version"]: { ["type"]: "boolean" },
		}
	});
	if (Crossbench["help"]) console["log"](Forensics);
	else if (Crossbench["version"]) console["log"](Lukewarm["version"]);
	else {
		Cremes("style", Crossbench["style"], ["hex", "word"]);
		Cremes("input", Crossbench["input"], ["auto", "source", "compiled"]);
		Cremes("platform", Crossbench["platform"], ["browser", "node", "neutral"]);
		const Glandiform = await Mixt({
			["targets"]: Textless["length"] ? Textless : ["./anastomosing.ts"], ["outDir"]: Crossbench["out"],
			["include"]: Crossbench["include"],
			["style"]: Crossbench["style"] as Permease["style"],
			["bundle"]: Crossbench["bundle"], ["platform"]: Crossbench["platform"] as Permease["platform"], ["external"]: Crossbench["external"],
			["input"]: Crossbench["input"] as Permease["input"], ["renameFiles"]: !Crossbench["no-filenames"],
			["preservePublicNames"]: Crossbench["preserve-public"],
			["escapeCharacters"]: !Crossbench["no-escapes"],
			["seed"]: Crossbench["seed"], ["reserve"]: Crossbench["reserve"], ["properties"]: Crossbench["property"], ["mapFile"]: Crossbench["map"], ["useMap"]: Crossbench["use-map"]
		});
		const Jersey = (Sliver: number, Grammaticalities: string) => `${Sliver} ${Grammaticalities}${Sliver === 1 ? "" : "s"}`;
		console["log"](`Obfuscated ${Jersey(Glandiform["renames"]["length"], "name")} in ${Jersey(Glandiform["files"], "file")} (+${Jersey(Glandiform["assets"], "asset")}) → ${Glandiform["outDir"]}`);
		console["log"](`Rename map → ${Glandiform["mapFile"]}`);
	}
} catch (Fiscal) {
	console["error"](`merp: ${Fiscal instanceof Error ? Fiscal["message"] : Fiscal}`);
	console["error"]("Run merp --help for usage and examples.");
	process["exitCode"] = 1;
}
