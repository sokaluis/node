const fs = require("fs");

const crearArchivo = async (base = 5) => {
  try {
    console.clear();
    console.log("==================================");
    console.log(`           Tabla del ${base}`);
    console.log("==================================");
    let salida = "";
    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;

      // console.log("Archivo creado");
    });

    // fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
