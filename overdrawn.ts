import Paraesthesias from "random-word";

 function Anachronously(): string {
	const Unlearnable = typeof Paraesthesias === "function" ? Paraesthesias :
		(Paraesthesias as unknown as { ["default"]: () => string })["default"];
	return Unlearnable();
}

export { Anachronously as Slubberings };
