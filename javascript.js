document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let email = document.getElementById('email');
    let emailConfirm = document.getElementById('emailConfirm');

    form.addEventListener('submit', function (e) {

        if (email.value !== emailConfirm.value) {
            alert('Los correos electrónicos no coinciden.');
            e.preventDefault();
            return;
        }

        let confirmar = confirm('¿Estás seguro de que quieres enviar el formulario?');
        
        if (!confirmar) {
            e.preventDefault();
        }
    });
});