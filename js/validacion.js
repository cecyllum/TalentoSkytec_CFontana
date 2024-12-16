const formulario = document.getElementById("miFormulario");
console.log(formulario);

formulario.addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    //veo los valores que tiene al momento
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(mensaje);

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre"); 
    //Veo que guarda
    console.log(errorNombre);
    const errorApellido = document.getElementById("errorApellido"); 
    //veo que guarda
    console.log(errorApellido);
    const errorEmail = document.getElementById("errorMail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        errorNombre.classList.remove("errorForm");
        formularioValido = false;
    } else {
        errorNombre.classList.add("errorForm");
    }
    // Validar apellido
    if (nombre === "") {
        errorNombre.classList.remove("errorForm");
        formularioValido = false;
    } else {
        errorNombre.classList.add("errorForm");
    }

    // Validar email con expresiones regulares
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("errorForm");
        formularioValido = false;
    } else {
        errorEmail.classList.add("errorForm");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("errorForm");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("errorForm");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");

        // creariamos un objeto literal del tipo formularioContacto

        const formularioContacto = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            mensaje: mensaje
        };
        // llamariamos a un api del backend y le mandariamos la informacion en formato json{
         // y ese api guardaria la informacion en una base de datos y luego mandaria el mail
        // aca se puede hacer la accion del envio al api del backend
    }
});