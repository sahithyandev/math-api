import typescript from "@rollup/plugin-typescript";
import generateTypes from "./plugins/generate-types";

export default {
	input: "main.ts",
	perf: true,
	output: {
		dir: "lib",
		format: "cjs",
	},
	plugins: [typescript(), generateTypes()],
	external: ["mathjax-full/js/*"],
};
