//Ejercicio 1: Suma del 1 al 100

function sumarCien() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma = suma + i //suma +=i
    }
    console.log(suma);
};
sumarCien();

//Ejercicio 2: Números pares del 1 al 50

for (let i = 1; i <=50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
};

//Ejercicio 3: Tabla de multiplicar

let numero = prompt("Escribe un número")
function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        return(numero + "x" + resultado === numero * resultado);    
    }
};
console.log(tabla(numero));