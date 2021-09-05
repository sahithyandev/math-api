import { Plugin } from "rollup";

const executeCommand = (commandString: string) => {
	console.log(`Executing "${commandString}"`);

	const { exec } = require("child_process");
	return new Promise((resolve, reject) => {
		exec(commandString, {}, (err, stdout, stderr) => {
			if (err || stderr) reject(new Error(err || stderr));

			resolve(stdout);
		});
	});
};

export default function generateTypes(): Plugin {
	return {
		name: "generate-types",
		writeBundle(options, bundle) {
			const outputDir =
				options.dir || options.file.split("/").slice(0, -1).join("/");

			const bundles = Object.values(bundle);
			for (const bundleItem of bundles) {
				if (bundleItem.type === "chunk" && bundleItem.isEntry) {
					console.log("GENERATE_TYPES");
					executeCommand(
						`npm exec tsc -- -d --emitDeclarationOnly --declarationDir ${outputDir} ${bundleItem.facadeModuleId}`
					);
				}
			}
		},
	};
}
