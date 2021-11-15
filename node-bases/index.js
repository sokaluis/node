const { crearArchivo } = require("./helpers/multi");

const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base);

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creadot"))
  .catch((err) => console.error(err));
