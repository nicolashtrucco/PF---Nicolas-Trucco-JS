const vuelos = [
    { id: 1, destino: 'España', precio: 500 },
    { id: 2, destino: 'Francia', precio: 450 },
    { id: 3, destino: 'Alemania', precio: 600 },
    { id: 4, destino: 'Italia', precio: 550 },
    { id: 5, destino: 'Reino Unido', precio: 400 },
    { id: 6, destino: 'Estados Unidos', precio: 700 },
    { id: 7, destino: 'Canadá', precio: 650 },
    { id: 8, destino: 'México', precio: 350 },
    { id: 9, destino: 'Brasil', precio: 500 },
    { id: 10, destino: 'Argentina', precio: 450 },
    { id: 11, destino: 'Chile', precio: 300 },
    { id: 12, destino: 'Perú', precio: 320 },
    { id: 13, destino: 'Colombia', precio: 330 },
    { id: 14, destino: 'Japón', precio: 900 },
    { id: 15, destino: 'China', precio: 850 },
    { id: 16, destino: 'Australia', precio: 1000 },
    { id: 17, destino: 'Nueva Zelanda', precio: 950 },
    { id: 18, destino: 'Sudáfrica', precio: 800 },
    { id: 19, destino: 'Egipto', precio: 700 },
    { id: 20, destino: 'India', precio: 750 }
];

function buscarVuelos() {
    let busqueda = prompt("Ingresa el criterio de búsqueda (precio/pais):").toLowerCase();

    if (busqueda === 'precio') {
        let precioBuscado = parseInt(prompt("Ingresa el precio del vuelo que deseas buscar:"));
        let resultados = vuelos.filter(vuelo => vuelo.precio <= precioBuscado);

        if (resultados.length > 0) {
         mostrarEnHtml(resultados);
        } else {
            alert("No se encontraron vuelos por ese precio.");
        }

    } else if (busqueda === 'pais') {
        let destinoBuscado = prompt("Ingresa el país de destino del vuelo que deseas buscar:").toLowerCase();
        let resultados = vuelos.filter(vuelo => vuelo.destino.toLowerCase() === destinoBuscado);

        if (resultados.length > 0) {
         mostrarEnHtml(resultados);
        } else {
            alert("No se encontraron vuelos a ese destino.");
        }

    } else {
        alert("Criterio de búsqueda no válido. Por favor, ingresa 'precio' o 'pais'.");
    }
}

function mostrarEnHtml(resultados) {
    let lista = document.getElementById('resultadosVuelos');
    lista.innerHTML = ''; 

    const totalImpuesto = 0.30 * 0.45 * 0.25 * 5;

    resultados.forEach(vuelo => {
        let li = document.createElement('li');
        li.textContent = `ID: ${vuelo.id}, Destino: ${vuelo.destino}, Precio: ${vuelo.precio} USD || Valor total con impuestos: ${vuelo.precio + (vuelo.precio * totalImpuesto)} USD`;
        lista.appendChild(li);
    });
}
