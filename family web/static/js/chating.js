var formulario = document.getElementsByName("formulario")[0];
var mySubmit = function(e){            
    e.preventDefault();
    if(document.getElementById("mensaje").value != '')
    {
        enviar(document.getElementById("mensaje").value);
    }
        formulario.reset();
}

formulario.addEventListener("submit", mySubmit)

function enviar(mensaje){
    var renglon = document.createElement("div");
    var globo = document.createElement("div");
    var parrafo = document.createElement("span");
    parrafo.appendChild(document.createTextNode(mensaje));
    parrafo.style.textAlign = "right";
    parrafo.style.margin = "0px";
    parrafo.style.width = "auto";

    globo.className = "globo";
    globo.appendChild(parrafo);
    renglon.appendChild(globo);
    renglon.className = "renglon";
                
    document.getElementById("conversacion").appendChild(renglon);
    sendserver(mensaje);
}