const fs = require('fs');
// const fs = require('express');
//const fs = require('./fs');

let listarTabla = async(base, limite = 10) => {
    let result = 0
    for (let i = 0; i <= limite; i++) {
        let result = base * i
        console.log(`${base} * ${i} = ${result} \n`);

    }

}

let crearArchivo = async(base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            let result = base * i
            data += `${base} * ${i} = ${result} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });
    });


}

module.exports = {
    crearArchivo,
    listarTabla
}