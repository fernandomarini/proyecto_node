
const fs = require('fs');
const readline = require('readline');


let usuario = { "name": "", 
                "surname": "",
                "age": 0 }


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function readConsole(callblack){

    rl.question('Ingrese un nombre:', (nombre)=>{ 
        rl.question('Ingrese apelido :', (apellido)=>{ 
          rl.question('Ingrese edad :', (edad)=>{ 
                      usuario.name = nombre;
                      usuario.surname = apellido;
                      usuario.age = edad;
                        let data = JSON.stringify(usuario, null,1);
                      fs.writeFile('usuario_01.JSON', data , (err)=>{
                                  if (err)  throw err;
                                  console.log(`Error: ${err} `);
                            fs.readFile('usuario_01.JSON', (err, data)=> {
                                        if (err) throw err;
                                        let us = JSON.parse(data);
                                        callblack(us);   
                                rl.close();                             
                      });
                  });
              }); 
          });
      });
};


//readConsole(console.log);

module.exports = readConsole

