const expect = require('expect.js');
const lliw = require('../');
const exec = require('child_process').exec;
const path = require('path');

describe('lliw', () => {
	const verifyAnsi = (actual, str, codes) => {
		expect(actual).to.equal(`\u001b[${codes.join(';')}m${str}\u001b[0m`);
	};

	describe('foreground colors', () => {
		it('should output string with black foreground color', () => {
			verifyAnsi(lliw.black('foo'), 'foo', [30]);
		});

		it('should output string with red foreground color', () => {
			verifyAnsi(lliw.red('foo'), 'foo', [31]);
		});

		it('should output string with green foreground color', () => {
			verifyAnsi(lliw.green('foo'), 'foo', [32]);
		});

		it('should output string with yellow foreground color', () => {
			verifyAnsi(lliw.yellow('foo'), 'foo', [33]);
		});

		it('should output string with blue foreground color', () => {
			verifyAnsi(lliw.blue('foo'), 'foo', [34]);
		});

		it('should output string with magenta foreground color', () => {
			verifyAnsi(lliw.magenta('foo'), 'foo', [35]);
		});

		it('should output string with cyan foreground color', () => {
			verifyAnsi(lliw.cyan('foo'), 'foo', [36]);
		});

		it('should output string with orange foreground color', () => {
			verifyAnsi(lliw.orange('foo'), 'foo', [38, 5, 208]);
		});

		it('should output string with purple foreground color', () => {
			verifyAnsi(lliw.purple('foo'), 'foo', [38, 5, 135]);
		});

		it('should output string with gray foreground color', () => {
			verifyAnsi(lliw.gray('foo'), 'foo', [38, 5, 245]);
		});

		it('should output string with brown foreground color', () => {
			verifyAnsi(lliw.brown('foo'), 'foo', [38, 5, 94]);
		});

		it('should output string with pink foreground color', () => {
			verifyAnsi(lliw.pink('foo'), 'foo', [38, 5, 212]);
		});

		it('should output string with neonYellow foreground color', () => {
			verifyAnsi(lliw.neonYellow('foo'), 'foo', [38, 5, 190]);
		});
	});

	describe('background colors', () => {
		it('should output string with black background color', () => {
			verifyAnsi(lliw.blackBg('foo'), 'foo', [40]);
		});

		it('should output string with red background color', () => {
			verifyAnsi(lliw.redBg('foo'), 'foo', [41]);
		});

		it('should output string with green background color', () => {
			verifyAnsi(lliw.greenBg('foo'), 'foo', [42]);
		});

		it('should output string with yellow background color', () => {
			verifyAnsi(lliw.yellowBg('foo'), 'foo', [43]);
		});

		it('should output string with blue background color', () => {
			verifyAnsi(lliw.blueBg('foo'), 'foo', [44]);
		});

		it('should output string with magenta background color', () => {
			verifyAnsi(lliw.magentaBg('foo'), 'foo', [45]);
		});

		it('should output string with cyan background color', () => {
			verifyAnsi(lliw.cyanBg('foo'), 'foo', [46]);
		});

		it('should output string with bold black background color', () => {
			verifyAnsi(lliw.blackBoldBg('foo'), 'foo', [100]);
		});

		it('should output string with bold red background color', () => {
			verifyAnsi(lliw.redBoldBg('foo'), 'foo', [101]);
		});

		it('should output string with bold green background color', () => {
			verifyAnsi(lliw.greenBoldBg('foo'), 'foo', [102]);
		});

		it('should output string with bold yellow background color', () => {
			verifyAnsi(lliw.yellowBoldBg('foo'), 'foo', [103]);
		});

		it('should output string with bold blue background color', () => {
			verifyAnsi(lliw.blueBoldBg('foo'), 'foo', [104]);
		});

		it('should output string with bold magenta background color', () => {
			verifyAnsi(lliw.magentaBoldBg('foo'), 'foo', [105]);
		});

		it('should output string with bold cyan background color', () => {
			verifyAnsi(lliw.cyanBoldBg('foo'), 'foo', [106]);
		});

		it('should output string with orange background color', () => {
			verifyAnsi(lliw.orangeBg('foo'), 'foo', [48, 5, 208]);
		});

		it('should output string with purple background color', () => {
			verifyAnsi(lliw.purpleBg('foo'), 'foo', [48, 5, 135]);
		});

		it('should output string with gray background color', () => {
			verifyAnsi(lliw.grayBg('foo'), 'foo', [48, 5, 245]);
		});

		it('should output string with brown background color', () => {
			verifyAnsi(lliw.brownBg('foo'), 'foo', [48, 5, 94]);
		});

		it('should output string with pink background color', () => {
			verifyAnsi(lliw.pinkBg('foo'), 'foo', [48, 5, 212]);
		});

		it('should output string with neonYellow background color', () => {
			verifyAnsi(lliw.neonYellowBg('foo'), 'foo', [48, 5, 190]);
		});
	});

	describe('effects', () => {
		it('should output string with bold effect', () => {
			verifyAnsi(lliw.bold('foo'), 'foo', [1]);
		});
		it('should output string with underline effect', () => {
			verifyAnsi(lliw.underline('foo'), 'foo', [4]);
		});
		it('should output string with blink effect', () => {
			verifyAnsi(lliw.blink('foo'), 'foo', [5]);
		});
		it('should output string with strike-through effect', () => {
			verifyAnsi(lliw.strikeThrough('foo'), 'foo', [9]);
		});
		it('should output string with framed effect', () => {
			verifyAnsi(lliw.framed('foo'), 'foo', [51]);
		});
		it('should output string with encircled effect', () => {
			verifyAnsi(lliw.encircled('foo'), 'foo', [52]);
		});
		it('should output string with overline effect', () => {
			verifyAnsi(lliw.overline('foo'), 'foo', [53]);
		});
	});

	describe('composite styles', () => {
		it('should output string with multiple foreground colors', () => {
			verifyAnsi(lliw.red.black('foo'), 'foo', [31, 30]);
		});
		it('should output string with foreground and background colors', () => {
			verifyAnsi(lliw.red.blackBg('foo'), 'foo', [31, 40]);
			verifyAnsi(lliw.blackBg.red('foo'), 'foo', [40, 31]);
		});
		it('should output string with multiple effects', () => {
			verifyAnsi(
				lliw.bold.underline.blink.strikeThrough.framed.encircled.overline('foo'),
				'foo',
				[1, 4, 5, 9, 51, 52, 53]
			);
		});
		it('should output string with foreground color, background color and effects', () => {
			verifyAnsi(lliw.red.blackBg.bold('foo'), 'foo', [31, 40, 1]);
		});

		it('should output string with multiple fancy colors', () => {
			verifyAnsi(lliw.pink.purpleBg('foo'), 'foo', [38, 5, 212, 48, 5, 135]);
		});
	});

	describe('typescript declaration file', () => {
		it('should successfully compile typescript without errors', (done) => {
			const sourceFile = path.join(__dirname, 'test.ts');
			const tsc = path.resolve(path.join(__dirname, '..', 'node_modules', '.bin', 'tsc'));
			const cmd = `"${tsc}" --noEmit ${sourceFile}`;

			exec(cmd, (err, stdout, stderr) => {
				expect(stdout).to.equal('');
				expect(stderr).to.equal('');
				expect(err).to.equal(null);
				done();
			});
		});
	});
});
