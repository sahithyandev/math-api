# Math API

You want to include Latex based equations on your website? Check out this awesome API 👉 https://math.now.sh

But sometimes, you might want to create those images locally. That's why this package is created.

## Installation

`npm install math-api`

## Usage

```javascript
const math = require("math-api");

const svgImageContent = math.renderLatex({
	// required
	content: "\\log\\prod^N_{i}x_{i}=\\sum^N_i\\log{x_i}",

	// optional (default values are shown here)
	mode: "block", // or "inline"
	color: "black",
});

// inline svgImageContent in your html
// or
// write it to a svg file
```
