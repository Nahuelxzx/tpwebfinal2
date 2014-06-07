
$(function() {

  $('#coin-slider').coinslider({width:960,height:210,opacity:1});

 });	


function ocultar(elemento) {

  if(elemento.value == "si") {
      document.getElementById("ocultarDiv").style.display = "none";
   } else {
     document.getElementById("ocultarDiv").style.display = "block"; 
   }

}
