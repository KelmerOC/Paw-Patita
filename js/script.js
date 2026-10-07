/**
 * Script de validación de formulario y lógica de cliente (Semana 08)
 */

function validacion() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var confirmarPassword = document.getElementById('confirmar_password').value;
    var distrito = document.getElementById('distrito').value;
    var terminos = document.getElementById('terminos').checked;

    var esOrganizacion = document.querySelector('input[name="tipo_cuenta"]:checked').value === 'organizacion';

    // 1. Validar Nombre
    if (nombre.trim() === "") {
        alert('[Validación]: Debe ingresar su nombre completo.');
        return false;
    }

    // 2. Validar Correo
    if (correo.trim() === "" || correo.indexOf("@") === -1) {
        alert('[Validación]: Ingrese un correo electrónico válido.');
        return false;
    }

    // 3. Validar Contraseña
    if (password.length < 8) {
        alert('[Validación]: La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    // 4. Confirmar contraseña
    if (password !== confirmarPassword) {
        alert('[Validación]: Las contraseñas ingresadas no coinciden.');
        return false;
    }

    // 5. Validar Distrito
    if (distrito === "") {
        alert('[Validación]: Seleccione un distrito de residencia.');
        return false;
    }

    // 6. Validar si es Organización
    if (esOrganizacion) {
        var telefono = document.getElementById('telefono').value;
        var nombreOrg = document.getElementById('nombre_org').value;

        if (telefono.length !== 9 || isNaN(telefono)) {
            alert('[Validación]: El teléfono de WhatsApp debe tener 9 dígitos numéricos.');
            return false;
        }
        if (nombreOrg.trim() === "") {
            alert('[Validación]: Ingrese el nombre de la organización.');
            return false;
        }
    }

    // 7. Términos y condiciones
    if (!terminos) {
        alert('[Validación]: Debe aceptar el tratamiento de datos personales (Ley N.° 29733).');
        return false;
    }

    alert('Registro completado con éxito. Redirigiendo...');
    return true;
}

// Muestra u oculta los campos condicionales de Organizacion
function mostrarCamposOrg(mostrar) {
    var box = document.getElementById('box-organizacion');
    if (mostrar) {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}

// Simulación de interacción WhatsApp directa
function contactarWhatsApp(nombreMascota) {
    var mensaje = "Hola, estoy interesado en adoptar a " + nombreMascota + " mediante Paw Patita Cusco.";
    var url = "https://wa.me/51987654321?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

// Simulación del Bot Patita
function abrirBot() {
    alert("Bot Patita: ¡Hola! Soy el asistente solidario. ¿Deseas consultar sobre cómo adoptar o ver campañas activas en Cusco?");
}