
const fs = require('fs');
const readline = require('readline');




let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function writeAndRead( path, obj ){
    let objeto = {};
    objeto = obj;

    let data = JSON.stringify( objeto, null, 1 );
    
    fs.writeFile( path, data , (err)=>{
        if ( err)  
        console.log(`Error: ${err} `);

            fs.readFile( path, ( err, data)=> {
                if ( err ) throw err;
                let obj1 = JSON.parse( data );
                console.log( obj1 );
            });           
    });   
};



//writeAndRead("./miFichero.JSON", { calle: "Teruel", numero: 8 });
  

module.exports = writeAndRead ;
