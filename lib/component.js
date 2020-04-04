const chalk = require("chalk");
const inquirer = require("inquirer");
var fs = require("fs");
const pkgDir = require("pkg-dir");
const rimraf = require("rimraf");

var existsSync = fs.existsSync;
var mkdirSync = fs.mkdirSync;
var writeFileSync = fs.writeFileSync;
var readFileSync = fs.readFileSync;

const bgRed = chalk.black.bgRedBright;
const bgGreen = chalk.black.bgGreenBright;
const yellow = chalk.yellow;
const grey = chalk.grey;

module.exports = async (value) => {
    if (!value) {
        console.log(
            `${bgRed("Error 😖  ")} ${yellow(
                "Please provide a name for your component"
            )}`
        );
    } else {
        let dir = `${process.cwd()}/${value}`;

        if (existsSync(dir)) {
            console.log(" ");
            console.log(
                `${bgRed("Error 😖  ")} ${yellow(
                    "There is a component with the same name"
                )}`
            );
            console.log(" ");

            let { replace } = await askForReplaceComponent();

            if (replace) {
                // Delete component
                rimraf.sync(dir);

                // Create Component
                createComponent(dir, value);
            }
        } else {
            // Create Component
            createComponent(dir, value);
        }
    }
};

const createComponent = async (dir, value) => {
    const rootDir = await pkgDir(__dirname);

    let bufferContent = readFileSync(`${rootDir}/templates/component.js`);
    let buff = Buffer.from(bufferContent).toString();

    let newString = buff.split("[NameComponent]").join(value);
    let s = buff.indexOf("[NameComponent]");

    mkdirSync(dir);

    writeFileSync(`${dir}/index.js`, newString);

    console.log(" ");
    console.log(
        `${bgGreen("SUCCESS ✅  ")} ${grey(
            `Component ${value} was successfully created.`
        )}`
    );
    console.log(" ");
};

const askForReplaceComponent = () => {
    const questions = [
        {
            type: "confirm",
            name: "replace",
            message: " Do you wanna replace the component",
        },
    ];
    return inquirer.prompt(questions);
};
