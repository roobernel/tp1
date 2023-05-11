 'use strict';
// Una empresa llamada Noblex se presenta en la consultoría y plantea
// confeccionar una página para su sitio web de la empresa, solicita que
// haya un botón que diga ver televisores y permita mostrar al menos 9
// televisores de 50 pulgadas y que muestre:
// a. Código del producto.
// b. Cantidad de televisores en stock.
// c. Foto del producto.
// d. Precio del producto.
// e. Descripción del producto.
// f. Botón de añadir al carrito.
// Se pide también un botón que diga ordenar y que muestre los
// televisores del menor precio al mayor precio.

let tvs = []
tvs[0] = ['SMART TV AOC 50 PULGADAS ULTRA HD 50" 4K', 'CODC175156',132999, 'Diseño moderno con un marco ultrafino para que veas sólo lo que pasa en la TV Este televisor LED te ofrece imágenes con un excelente contraste Xmart: Disfruta de tu Smart TV con una gran variedad d e aplicaciones en línea tales como Netflix y Youtube.', 'recursos3/tv1'];
tvs[1] = ['SMART LED ANDROID TV HITACHI 50 PULGADAS 4K UHD', 'CODE145363', 116999, 'Android Tv 4K UHD (3840x2160) de 50" Smart, LED. Potencia 2x 9.5w RMS. Salidas de audio. Bluetooth 5.0. Wi Fi 2.4 GHz. Sintonizador TDA.1 USB / 3 HDMI / 1 AV-IN / 1 LAN / 1 antena/cable. Salidas 1 auricular / 1 SPDIF optica (audio digital) Incluye contro remoto y base.', 'recursos3/tv2'];
tvs[2] = ['SMART TV SKYWORTH 50 PULGADAS UHD 4K', 'CODC177704', 143299, 'Especificaciones Técnicas * Marca: Skyworth * Modelo: 50G22 * Pantalla 4K DLED: 50" * Control por voz * Resolución: 3840 x 2160 px * Relación de contraste: 5000:1 * Tiempo de respuesta: 8 Ms * Escala de pantalla: 16:9 * Angulo de Visión: H: 178º, V: 178º', 'recursos3/tv3'];
tvs[3] = ['SMART TV E-NOVA 50 PULGADAS ULTRA HD SMART TV ENOVA', 'CODC177708', 130799, 'Primer TV enova con sistema operativo androidtv. Diseño elegante de 50 pulgadas y bordes ultradelgados. Excelente contraste. Gracias al sistema operativo, es posible acceder e instalar *toda las apps permitidas por Google Play.', 'recursos3/tv4'];
tvs[4] = ['LED HYUNDAI 50 PULGADAS ULTRA HD ', 'CODC177917', 127999, ':El smart tv 50 pulgadas Hyundai cuenta con una pantalla UHD que posee una resolución de 3840x2160 píxeles la cual brinda una excelente calidad de imagen y contraste. Gracias a que posee Wi-Fi incorpo rado vas a poder acceder a internet de forma inalámbrica.', 'recursos3/tv5'];
tvs[5] = ['SMART QLED GOOGLE TV TCL 50 PULGADAS 4K UHD ', 'CODC178194E146947', 143099, 'Televisor QLED Smart Android Google. Pantalla LED de 50" UHD 4K 3840x2160. Procesador 64-bit A554 1.3GHz. Memoria 16GB eMMC5.0. Formato de pantalla 16:9. Frecuencia de barrido 60Hz. - sonido integrado Onkyo. Bluetooth 5.0GHz. Wi Fi 2.4 y 5.0 GHz. Entrada video compuesto.', 'recursos3/tv6'];
tvs[6] = ['SMART NEO QLED TV SAMSUNG 50 PULGADAS 4K UHD', 'CODE147028', 466999, 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto.Con la innovadora característica 4K de 144 Hz en la pantalla del TV, Motion Xcelerator Turbo Pro ofrece un rendimiento máximo, ya que crea imágenes consistentemente nítidas y velocidades increíblemente rápidas.', 'recursos3/tv7'];
tvs[7] = ['SMART LED ANDROID TV RCA 50 PULGADAS 4K UHD C50AND', 'CODE147682', 114999, 'Televisor Android Smart LED. Pantalla de 50" 4K (3840 x 2160). Relacion aspecto 16:09. Frecuencia de barrido 50/60Hz. 2 Parlantes integrados. Potencia de salida 2 x 8W. Sistema de sonido MTS (Estereo/Mono/SAP). Entradas: 1 RF (75 ohms) Antena/Cable 1 Video AV 1 Audio R/L. 4 HDMI. 2 USB. 1 LAN. Salidas: 1 Auricular. 1 Audio S/PDIF Optica ( Audio Digital). Bluetooth. Wi Fi.', 'recursos3/tv8'];
tvs[8] = ['SMART LED ANDROID TV CROWN MUSTANG 50 PULGADAS 4K', 'CODE148134', 124999, 'Televisor Smart android. Pantalla LED de 50" UHD 4K (3840x2160). Formato de pantalla 16:9. Radio contraste 5000:1. Brillo 250 CD/M2. Angulo de vision 178 (H y V). Colores display 16.7M. Tiempo de respuesta 6.5ms. Sonido stereo. Potencia de sonido 2x 10W. Sistema de video ATV:NTSC DTV:ISDB-T. Conexiones: RJ45. Optica. 4 Entradas HDMI 2.0. AV IN. 2 Entradas USB 2.0.', 'recursos3/tv9'];

let tvsxmayor=[]
tvsxmayor[0]=['SMART NEO QLED TV SAMSUNG 50 PULGADAS 4K UHD', 'CODE147028', 466999, 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto.Con la innovadora característica 4K de 144 Hz en la pantalla del TV, Motion Xcelerator Turbo Pro ofrece un rendimiento máximo, ya que crea imágenes consistentemente nítidas y velocidades increíblemente rápidas.', 'recursos3/tv7'];
tvsxmayor[1]=['SMART TV SKYWORTH 50 PULGADAS UHD 4K', 'CODC177704', 143299, 'Especificaciones Técnicas * Marca: Skyworth * Modelo: 50G22 * Pantalla 4K DLED: 50" * Control por voz * Resolución: 3840 x 2160 px * Relación de contraste: 5000:1 * Tiempo de respuesta: 8 Ms * Escala de pantalla: 16:9 * Angulo de Visión: H: 178º, V: 178º', 'recursos3/tv3'];
tvsxmayor[2]=['SMART QLED GOOGLE TV TCL 50 PULGADAS 4K UHD ', 'CODC178194E146947', 143099, 'Televisor QLED Smart Android Google. Pantalla LED de 50" UHD 4K 3840x2160. Procesador 64-bit A554 1.3GHz. Memoria 16GB eMMC5.0. Formato de pantalla 16:9. Frecuencia de barrido 60Hz. - sonido integrado Onkyo. Bluetooth 5.0GHz. Wi Fi 2.4 y 5.0 GHz. Entrada video compuesto.', 'recursos3/tv6'];
tvsxmayor[3]=['SMART TV AOC 50 PULGADAS ULTRA HD 50" 4K', 'CODC175156',132999, 'Diseño moderno con un marco ultrafino para que veas sólo lo que pasa en la TV Este televisor LED te ofrece imágenes con un excelente contraste Xmart: Disfruta de tu Smart TV con una gran variedad d e aplicaciones en línea tales como Netflix y Youtube.', 'recursos3/tv1'];
tvsxmayor[4]=['SMART TV E-NOVA 50 PULGADAS ULTRA HD SMART TV ENOVA', 'CODC177708', 130799, 'Primer TV enova con sistema operativo androidtv. Diseño elegante de 50 pulgadas y bordes ultradelgados. Excelente contraste. Gracias al sistema operativo, es posible acceder e instalar *toda las apps permitidas por Google Play.', 'recursos3/tv4'];
tvsxmayor[5]=['LED HYUNDAI 50 PULGADAS ULTRA HD ', 'CODC177917', 127999, ':El smart tv 50 pulgadas Hyundai cuenta con una pantalla UHD que posee una resolución de 3840x2160 píxeles la cual brinda una excelente calidad de imagen y contraste. Gracias a que posee Wi-Fi incorpo rado vas a poder acceder a internet de forma inalámbrica.', 'recursos3/tv5'];
tvsxmayor[6]=['SMART LED ANDROID TV CROWN MUSTANG 50 PULGADAS 4K', 'CODE148134', 124999, 'Televisor Smart android. Pantalla LED de 50" UHD 4K (3840x2160). Formato de pantalla 16:9. Radio contraste 5000:1. Brillo 250 CD/M2. Angulo de vision 178 (H y V). Colores display 16.7M. Tiempo de respuesta 6.5ms. Sonido stereo. Potencia de sonido 2x 10W. Sistema de video ATV:NTSC DTV:ISDB-T. Conexiones: RJ45. Optica. 4 Entradas HDMI 2.0. AV IN. 2 Entradas USB 2.0.', 'recursos3/tv9'];
tvsxmayor[7]=['SMART LED ANDROID TV HITACHI 50 PULGADAS 4K UHD', 'CODE145363', 116999, 'Android Tv 4K UHD (3840x2160) de 50" Smart, LED. Potencia 2x 9.5w RMS. Salidas de audio. Bluetooth 5.0. Wi Fi 2.4 GHz. Sintonizador TDA.1 USB / 3 HDMI / 1 AV-IN / 1 LAN / 1 antena/cable. Salidas 1 auricular / 1 SPDIF optica (audio digital) Incluye contro remoto y base.', 'recursos3/tv2'];
tvsxmayor[8]=['SMART LED ANDROID TV RCA 50 PULGADAS 4K UHD C50AND', 'CODE147682', 114999, 'Televisor Android Smart LED. Pantalla de 50" 4K (3840 x 2160). Relacion aspecto 16:09. Frecuencia de barrido 50/60Hz. 2 Parlantes integrados. Potencia de salida 2 x 8W. Sistema de sonido MTS (Estereo/Mono/SAP). Entradas: 1 RF (75 ohms) Antena/Cable 1 Video AV 1 Audio R/L. 4 HDMI. 2 USB. 1 LAN. Salidas: 1 Auricular. 1 Audio S/PDIF Optica ( Audio Digital). Bluetooth. Wi Fi.', 'recursos3/tv8'];




function info(){
    let mostrar = '<button onclick="mayor();"> Ordenar por mayor precio </button> <button onclick="menor();"> Ordenar por menor precio </button> <div class="contenido"> ';
    for (let x in tvs) {
        mostrar += `<div class="card">
        <h2> ${tvs[x][0]} </h2>
        <img  src="${tvs[x][4]}.jpg" alt="tv">
        <p class="p1" >$ ${tvs[x][2]}</p>
        <p class="p2"> ${tvs[x][3]}</p>
        <p class="p3"> ${tvs[x][1]}</p>
        </div>`;
    }
    mostrar+='</div>';
    document.getElementById("items").innerHTML = mostrar;
}

function mayor(){
    let mostrar = '<button onclick="mayor();"> Ordenar por mayor precio </button> <button onclick="menor();"> Ordenar por menor precio </button>  <div class="contenido"> ';
    for (let x in tvs) {
        mostrar += `<div class="card">
        <h2> ${tvsxmayor[x][0]} </h2>
        <img  src="${tvsxmayor[x][4]}.jpg" alt="tv">
        <p class="p1" >$ ${tvsxmayor[x][2]}</p>
        <p class="p2"> ${tvsxmayor[x][3]}</p>
        <p class="p3"> ${tvsxmayor[x][1]}</p>
        </div>`;
    }
    mostrar+='</div>';
    document.getElementById("items").innerHTML = mostrar;
}

function menor(){
    let mostrar = '<button onclick="mayor();"> Ordenar por mayor precio </button> <button onclick="menor();"> Ordenar por menor precio </button>  <div class="contenido"> ';
    for(let i=8;i>=0;i--){
        mostrar += `<div class="card">
        <h2> ${tvsxmayor[i][0]} </h2>
        <img  src="${tvsxmayor[i][4]}.jpg" alt="tv">
        <p class="p1" >$ ${tvsxmayor[i][2]}</p>
        <p class="p2"> ${tvsxmayor[i][3]}</p>
        <p class="p3"> ${tvsxmayor[i][1]}</p>
        </div>`;
    }
    mostrar+='</div>';
    document.getElementById("items").innerHTML = mostrar;
}



