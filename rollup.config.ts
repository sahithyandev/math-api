import typescript from "@rollup/plugin-typescript";

export default {
	input: "main.ts",
	perf: true,
	output: {
		dir: "lib",
		format: "cjs",
	},
	plugins: [typescript()],
	external: ["mathjax-full/js/*"],
};
