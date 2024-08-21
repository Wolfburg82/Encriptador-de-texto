
const botonEncriptar = document.querySelector(".boton-encriptar");
const textoEncriptar = document.querySelector(".texto");
const aviso = document.querySelector(".aviso-terminos");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".mensaje-encriptado");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`:,\u0300-\u036f']/g, "")
    
    if(texto == "") {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style"); 
        },1800);
    } else if (texto !== txt) {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1800);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "El texto debe ser todo en minúsculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1800);    
    } else {
        texto = texto.replace(/e/gi, "enter");
        texto = texto.replace(/i/gi, "imes");
        texto = texto.replace(/a/gi, "ai");
        texto = texto.replace(/o/gi, "ober");
        texto = texto.replace(/u/gi, "ufat");
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
    
});

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`:,\u0300-\u036f']/g, "")
    
    if(texto == "") {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style"); 
        },1800);
    } else if (texto !== txt) {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1800);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.color = "#FFC300";
        aviso.style.fontWeight = "600";
        aviso.textContent = "El texto debe ser todo en minúsculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1800);    
    } else {
        texto = texto.replace(/enter/gi, "e");
        texto = texto.replace(/imes/gi, "i");
        texto = texto.replace(/ai/gi, "a");
        texto = texto.replace(/ober/gi, "o");
        texto = texto.replace(/ufat/gi, "u");
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
    
});

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select(); 
    document.execCommand("copy");
})