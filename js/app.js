/** @format */

fetch("/json/variableVuelos.json")
   .then((response) => response.json())
   .then((datos) => {
      vuelos = datos;
      mostrarEnHtml(vuelos);
   })
   .catch((error) => console.error("Error:", error));

let vuelos = [];

function buscarVuelos() {
   let busqueda = document
      .getElementById("criterioBusqueda")
      .value.toLowerCase();
   let precio = !isNaN(busqueda);

   let resultados = [];

   if (precio) {
      let precioBuscado = parseFloat(busqueda);
      resultados = vuelos
         .filter((vuelo) => vuelo.precio >= precioBuscado)
         .sort((a, b) => a.precio - b.precio);
   } else {
      resultados = vuelos.filter((vuelo) =>
         vuelo.destino.toLowerCase().includes(busqueda)
      );
   }

   if (resultados.length > 0) {
      mostrarEnHtml(resultados);
   } else {
      Swal.fire({
         text: "No se encontraron vuelos con esos parámetros.",
         icon: "error",
      });
      mostrarEnHtml(vuelos);
   }
}

function mostrarEnHtml(vuelosAMostrar) {
   let lista = document.getElementById("resultadosVuelos");
   lista.innerHTML = "";

   const impuesto = 0.3 + 0.45 + 0.25;
   const template = document.getElementById("vueloTemplate");

   vuelosAMostrar.forEach((vuelo) => {
      let clone = template.content.cloneNode(true);
      clone.querySelector(".destino").textContent = `${vuelo.destino}`;
      clone.querySelector(
         ".precio"
      ).textContent = `Precio: ${vuelo.precio} USD`;
      clone.querySelector(
         ".precioMasImpuesto"
      ).textContent = `Valor total con impuestos: ${(
         vuelo.precio *
         (1 + impuesto)
      ).toFixed(2)} USD`;
      lista.appendChild(clone);
   });

   document.querySelectorAll("#buttonComprar").forEach(function (button) {
      button.addEventListener("click", function (event) {
         event.preventDefault();
         Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Vuelo reservado con éxito. Se le enviarán las instrucciones a seguir por email.",
            showConfirmButton: false,
            timer: 3500,
         });
      });
   });
}

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("buttonTwo").addEventListener("click", buscarVuelos);

   const nombreUsuario = localStorage.getItem("nombreUsuario");
   if (nombreUsuario) {
      const bienvenidoTemplate = document
         .getElementById("bienvenidoTemplate")
         .content.cloneNode(true);
      bienvenidoTemplate.querySelector(
         ".bienvenidoName"
      ).textContent = `Bienvenido ${nombreUsuario}`;
      document.querySelector(".containerPirncipal").prepend(bienvenidoTemplate);
   }
});


