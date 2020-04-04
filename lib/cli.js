const meow = require('meow');
const chalk = require('chalk');
const grey = chalk.grey;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const red = chalk.red;

module.exports = meow(
`
Usage
    ${cyan(`react`)}, ${cyan(`r`)} ${cyan(`<command>`)} ${grey(`[ComponentName]`)}

Commands
    ${cyan(`component`)}, ${cyan(`c`)}        ${grey(`Create Stateless Function Component`)}

Examples
    ${cyan(`react`)} ${cyan(`c`)} ${grey(`HomeComponent`)}
    ${cyan(`r`)} ${cyan(`c`)} ${grey(`HomeComponent`)}
    ${cyan(`react`)} ${cyan(`component`)} ${grey(`ValidateComponent`)}
    ${cyan(`react`)} ${cyan(`c`)} ${grey(`ValidateComponent`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			xcolor: {
				type: 'boolean',
				default: false,
				alias: 'x'
			},
			sort: {
				type: 'string',
				default: 'cases',
				alias: 's'
			},
			reverse: {
				type: 'boolean',
				default: false,
				alias: 'r'
			},
			limit: {
				type: 'number',
				default: Number.MAX_SAFE_INTEGER,
				alias: 'l'
			},
			chart: {
				type: 'boolean',
				default: false,
				alias: 'c'
			},
			log: {
				type: 'boolean',
				default: false
			},
			minimal: {
				type: 'boolean',
				default: false,
				alias: 'm'
			}
		}
	}
);
