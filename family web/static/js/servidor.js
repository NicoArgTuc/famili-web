function sendserver(mensaje){
    var object = new XMLHttpRequest();
    object.open("POST", "/recibir", true);        
    
    object.onload = function(){
        var estado_d_envio = JSON.parse(this.responseText);
    }
    var envio = new FormData();
    envio.append('mensaje', mensaje);
    object.send(envio);
}