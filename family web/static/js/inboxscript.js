function renglo(indice){
    var renglon = document.createElement("div");
    var link = document.createElement("a");
    var contenedor = document.createElement("div");
    var foto = document.createElement("div");
    var img = document.createElement("div");
    var info = document.createElement("div");
    var user = document.createElement("b");

    user.appendChild(document.createTextNode("Chat" + index));
    info.appendChild(user);
    info.style.paddingTop = "5px";
    foto.appendChild(img);
    contenedor.appendChild(foto);
    contenedor.appendChild(info);
    link.appendChild(contenedor);
    renglon.appendChild(link);
    var id = document.createAttribute("id");
    id.value = "chat" + i;
    renglon.setAttributeNode(id);
    var over = document.createAttribute("onmouseover");
    over.value = "colorON(this.id)";
    renglon.setAttributeNode(over);
    var out = document.createAttribute("onmouseout");
    out.value = "colorOFF(this.id)";
    renglon.setAttributeNode(out);
    var click = document.createAttribute("onclick");
    click.value = "conversacion(true, this.id)";
    renglon.setAttributeNode(click);
                
    info.style.borderBottom = ".5px solid rgba(0, 0, 0, 0.3)";
    img.className = "foto";
    contenedor.className = "chat-container";
    renglon.className= "chat";
    return renglon;
};


var padre = document.getElementById("lista de chats");
for(i=0; i<20; i++)
{
    reng= renglon(i);

    padre.appendChild(reng);
}
console.log("0.-Conversaciones cargadas");


function colorOFF(id){
    document.getElementById(id).style.background = "white";
}
function colorON(id){
    document.getElementById(id).style.background = "rgba(0, 0, 0, 0.137)";
}