'use strict';
// Una empresa llamada Roliplus se presenta en la consultoría y plantea
// confeccionar una página web para su empresa y solicita que el
// usuario pueda realizar clic en un botón que diga ver productos, y
// muestre al menos 9 productos, los mismos deberán mostrar en forma
// de lista los siguientes datos:
// a. Nombre del producto.
// b. Imagen del producto.
// c. Precio del producto.
// Las imágenes tiene que poder ser clicleables por el usuario, y al
// mismo tiempo, pide que cada uno de los productos tenga formato de
// tarjeta, color de fondo #252273 y el color del contenido tiene que ser
// #66B1F2. Cuando el usuario se posicione encima tiene que cambiar
// el color del fondo y el contenido, invirtiendo los colores propuestos.

let celulares=[]
celulares[0]=['Samsung A03 liberado','recursos1/a03', 45499];
celulares[1]=['Samsung A04 liberado','recursos1/a04',58499];
celulares[2]=['Samsung A04E liberado','recursos1/a04e' ,51999];
celulares[3]=['Samsung A04S liberado','recursos1/a04s',78999];
celulares[4]=['Samsung A13 liberado','recursos1/a13',82999];
celulares[5]=['Samsung A22 liberado','recursos1/a22',99999];
celulares[6]=['Samsung A53 liberado','recursos1/a53',163999];
celulares[7]=['Samsung A54 liberado','recursos1/a54',214999];
celulares[8]=['Samsung M13 liberado','recursos1/m13',89999];


function info(){
    let mostrar=''
    mostrar+='<section>'

    for(let x in celulares){
        mostrar+=`<div class="card">
        <p> ${celulares[x][1]} </p>
        <img src="${celulares[x][2]}" alt="celular">
        <p> $ ${celulares[x][3]}</p>    
        </div>`
    }
    mostrar+='</section>'
    document.write(`${mostrar}`)
}
