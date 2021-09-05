import typescript from "@rollup/plugin-typescript";
import generateTypes from "./plugins/generate-types";

export default {
	input: "main.ts",
	perf: true,
	output: [
		{
			file: "lib/main.js",
			format: "cjs",
			plugins: [generateTypes()],
		},
		{
			file: "lib/main.es.js",
			format: "esm",
		},
	],
	plugins: [typescript()],
	external: ["mathjax-full/js/*"],
};
