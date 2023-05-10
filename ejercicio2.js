'use strict';
// Una empresa llamada Texit se presenta en la consultoría y plantea
// confeccionar una página para su sitio web de la empresa, y solicita
// que la misma tenga un botón que diga cargar producto, y cada vez
// que se le haga clic, podrá cargarse un producto, también se pide un
// botón que diga ver productos para poder ver los productos cargados.
// El usuario podrá cargar la siguiente información:
// a. Código del producto.
// b. Nombre del producto.
// c. Categoría del producto.
// d. Precio del producto.
// e. Descripción del producto.

function cargar(){
    let mostrar=
    `<input type="number" class="campoform" placeholder="Código de producto" id="codigo" required>
    <input type="text" class="campoform" placeholder="Nombre de producto" id="nombre" required>
    <input type="text" class="campoform" placeholder="Categoría de producto" id="categoria" required>
    <input type="number" class="campoform" placeholder="Precio de producto" id="precio" required>
    <input type="text" class="campoform" placeholder="Descripción de prodcuto" id="descripcion" required>
    <input type="submit" onclick="obtener();" value="Cargar productos">
    <input type="reset" value="Restablecer campos"> `
    document.getElementById("forms").innerHTML=mostrar;
}
let productos=[];
let item=0
function obtener(){
    let codigo=0, categoria='', nombre='', precio=0, descripcion='';
    codigo=document.getElementById("codigo").value;
    nombre=document.getElementById("nombre").value;
    categoria=document.getElementById("categoria").value;
    precio=document.getElementById("precio").value;
    descripcion=document.getElementById("descripcion").value;
    productos[item]=[codigo, nombre, categoria, precio, descripcion];
    item+=1;
}


function info(){
    let mostrar='';
    for(let x in productos){
        mostrar+=`<div class="producto">
        <h2> ${productos[x][1]} </h2>
        <p>Código:${productos[x][0]}</p>
        <p>Categoría:${productos[x][2]}</p>    
        <p>Precio:${productos[x][3]}</p>    
        <p>Descripción:${productos[x][4]}</p>            
        </div>`;
    }
    document.getElementById("items").innerHTML=mostrar;
}



    