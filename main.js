let calcular = 1;
let cuota = 0;
let i = 0;
let numeroCompra = 0;
const interes1 = 0;
const interes12 = 0.5 / 100;
const interes24 = 1 / 100;
const compras = [];

class Usuario{

    nombre = "";
    edad = 0;
    salario = 0;

    constructor(nombre, edad, salario){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }
}

function calculadora(){
    do { 
        const cantidadCompras = parseInt(prompt("Hola, " + nombre + ". Ingresa la cantidad de compras a diferir:"))
    
        for(i = 0; i < cantidadCompras; i++){

            numeroCompra = i + 1;
            const valorCompra = parseFloat(prompt("Ingresa el valor de la compra " + numeroCompra + ":"))
            let numeroDeCuotas = parseInt(prompt("Elige el número de cuotas, las tasas de interés simple varían de acuerdo a la cantidad de meses: \n\n1. \n12. \n24.\n"))

                while(((numeroDeCuotas !== 1) && (numeroDeCuotas !== 12) && (numeroDeCuotas !== 24))) {
                    numeroDeCuotas = parseInt(prompt("Número de cuotas inválido, " + nombre + ". Elige entre: \n\n1. \n12. \n24.\n"))
                }

            switch(numeroDeCuotas){
                case 1:
                    cuota = parseFloat((valorCompra + (valorCompra * interes1)) / numeroDeCuotas )
                    break;
                case 12:
                    cuota = parseFloat((valorCompra + ((valorCompra * interes12))) / numeroDeCuotas )
                    break;
                case 24:
                    cuota = parseFloat((valorCompra + ((valorCompra * interes24))) / numeroDeCuotas )
                    break;
            }
            compras[i] = cuota;
        }
        for(i = 0; i < cantidadCompras; i++){

            numeroCompra = i + 1;
            alert("\nEl valor de la cuota para la compra " + numeroCompra + ", es de: " + compras[i])

            }

            calcular = parseInt(prompt("\n\n¿Deseas calcular las cuotas de otra compra? \n\nEscribe 1 para calcular de nuevo. \nEscribe 2 para salir.\n"))

            while((calcular !== 1) && (calcular !== 2)) { 
                calcular = parseInt(prompt("Comando no reconocido, intenta de nuevo " + nombre + ". \n\nEscribe 1 Para calcular de nuevo. \nEscribe 2 Para salir.\n"))
        }
        }while (calcular === 1)
}

let nombre = prompt("Ingresa tu nombre:")
    while(nombre == ""){
        nombre = prompt("Ingresa un nombre válido:")
    }
let edad = parseInt(prompt("Ingresa tu edad:"))
let salario = parseFloat(prompt("Ingresa el valor de tus ingresos:"))


const Usuario1 = new Usuario(nombre, edad, salario)

calculadora();

