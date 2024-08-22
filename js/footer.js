const footer = document.getElementById("footer");
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "Comision #59950 | CoderHouse " + anioActual;
footer.appendChild(parrafoFooter);