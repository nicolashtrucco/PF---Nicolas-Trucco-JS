/** @format */

document.getElementById("buttonOne").addEventListener("click", function () {
   Swal.fire({
      title: "Registrado Correctamente!",
      text: "Serás redirigido en breve.",
      icon: "success",
   });
});

document.addEventListener("DOMContentLoaded", function () {
   document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
         event.preventDefault();

         const inputName = document.getElementById("inputName").value;
         localStorage.setItem("nombreUsuario", inputName);

         setTimeout(function () {
            window.location.href = "./pages/home.html";
         }, 4000);
      });
});
