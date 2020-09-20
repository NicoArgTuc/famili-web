var alt = window.innerHeight;
            var alt2 = alt/100*90 - 53;
            document.documentElement.style.height = alt + 'px';
            document.getElementById("lista de chats").style.height = alt2 + 'px';
            document.getElementById("conversacion").style.height = alt2 - 50 + 'px';
            window.addEventListener("resize", function(){
                var alto = window.innerHeight;
                var alto2 = alto/100*90 - 53;
                document.documentElement.style.height = alto + 'px';
                document.getElementById("lista de chats").style.height = alto2 + 'px';
                document.getElementById("conversacion").style.height = alto2 -50 + 'px';});
        
           
                
            
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
            
            var padre = document.getElementById("lista de chats");
            chat = function(index){
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
            }
            function colorOFF(id){
                document.getElementById(id).style.background = "white";
            }
            function colorON(id){
                document.getElementById(id).style.background = "rgba(0, 0, 0, 0.137)";
            }
            for(i=0; i<20; i++)
            {
                renglon = chat(i);
                
                padre.appendChild(renglon);
            }
            
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
            }