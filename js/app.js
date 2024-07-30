function buscarVuelos() {
    let busqueda = document.querySelector(`input`).value.toLowerCase();
    let precio = !isNaN(busqueda);
    let resultados;

    if (precio) {
        let precioBuscado = parseFloat(busqueda);
        resultados = vuelos.filter(vuelo => vuelo.precio <= precioBuscado);
    } else {
        resultados = vuelos.filter(vuelo => vuelo.destino.toLowerCase().includes(busqueda));
    }

    if (resultados.length > 0) {
        mostrarEnHtml(resultados);
    } else {
        alert(`No se encontraron vuelos con esos parametros.`);
    }
}

function mostrarEnHtml(resultados) {
    let lista = document.getElementById("resultadosVuelos");
    lista.innerHTML = "";

    const impuesto = 0.3 + 0.45 + 0.25;
    const template = document.getElementById("vueloTemplate");

    resultados.forEach(vuelo => {
        let clone = template.content.cloneNode(true);
        clone.querySelector(`.destino`).textContent = `${vuelo.destino}`;
        clone.querySelector(`.precio`).textContent = `Precio: ${vuelo.precio} USD`
        clone.querySelector(`.precioMasImpuesto`).textContent =`Valor total con impuestos: ${(vuelo.precio * (1 + impuesto)).toFixed(2)} USD`;
        lista.appendChild(clone);
    });
}

document.querySelector(`button`).addEventListener(`click`, buscarVuelos);

