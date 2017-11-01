const effects = {
	bold: 1,
	underline: 4,
	blink: 5,
	strikeThrough: 9,
	framed: 51,
	encircled: 52,
	overline: 53
};

const colors = {
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37
};

const bgColors = {
	black: 40,
	red: 41,
	green: 42,
	yellow: 43,
	blue: 44,
	magenta: 45,
	cyan: 46,
	white: 47,
	blackBold: 100,
	redBold: 101,
	greenBold: 102,
	yellowBold: 103,
	blueBold: 104,
	magentaBold: 105,
	cyanBold: 106,
	whiteBold: 107,
};

const ansi = (codeSet) => {
	return `\u001b[${Array.from(codeSet).join(';')}m`;
};

const wrap = (msg, codeSet) => {
	if (!codeSet.size) {
		return msg;
	}

	return `${ansi(codeSet)}${msg}${ansi(new Set([ 0 ]))}`;
};

const makeLliw = (codeSet) => {
	const innerLliw = (string) => {
		return wrap(string, codeSet);
	};

	const define = (propName, code) => {
		const newCodes = new Set(codeSet).add(code);
		Object.defineProperty(innerLliw, propName, {
			enumerable: true,
			get: () => makeLliw(newCodes)
		});
	};

	Object.keys(effects).forEach(effectName => define(effectName, effects[effectName]));
	Object.keys(colors).forEach(colorName => define(colorName, colors[colorName]));
	Object.keys(bgColors).forEach(colorName => define(`${colorName}Bg`, bgColors[colorName]));

	return innerLliw;
};

module.exports = makeLliw(new Set());
