#!/usr/bin/env node

const clear = require("clear");
const chalk = require("chalk");
const yellow = chalk.yellow;

const component = require("./lib/component");

const cli = require("./lib/cli.js");

(async () => {
    // Init.
    // clear();
    //console.log(yellow("Welcome!"));

    const [command, value] = cli.input;

    command === "help" && (await cli.showHelp(0));

    (command === "c" || command === "component") && component(value);
})();
