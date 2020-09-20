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