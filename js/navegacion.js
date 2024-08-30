class Usuario {
    constructor(nombre, userName, password, avatar) {
        this.nombre = nombre;
        this.userName = userName;
        this.password = password;
        this.avatar = avatar;
    }

    validarCredenciales(userName, password) {
        return this.userName === userName && this.password === password;
    }
}

// Usuarios HardCodeados
const usuarios = [
    new Usuario("Alejandro Di Stefano", "drako", "1234", "https://avatars.githubusercontent.com/u/88512335?v=4"),
    new Usuario("María López", "mlopez", "1234", "https://yt3.googleusercontent.com/r9z-sZf8TUgxfVVzWFlCwO_PvfQdNo-pTH8hgtkvDHjgcAP8qNrj1hvQNkmng1vGkgnxRpfEng=s900-c-k-c0x00ffffff-no-rj"),
    new Usuario("Carlos Pérez", "cperez", "1234", "https://festivalgabo.com/wp-content/uploads/2024/07/carlos-perez-1.jpg")
];

const cuerpo = document.body;
const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "products",
        nombre: "Productos"
    },
    {
        link: "contact",
        nombre: "Contacto"
    },
    {
        link: "login",
        nombre: "Login"
    }
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";

for (const link of enlaces) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (link.link === 'login') {
        li.innerHTML = `<a href="#" id="${link.link}">${link.nombre}</a>`;
    } else {
        li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    }

}
header.style.backgroundColor = '#c2c2c2';
let modo = localStorage.getItem("Modo");

document.addEventListener("DOMContentLoaded", function () {
    const botonDark = document.getElementById('toggle-button');
    botonDark.className = 'button_grey';

    modo === 'dark-mode' && cuerpo.classList.add("dark-mode")

    botonDark.addEventListener("click", () => {
        cuerpo.classList.toggle("dark-mode");
        setLocalStorageModeDark();
        updateTextButton();
    })

    function updateTextButton() {
        if (cuerpo.classList.contains('dark-mode')) {
            botonDark.textContent = "Cambiar a Modo Claro";
        } else {
            botonDark.textContent = "Cambiar a Modo Oscuro";
            localStorage.removeItem("Modo");
        }
    }

    function setLocalStorageModeDark() {
        cuerpo.classList.contains('dark-mode') ?
            localStorage.setItem("Modo", "dark-mode") :
            localStorage.removeItem("Modo")
    }
    updateTextButton();

    // Manejo del Login
    const loginLink = document.getElementById("login");
    const titulo = document.getElementById("titulo-bienvenida");
    titulo.style.padding = "10px";

    //Verificar si hay un Usuario Activo
    if (localStorage.getItem("sesionActiva")) {
        const sesionActiva = JSON.parse(localStorage.getItem("sesionActiva"));
        titulo.innerHTML = `Bienvenido/a ${sesionActiva.nombre}
                        <img src="${sesionActiva.avatar}" alt="Avatar" style="width: 40px; border-radius: 50%;">`;
        titulo.style.color = "green";
        loginLink.textContent = "Logout";
        loginLink.style.color = "red";
    } else {
        loginLink.style.color = "green";
    }

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        // Confirmacion de Logout
        if (localStorage.getItem("sesionActiva")) {
            Swal.fire({
                title: "¿Esta seguro?",
                text: "Se cerrará la sesion",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, cerrar sesion!",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("sesionActiva");
                    titulo.textContent = "Bienvenido Usuario";
                    loginLink.textContent = "Login";
                    loginLink.style.color = "";
                    this.location.reload();
                }
            })
        } else {
            // Login
            Swal.fire({
                title: "Iniciar Sesion",
                html: `<input type="text" id="username" class="swal2-input" placeholder="Usuario">
                        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
                confirmButtonText: 'Iniciar Sesión',
                focusConfirm: false,
                preConfirm: () => {
                    const username = Swal.getPopup().querySelector('#username').value;
                    const password = Swal.getPopup().querySelector('#password').value;
                    if (!username || !password) {
                        Swal.showValidationMessage(`Por favor ingresa ambos campos`);
                        return false;
                    }
                    this.location.reload();
                    return { username: username, password: password };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { username, password } = result.value;
                    const usuario = usuarios.find(u => u.validarCredenciales(username, password));

                    if (usuario) {
                        titulo.innerHTML = `Bienvenido/a ${usuario.nombre}
                        <img src="${usuario.avatar}" alt="Avatar" style="width: 40px; border-radius: 50%;">`;
                        localStorage.setItem("sesionActiva", JSON.stringify(usuario));
                        Swal.fire({
                            title: `¡Bienvenido, ${usuario.nombre}!`,
                            html: `<img src="${usuario.avatar}" alt="Avatar" style="width: 200px; border-radius: 50%;">`,
                            icon: 'success'
                        });
                        titulo.style.color = "green";
                        loginLink.textContent = "Logout";
                        loginLink.style.color = "red";
                    } else {
                        Swal.fire("Error", "Usuario o Contraseña incorrecto", "error");
                    }
                }
            })
        }
    })

})