const fs = require("fs");

const crearArchivo = async (base, listar, max) => {
  try {
    let salida = "";
    for (let i = 0; i <= max; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("==================================");
      console.log(`           Tabla del ${base}`);
      console.log("==================================");
      console.log(salida);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;
    // });

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
