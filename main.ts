import { tex2svg } from "./adapter";

type Options = {
	content: string,
	mode?: "block" | "inline",
	color?: string,
	alternateColor?: string
};

export function renderLatex(options: Options): string {
	const {
		content,
		mode = "block",
		color = "black",
		alternateColor
	} = options;
	
	return [
		`<?xml version="1.0" standalone="no" ?>`,
		`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">`,
		tex2svg(
			content,
			mode === "inline",
			color,
			alternateColor
		)
	].join("\n");
}