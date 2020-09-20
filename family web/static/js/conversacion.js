
conversacion = function(converEnCurso, id){
    if (converEnCurso != false){
        document.getElementById("iniciar chat").style.display = "none";
        document.getElementById("caja de conversacion").style.display = "block";
        document.getElementById("nombre de contacto").innerHTML = id;
    }
    else{
        document.getElementById("caja de conversacion").style.display = "none";
        document.getElementById("iniciar chat").style.display = "flex";
        }
}
            
            
            
            
            
                


            
            

            