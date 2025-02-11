document.getElementById("noButton").addEventListener("mouseover", function () {
    this.style.position = "relative";
    this.style.left = Math.random() * 100 + "px";
    this.style.top = Math.random() * 100 + "px";
  });
  
  function mostrarGracias() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".gracias-container").style.display = "flex";
   }
  