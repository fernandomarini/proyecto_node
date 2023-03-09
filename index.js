
let write = require ("./writeAndReadObject");

let read = require ("./readConsole");


write("./miFichero.JSON", { calle: "Teruel", numero: 8 });

read(console.log);