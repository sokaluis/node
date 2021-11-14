console.log("Inicio de programa"); // Primer

setTimeout(() => {
  console.log("1 timeout"); // Ultimo
}, 3000);

setTimeout(() => {
  console.log("2 timeout"); // 5
}, 0);

setTimeout(() => {
  console.log("3 timeout"); // 4
}, 0);

console.log("Fin de programa"); // 3
