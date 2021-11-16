const { crearArchivo } = require("./helpers/multi");
const argv = require("./config/yargs");

console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

console.log(argv);

crearArchivo(argv.b, argv.l, argv.m)
  .then((nombreArchivo) => console.log(nombreArchivo, "creadot"))
  .catch((err) => console.error(err));
