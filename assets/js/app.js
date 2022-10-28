 /* let cualquierElemento = document; */
 const d = document;// Se creo solo para evitar repetir document varias veces


 // 3 Selectores en JS 

 /// 1. Seleccionar por clases (Sintaxis mas antigua)
 //-- getElementsByClassname
const contenedor = document.getElementsByClassName('card')
console.log(contenedor)

/// 2. Seleccionar por Id (Sintaxis mas antigua)
//-- getElementById
const vespa = d.getElementById('vespa')
const carrito = d.getElementById('carrito')
console.log(vespa) 
console.log(carrito) 

/// 3. Sintaxis moderna
// --querySelector()
const tarjeta = d.querySelector('.card')
console.log(tarjeta)

//---------------------------------------------///

//Despues de seleccionar elementos se pueden modificar estos elementos
let titulo = d.querySelector('.titulo_contenido h1').innerText
let titulo2 = d.querySelector('main section h2').innerText
titulo = 'Moto Store';
titulo2 = 'Yamaha';
console.log(titulo)
console.log(titulo2)

let tituloPrincipal = d.querySelector('main h2')
tituloPrincipal.innerText = 'Moto Store' //Cambio de nombre en el DOM 

let titulo1 = d.querySelector('main h2').innerText // no reconoce visibility:hidden
let titulo3 = d.querySelector('main h2').textContent // trae los elemento asi no sean visibles
let titulo4 = d.querySelector('main h2').innerHTML // Puedo modificar HTML

console.log(titulo1)
console.log(titulo3)
console.log(titulo4)
 
 