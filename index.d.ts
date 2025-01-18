export interface Lliw {
	(message: any): string;
	readonly black: this;
	readonly red: this;
	readonly green: this;
	readonly yellow: this;
	readonly blue: this;
	readonly magenta: this;
	readonly cyan: this;
	readonly white: this;
	readonly orange: this;
	readonly purple: this;
	readonly pink: this;
	readonly gray: this;
	readonly neonYellow: this;
	readonly brown: this;

	readonly bold: this;
	readonly underline: this;
	readonly blink: this;
	readonly strikeThrough: this;
	readonly framed: this;
	readonly encircled: this;
	readonly overline: this;

	readonly blackBg: this;
	readonly redBg: this;
	readonly greenBg: this;
	readonly yellowBg: this;
	readonly blueBg: this;
	readonly magentaBg: this;
	readonly cyanBg: this;
	readonly whiteBg: this;
	readonly orangeBg: this;
	readonly purpleBg: this;
	readonly pinkBg: this;
	readonly grayBg: this;
	readonly neonYellowBg: this;
	readonly brownBg: this;

	readonly blackBoldBg: this;
	readonly redBoldBg: this;
	readonly greenBoldBg: this;
	readonly yellowBoldBg: this;
	readonly blueBoldBg: this;
	readonly magentaBoldBg: this;
	readonly cyanBoldBg: this;
	readonly whiteBoldBg: this;
}

export const lliw: Lliw;
