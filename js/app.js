function buscarVuelos() {
   let busqueda = document.getElementById('criterioBusqueda').value.toLowerCase();
   let precio = !isNaN(busqueda);

   if (precio) {
       let precioBuscado = parseFloat(busqueda);
       resultados = vuelos.filter(vuelo => vuelo.precio <= precioBuscado);
   } else {
       resultados = vuelos.filter(vuelo => vuelo.destino.toLowerCase().includes(busqueda));
   }

   if (resultados.length > 0) {
       mostrarEnHtml(resultados);
   } else {
    Swal.fire({
        text: "No se encontraron vuelos con esos parametros.",
        icon: "error"
      });
   }
}

function mostrarEnHtml(resultados) {
   let lista = document.getElementById('resultadosVuelos');
   lista.innerHTML = '';

   const impuesto = 0.3 + 0.45 + 0.25;
   const template = document.getElementById('vueloTemplate');

   resultados.forEach(vuelo => {
       let clone = template.content.cloneNode(true);
       clone.querySelector('.destino').textContent = `${vuelo.destino}`;
       clone.querySelector('.precio').textContent = `Precio: ${vuelo.precio} USD`
       clone.querySelector('.precioMasImpuesto').textContent =`Valor total con impuestos: ${(vuelo.precio * (1 + impuesto)).toFixed(2)} USD`;
       lista.appendChild(clone);
   });
}

document.querySelector('button').addEventListener('click', buscarVuelos);



document.addEventListener('DOMContentLoaded', function() {
   const nombreUsuario = localStorage.getItem('nombreUsuario');
   if (nombreUsuario) {
       const bienvenidoTemplate = document.getElementById('bienvenidoTemplate').content.cloneNode(true);
       bienvenidoTemplate.querySelector('.bienvenidoName').textContent = `Bienvenido ${nombreUsuario}`;
       document.querySelector('.containerPirncipal').prepend(bienvenidoTemplate);
   }
});

document.querySelector('button').addEventListener('click', buscarVuelos);

// document.querySelector('button').addEventListener('click', function() {
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.onmouseenter = Swal.stopTimer;
    //       toast.onmouseleave = Swal.resumeTimer;
    //     }
    //   });
    //   Toast.fire({
    //     icon: "success",
    //     title: "Signed in successfully"
    //   });

//     console.log('hola')
// });
