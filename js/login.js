/** @format */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const inputName = document.querySelector('input').value;
        localStorage.setItem('nombreUsuario', inputName);
        window.location.href = './pages/home.html';
    });
});