var bienvenida = document.getElementById("bienvenida");
var menuUsuarios = document.getElementById("menuUsuarios");
var usuarioLogueado;
var botonRegresar = document.getElementById("botonRegresar");

// Arreglo de cuentas  


// Esperar 2 segundos y luego ocultar el mensaje con un efecto de desvanecimiento
setTimeout(function() {
    bienvenida.style.opacity = "0";
    setTimeout(function() {
    bienvenida.style.display = "none";
    menuUsuarios.style.display = "flex";
    }, 1000);
}, 2000);


//ocultar botones hasta que uno se logue    
function mostrarBotones() {
    var contenedorBotones = document.querySelector('.contenedor-botones');
    contenedorBotones.style.display = 'flex';

    var menuUsuarios = document.getElementById('menuUsuarios');
    menuUsuarios.style.display = 'none';

    var formularioNIP = document.querySelector('form');
    formularioNIP.style.display = 'none';
}
var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

//pedir el NIP
function pedirNIP(usuario) {
    var menuUsuarios = document.getElementById("menuUsuarios");
    menuUsuarios.style.display = "none"; // Ocultar el menú de usuarios

    var formularioNIP = document.createElement("form"); // Crear un elemento de formulario
    formularioNIP.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      var nip = document.getElementById("nipInput").value; // Obtener el valor del NIP ingresado

    switch (usuario) {
        case "Mali":
        if (nip === "1234") {
            //*alert("Bienvenida Mali");
            usuarioLogueado = "Mali";
            mostrarBotones();
        } else {
            alert("Acceso Denegado");
        }
        break;
        case "Gera":
        if (nip === "5678") {
            //alert("Bienvenido Gera");
            usuarioLogueado = "Gera";
            mostrarBotones();
        } else {
            alert("Acceso Denegado");
        }
        break;
        case "Maui":
        if (nip === "9102") {
            //alert("Bienvenido Maui");
            usuarioLogueado = "Maui";
            mostrarBotones();
        } else {
            alert("Acceso Denegado");
        }
        break;
        default:
        alert("Usuario desconocido");
    }
    });

    //CSS asocado al formulario
    formularioNIP.style.display = 'flex';
    formularioNIP.style.flexDirection = 'column';
    formularioNIP.style.alignItems = 'center';
    formularioNIP.style.justifyContent = 'center';
    formularioNIP.style.height = '100vh';

    var inputNIP = document.createElement("input"); // Crear un elemento de entrada de texto
    inputNIP.setAttribute("type", "password"); // Establecer el tipo de entrada como contraseña
    inputNIP.setAttribute("id", "nipInput"); // Establecer el ID del elemento de entrada
    inputNIP.setAttribute("placeholder", "Ingrese su NIP"); // Establecer un marcador de posición para el campo de entrada
    inputNIP.required = true; // Hacer que el campo de entrada sea obligatorio

    var submitButton = document.createElement("input"); // Crear un elemento de botón de envío
    submitButton.setAttribute("type", "submit"); // Establecer el tipo de entrada como enviar
    submitButton.setAttribute("value", "Ingresar"); // Establecer el texto del botón de envío

    formularioNIP.appendChild(inputNIP); // Agregar el campo de entrada al formulario
    formularioNIP.appendChild(submitButton); // Agregar el botón de envío al formulario

    document.body.appendChild(formularioNIP); // Agregar el formulario al cuerpo del documento
}
function obtenerSaldo(usuario) {
    var saldo = 0;
    for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre === usuario) {
        saldo = cuentas[i].saldo;
        break;
    }
    }
    return saldo;
}

  // Mostrar mensaje según el botón presionado
function mostrarMensaje(mensaje) {
    var contenedorBotones = document.querySelector('.contenedor-botones');
    var menuConsulta = document.getElementById('menuConsulta');
    var saldoElement = document.getElementById('saldo');

    switch (mensaje) {
    case 'Recarga':
        alert("Boton sin programar");
        break;
    case 'Pago':
        alert("Boton sin programar");
        break;
    case 'Transacciones':
        alert("Boton sin programar");
        break;
    case 'Otro':
        alert("Boton sin programar");
        break;
    case 'Retiro':
        contenedorBotones.style.display = 'none'; // Ocultar el contenedor de botones
        menuRetiro.style.display = 'block'; // Mostrar el menú de depósito
        var saldo = obtenerSaldo(usuarioLogueado); // Obtén el saldo del usuario logueado
        saldoElement.textContent = "Tu saldo actual es: " + saldo + "$"; // Mostrar el saldo actual
        var saldoDespuesRetiroElement = document.getElementById("saldoDespuesDeposito");
        saldoDespuesRetiroElement.style.display = "none"; // Ocultar el elemento de saldo después del depósito
        break;
    case 'Transferencia':
        alert("Boton sin programar");
        break;
    case 'Depósitos':
        contenedorBotones.style.display = 'none'; // Ocultar el contenedor de botones
        menuDeposito.style.display = 'block'; // Mostrar el menú de depósito
        var saldo = obtenerSaldo(usuarioLogueado); // Obtén el saldo del usuario logueado
        saldoElement.textContent = "Tu saldo actual es: " + saldo + "$"; // Mostrar el saldo actual
        var saldoDespuesDepositoElement = document.getElementById("saldoDespuesDeposito");
        saldoDespuesDepositoElement.style.display = "none"; // Ocultar el elemento de saldo después del depósito
        break;
    case 'Consulta':
        contenedorBotones.style.display = 'none'; // Ocultar el contenedor de botones
        menuConsulta.style.display = 'block'; // Mostrar el menú de consulta
        var saldo = obtenerSaldo(usuarioLogueado); // Obtén el saldo del usuario logueado
        saldoElement.textContent = saldo + "$"; // Actualizar el saldo en el menú de consulta
        break;
    }
    var botones = document.querySelectorAll('.boton-cajero');
    for (var i = 0; i < botones.length; i++) {
    botones[i].style.display = 'none';
    }
}

function salir() {
    location.reload();
}

function regresarMenu() {
    history.back(); // Regresar a la página anterior
}


function ocultarMenuConsulta() {
    var menuConsulta = document.getElementById('menuConsulta');
    menuConsulta.style.display = 'none';
}

function agregarSaldo() {
    var cantidadAgregar = document.getElementById("cantidadAgregar").value;
    var saldoElement = document.getElementById("saldo");
    var saldoDespuesDepositoElement = document.getElementById("saldoDespuesDeposito");

    // Validar si se ingresó una cantidad válida
    if (!isNaN(cantidadAgregar) && cantidadAgregar.trim() !== "") {
        // Convertir la cantidad a número
        var cantidad = parseFloat(cantidadAgregar);

        // Validar si la cantidad es positiva
        if (cantidad > 0) {
            // Obtener el saldo actual
            var saldoActual = obtenerSaldo(usuarioLogueado);

            // Calcular el nuevo saldo sumando la cantidad
            var nuevoSaldo = saldoActual + cantidad;

            // Limitar el saldo máximo a 990
            if (nuevoSaldo <= 990) {
                // Actualizar el saldo en el elemento de la página
                saldoDespuesDepositoElement.textContent = nuevoSaldo.toFixed(2); // Mostrar el saldo después del depósito
                saldoDespuesDepositoElement.style.display = "block"; // Mostrar el elemento del saldo después del depósito
                
                // Actualizar el saldo en la variable cuentas
                for (var i = 0; i < cuentas.length; i++) {
                    if (cuentas[i].nombre === usuarioLogueado) {
                        cuentas[i].saldo = nuevoSaldo;
                        break;
                    }
                }

                // Actualizar el saldo en el almacenamiento local
                localStorage.setItem(usuarioLogueado, nuevoSaldo.toFixed(2));

                // Actualizar el saldo en la clase CSS "Saldo"
                saldoElement.textContent = nuevoSaldo.toFixed(2);
            } else {
                alert("El saldo no puede superar 990.");
            }
        } else {
            alert("La cantidad debe ser un número positivo.");
        }
    } else {
        alert("Ingrese una cantidad válida.");
    }
}

//retirar saldo
function retirarSaldo() {
    var cantidadRetirar = document.getElementById("cantidadRetirar").value;
    var saldoElement = document.getElementById("saldo");
    var saldoDespuesRetiroElement = document.getElementById("saldoDespuesRetiro");

    // Validar si se ingresó una cantidad válida
    if (!isNaN(cantidadRetirar) && cantidadRetirar.trim() !== "") {
        // Convertir la cantidad a número
        var cantidad = parseFloat(cantidadRetirar);

        // Validar si la cantidad es positiva
        if (cantidad > 0) {
            // Obtener el saldo actual
            var saldoActual = obtenerSaldo(usuarioLogueado);

            // Calcular el nuevo saldo retirar la cantidad
            var nuevoSaldo = saldoActual - cantidad;

            // Limitar el saldo máximo a 990
            if (nuevoSaldo >= 10) {
                // Actualizar el saldo en el elemento de la página
                saldoDespuesRetiroElement.textContent = nuevoSaldo.toFixed(2); // Mostrar el saldo después del depósito
                saldoDespuesRetiroElement.style.display = "block"; // Mostrar el elemento del saldo después del depósito
                
                // Actualizar el saldo en la variable cuentas
                for (var i = 0; i < cuentas.length; i++) {
                    if (cuentas[i].nombre === usuarioLogueado) {
                        cuentas[i].saldo = nuevoSaldo;
                        break;
                    }
                }

                // Actualizar el saldo en el almacenamiento local
                localStorage.setItem(usuarioLogueado, nuevoSaldo.toFixed(2));

                // Actualizar el saldo en la clase CSS "Saldo"
                saldoElement.textContent = nuevoSaldo.toFixed(2);
            } else {
                alert("El saldo no puede ser menor que  10.");
            }
        } else {
            alert("La cantidad debe ser un número positivo.");
        }
    } else {
        alert("Ingrese una cantidad válida.");
    }
}

function regresarMenu() {
    menuUsuarios.style.display = 'flex'; // Mostrar el menú de usuarios
    var contenedorBotones = document.querySelector('.contenedor-botones');
    contenedorBotones.style.display = 'none'; // Ocultar el contenedor de botones
    var formularioNIP = document.querySelector('form');
    formularioNIP.style.display = 'none'; // Ocultar el formulario de NIP
}

botonRegresar.addEventListener("click", regresarMenu); // Agregar evento de clic al botón de regreso