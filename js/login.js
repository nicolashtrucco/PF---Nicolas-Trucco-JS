/** @format */

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();

      const inputName = document.getElementById("inputName").value.trim();
      const inputEmail = document.getElementById("inputEmail").value.trim();
      const inputPassword = document.getElementById("inputPassword").value.trim();

      localStorage.setItem("nombreUsuario", inputName);
      localStorage.setItem("correoUsuario", inputEmail);
      localStorage.setItem("passwordUsuario", inputPassword);


      Swal.fire({
         title: "Registrado Correctamente!",
         text: "Serás redirigido en breve.",
         icon: "success",
      });

      setTimeout(function () {
         window.location.href = "./pages/home.html";
      }, 3000);
   });
});

