var c = 0;
var btnimage = document.querySelector(".btnimg");
var bodyy = document.querySelector("body")
var habilidades = document.querySelector(".habil")

btnimage.onclick = function(){
  
  if (c++ < 1) {
      var newdiv = document.createElement("div");
      var botonCerrar = document.createElement("button");
    newdiv.appendChild(botonCerrar);
    botonCerrar.textContent = "Cerrar"
    newdiv.className= "moda-fondo";
    habilidades.appendChild(newdiv);
    var img = document.createElement("img");
    var oldImg = document.querySelector(".modal-imagen");
    img.src = oldImg.getAttribute("src");
    newdiv.appendChild(img);
    newdiv.style.display = "flex"
    botonCerrar.onclick = function(){
      
      newdiv.removeChild(img);
      newdiv.removeChild(botonCerrar);
      habilidades.removeChild(newdiv)
      c = 0;
  } 
    
  }else{
    newdiv.style.display = "none";
    
  }
  c++;
  //Como  poner al elemento creado img el link de una clase ?
  
}

