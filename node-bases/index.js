const { crearArchivo } = require("./helpers/multi");

const tableNumber = 3;

crearArchivo(tableNumber)
  .then((nombreArchivo) => console.log(nombreArchivo, "creadot"))
  .catch((err) => console.error(err));
