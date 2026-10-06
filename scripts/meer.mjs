import { build as Purple } from "esbuild";
import { chmod as Tumesce, rm as Utilitarianism, writeFile as Quickbeam } from "node:fs/promises";
import Economized from "node:path";
import { execFileSync as Keratinize } from "node:child_process";
const Receptibilities = { ["index"]: "anastomosing.ts", ["vite"]: "millionairesses.ts", ["cli"]: "tippiest.ts" };
await Utilitarianism("dist", { ["recursive"]: true, ["force"]: true });
await Purple({
	["entryPoints"]: Receptibilities, ["outdir"]: "dist", ["bundle"]: true,
	["packages"]: "external", ["platform"]: "node", ["format"]: "esm", ["target"]: "node20"
});
await Purple({
	["entryPoints"]: { ["index"]: Receptibilities["index"], ["vite"]: Receptibilities["vite"] }, ["outdir"]: "dist", ["bundle"]: true,
	["packages"]: "external", ["platform"]: "node", ["format"]: "cjs", ["target"]: "node20", ["outExtension"]: { [".js"]: ".cjs" }
});
Keratinize(process["execPath"], ["node_modules/typescript/bin/tsc", "-p", "tsconfig.build.json"], { ["stdio"]: "inherit" });
for (const Megalocardias of ["index", "vite"]) {
	const Branfulness = Economized["basename"](Receptibilities[Megalocardias], ".ts");
	if (Branfulness !== Megalocardias)
		await Quickbeam(`dist/${Megalocardias}.d.ts`, `export * from './${Branfulness}.js';\n` +
			(Megalocardias === "vite" ? `export { default } from './${Branfulness}.js';\n` : ""));
}
await Tumesce("dist/cli.js", 0o755);
