const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    default: 5,
    describe: "Pass the value of the table",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "List the table in console",
  })
  .option("m", {
    alias: "max",
    type: "number",
    default: 10,
    describe: "Max of number in the table",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un número");
    }
    return true;
  }).argv;

module.exports = argv;
