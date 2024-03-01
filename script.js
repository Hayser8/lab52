function crearEstructuraChat() {
    
    const contenedor = document.createElement('div');
    contenedor.id = 'contenedor';

 
    const listadoChats = document.createElement('div');
    listadoChats.id = 'listado-chats';
    listadoChats.textContent = 'listados';

   
    const mensaje = document.createElement('div');
    mensaje.id = 'mensaje';
    mensaje.textContent = 'mensajes';

   
    const contenidoPerfil = document.createElement('div');
    contenidoPerfil.id = 'contenido-perfil';
    const imagenPerfil = document.createElement('img');
    imagenPerfil.width = 65;
    imagenPerfil.height = 65;
    imagenPerfil.className = 'imagen-perfil';
    imagenPerfil.src = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg';
    const nombrePerfil = document.createElement('h3');
    nombrePerfil.textContent = 'Julio';
    contenidoPerfil.appendChild(imagenPerfil);
    contenidoPerfil.appendChild(nombrePerfil);


    const contenidoChat = document.createElement('div');
    contenidoChat.id = 'contenido-chat';
    const mensajeTexto = document.createElement('textarea');
    mensajeTexto.id = 'mensaje-texto';
    mensajeTexto.className = 'mensaje-chat';
    mensajeTexto.style.width = '80%';
    mensajeTexto.style.flex = "1";
    mensajeTexto.style.marginRight = "10px";
    mensajeTexto.style.border = "1px solid #ced4da";
    mensajeTexto.style.borderRadius = "20px";
    mensajeTexto.style.padding = "10px";
    const enviarMensaje = document.createElement('button');
    enviarMensaje.id = 'enviar-mensaje';
    enviarMensaje.innerHTML = '&#x27A4;';
    enviarMensaje.style.border = "none";
    enviarMensaje.style.background = "none";
    enviarMensaje.style.fontSize = "24px";
    enviarMensaje.style.cursor = "pointer";
    enviarMensaje.style.color = "var(--color-primario)";
    contenidoChat.appendChild(mensajeTexto);
    contenidoChat.appendChild(enviarMensaje);


    contenedor.appendChild(listadoChats);
    contenedor.appendChild(mensaje);
    contenedor.appendChild(contenidoPerfil);
    contenedor.appendChild(contenidoChat);


    document.body.appendChild(contenedor);
}
function aplicarEstilosGenerales() {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.style.backgroundColor = "#f0f2f5";
    document.documentElement.style.setProperty('--color-primario', '#272058');
    document.documentElement.style.setProperty('--color-secundario', '#4f3cca');
    document.documentElement.style.setProperty('--color-terciario', '#865fdc');
    document.documentElement.style.setProperty('--color-cuaternario', '#99a7ff');
    document.documentElement.style.setProperty('--color-chat', 'lightblue');
    document.documentElement.style.setProperty('--fuente-x', "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
}
function aplicarEstiloContenedor() {
    const contenedor = document.getElementById('contenedor');
    contenedor.style.backgroundColor = "white";
    contenedor.style.height = "calc(100vh - 0px)";
    contenedor.style.display = "grid";
    contenedor.style.fontFamily = "var(--fuente-x)";
    contenedor.style.border = "1px solid black";
    contenedor.style.gridTemplateColumns = "20% 80%";
    contenedor.style.gridTemplateRows = "85% 15%";
}

function aplicarEstiloListadoChats() {
    const listadoChats = document.getElementById('listado-chats');
    listadoChats.style.backgroundColor = "var(--color-secundario)";
    listadoChats.style.borderRight = "1px solid #dee2e6";
    listadoChats.style.padding = "8px";
    listadoChats.style.overflowY = "auto";
}

function aplicarEstiloContenidoPerfil() {
    const contenidoPerfil = document.getElementById('contenido-perfil');
    contenidoPerfil.style.backgroundColor = "var(--color-primario)";
    contenidoPerfil.style.display = "flex";
    contenidoPerfil.style.alignItems = "center";
    contenidoPerfil.style.justifyContent = "space-around";
}

function aplicarEstiloMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = "flex";
    mensaje.style.flexDirection = "column-reverse";
    mensaje.style.overflowY = "auto";
    mensaje.style.alignItems = "flex-start";
    mensaje.style.backgroundColor = "var(--color-terciario)";
    mensaje.style.border = "1px solid black";
    mensaje.style.alignItems = "flex-end";
}

function aplicarEstiloContenidoChat() {
    const contenidoChat = document.getElementById('contenido-chat');
    contenidoChat.style.backgroundColor = "var(--color-cuaternario)";
    contenidoChat.style.border = "1px solid black";
    contenidoChat.style.display = "flex";
    contenidoChat.style.justifyContent = "space-evenly";
}

function aplicarEstilosChat() {
    const chats = document.getElementsByClassName('chat');
    for (let chat of chats) {
        chat.style.backgroundColor = "transparent";
        chat.style.width = "100%";
        chat.style.minHeight = "60px";
        chat.style.marginBottom = "8px"; 
        chat.style.padding = "10px";
        chat.style.boxShadow = "0 1px 0 0 #ccc"; 
    }
}
function crearBotonAlternancia() {
    const botonAlternancia = document.createElement('button');
    botonAlternancia.id = 'toggle-button';
    botonAlternancia.textContent = 'Modo Claro';
    botonAlternancia.style.position = 'fixed';
    botonAlternancia.style.bottom = '5px';
    botonAlternancia.style.left = '175px';
    botonAlternancia.style.padding = '10px';
    botonAlternancia.style.border = 'none';
    botonAlternancia.style.borderRadius = '5px';
    botonAlternancia.style.cursor = 'pointer';
    botonAlternancia.style.backgroundColor = '#272058';
    botonAlternancia.style.color = 'white';

    document.body.appendChild(botonAlternancia);

    botonAlternancia.addEventListener('click', toggleModo);
}
let modoOscuro = true;

function aplicarEstiloModoClaro() {
    document.body.style.backgroundColor = "#ffffff"; 
    document.documentElement.style.setProperty('--color-primario', '#6c757d'); 
    document.documentElement.style.setProperty('--color-secundario', '#adb5bd'); 
    document.documentElement.style.setProperty('--color-terciario', '#ced4da'); 
    document.documentElement.style.setProperty('--color-cuaternario', '#dee2e6'); 
    document.documentElement.style.setProperty('--color-chat', '#e9ecef'); 
}

function aplicarEstiloModoOscuro() {
    document.body.style.backgroundColor = "#f0f2f5";
    document.documentElement.style.setProperty('--color-primario', '#272058');
    document.documentElement.style.setProperty('--color-secundario', '#4f3cca');
    document.documentElement.style.setProperty('--color-terciario', '#865fdc');
    document.documentElement.style.setProperty('--color-cuaternario', '#99a7ff');
    document.documentElement.style.setProperty('--color-chat', 'lightblue');
}

async function mostrarMensajesDeUsuario(username) {
    let mensajes = await optenerPosts(); 
    let divMensajes = document.getElementById("mensaje");
    divMensajes.innerHTML = ''; 

    mensajes.forEach(mensaje => {
        if(mensaje.username === username) { 
            let contenidoMensaje = `${mensaje.content}`; 
            let divMensaje = document.createElement("div");
            divMensaje.innerText = contenidoMensaje;
            aplicarEstiloBubble(divMensaje); 
            divMensajes.appendChild(divMensaje);
        }
    });
}

function toggleModo() {
    if (modoOscuro) {
        aplicarEstiloModoClaro();
        document.getElementById('toggle-button').textContent = 'Modo Oscuro';
        modoOscuro = false;
    } else {
        aplicarEstiloModoOscuro();
        document.getElementById('toggle-button').textContent = 'Modo Claro';
        modoOscuro = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    agregarEstilosAnimacion();
    crearEstructuraChat(); 
    crearBotonAlternancia();
    aplicarEstilosGenerales();
    crearListoDeChats();
    aplicarEstiloContenedor();
    aplicarEstiloContenidoPerfil();
    aplicarEstiloMensaje();
    aplicarEstiloContenidoChat();
    aplicarEstilosGenerales();
    aplicarEstiloContenedor();
    aplicarEstiloContenidoPerfil();
    aplicarEstiloMensaje();
    aplicarEstiloContenidoChat();
    aplicarEstiloListadoChats();
    aplicarEstilosChat();
    cargarTodosLosMensajes();
    setInterval(() => {
        cargarTodosLosMensajes(); 
    }, 5000);
});



async function optenerPosts(){
    try {
        let response = await fetch('http://uwu-guate.site:3000/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Respuesta no exitosa');
        let posts = await response.json();
        console.log('Mensajes obtenidos:', posts);
        return posts; 
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
    }
}


function crearChat(texto, id) {
    let nuevoChat = document.createElement("div");
    nuevoChat.className = "chat";
    nuevoChat.id = id;
    nuevoChat.innerText = texto;
    nuevoChat.style.padding = "10px"; 
    nuevoChat.style.borderBottom = "1px solid #ccc";

    return nuevoChat;
}


async function enviarNuevoMensaje(username, mensaje) {
    try {
        const response = await fetch('http://uwu-guate.site:3000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                message: mensaje
            })
        });
        if (response.ok) {
            console.log('Mensaje enviado correctamente');
           
        } else {
            console.error('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error al enviar el mensaje', error);
    }
}

function detectarEnlaceImagen(texto) {
    const regexImagen = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    let resultado = texto.match(regexImagen);
    return resultado ? resultado[0] : null;
}

function validarURL(str) {
    const patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
    return patron.test(str);
}
async function cargarTodosLosMensajes() {
    let mensajes = await optenerPosts();
    let divMensajes = document.getElementById("mensaje");
    divMensajes.innerHTML = '';
   

    mensajes.forEach(async mensaje => {
        let esMiMensaje = mensaje.username === 'Julio';
        let contenidoMensaje = document.createElement("div");
        let textoMensaje = mensaje.content;

        
        let textoConEnlaceImagen = detectarEnlaceImagen(textoMensaje);
        if (textoConEnlaceImagen) {
            textoMensaje = textoMensaje.replace(textoConEnlaceImagen, `<img src="${textoConEnlaceImagen}" alt="Imagen" style="max-width: 100%; max-height: 200px; display: block; object-fit: cover;">`);
        }

        
        const palabras = textoMensaje.split(/\s+/);
        textoMensaje = await Promise.all(palabras.map(async palabra => {
            if (validarURL(palabra) && !detectarEnlaceImagen(palabra)) { 
                
                try {
                    let previewData = await fetch(`https://api.linkpreview.net/?key=18b4fe24f0006fd36df7c55f903c51b1&q=${encodeURIComponent(palabra)}`)
                        .then(response => response.json());

                   
                    if (previewData && previewData.image) {
                        return `<a href="${palabra}" target="_blank" rel="noopener noreferrer">
                                    <img src="${previewData.image}" alt="Vista previa" style="max-width: 100px; max-height: 100px; display: block;">
                                    <span>${previewData.title ? previewData.title : palabra}</span>
                                </a>`;
                    }
                } catch (error) {
                    console.error('Error obteniendo vista previa del enlace:', error);
                }
            }
            return palabra;
        })).then(parts => parts.join(' '));

        contenidoMensaje.innerHTML = `<strong>${mensaje.username}</strong><br>${textoMensaje}`;
        aplicarEstiloBubble(contenidoMensaje, esMiMensaje);

        
        divMensajes.insertBefore(contenidoMensaje, divMensajes.firstChild);
    });
}




async function crearListoDeChats(){
    let mensajes = await optenerPosts(); 
    
    let divListados = document.getElementById("listado-chats");
    if(divListados != null){
        divListados.innerHTML = ''; 

        let usernames = new Set(); 
        mensajes.forEach(mensaje => {
            let username = mensaje.username; 
            if(!usernames.has(username)) {
                let nuevoChat = crearChat(username, username); 
                divListados.appendChild(nuevoChat);
                usernames.add(username); 
            }
        });

        aplicarEstilosChat();
    }
}





function agregarEstilosAnimacion() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade-in {
            animation: fadeIn 1s ease-out;
        }
    `;
    document.head.appendChild(style);
}

function aplicarEstiloBubble(elemento, esMiMensaje) {
   
    elemento.style.maxWidth = '80%';
    elemento.style.marginBottom = '8px';
    elemento.style.wordWrap = 'break-word';
    elemento.style.padding = '10px';
    elemento.style.borderRadius = '20px';
    elemento.style.boxShadow = '0px 2px 2px rgba(0, 0, 0, 0.2)';
    elemento.style.border = 'none';
    elemento.style.fontFamily = 'Arial, sans-serif';
    elemento.style.fontSize = '14px';
    elemento.style.color = '#333';
    elemento.style.display = 'inline-block';

    
    if (esMiMensaje) {
        elemento.style.backgroundColor = '#4f3cca'; 
        elemento.style.marginLeft = 'auto'; 
    } else {
        elemento.style.backgroundColor = '#f0f2f5'; 
        elemento.style.marginRight = 'auto'; 
    }

    if (!elemento.classList.contains('fade-in')) {
        elemento.classList.add('fade-in');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const botonEnviar = document.getElementById('enviar-mensaje');
    const textoMensaje = document.getElementById('mensaje-texto');
    const contenedorMensajes = document.getElementById('mensaje');

    function enviarMensaje() {
        const texto = textoMensaje.value.trim();
        if (texto.length > 0 && texto.length <= 140) {
            const nuevaBurbuja = document.createElement('div');
            nuevaBurbuja.className = 'bubble';
            aplicarEstiloBubble(nuevaBurbuja, true); 
            nuevaBurbuja.innerHTML = `<strong>Julio</strong><br>${texto}`;

            contenedorMensajes.insertBefore(nuevaBurbuja, contenedorMensajes.firstChild);
            enviarNuevoMensaje('Julio', texto);

            textoMensaje.value = '';
        }
    }

    botonEnviar.addEventListener('click', enviarMensaje);

    textoMensaje.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            enviarMensaje(); 
        }
    });
});







