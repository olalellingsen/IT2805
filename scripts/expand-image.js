//Henter inn bileelementene
var images = document.querySelectorAll("img")
var bodyEl = document.querySelector("body")
//Går gjennom bildene og gir dem lyttere som aktiverer makeBig()
for(i=0; i<images.length; i++){
  images[i].addEventListener("click", makeBig)
}

var newImage = document.createElement("img")//Lager bildelement, så vi slipper å ha mange tomme elementer på siden
var darkDiv = document.createElement("div")//Div for å gjøre bakgrunnen mørk når vi forstørrer bildet
//Legger til lyttere på våre tomme elementer
darkDiv.addEventListener("click", makeSmall)
newImage.addEventListener("click", makeSmall)
//Gir en klasse til det tomme bildet vårt
newImage.className="sizeImageBig"//Denne classen gjør bildet stort, og sentrert, men ikke synlig siden det mangler kilde
//Legger til de tomme elementene til nettsiden
bodyEl.appendChild(darkDiv)
bodyEl.appendChild(newImage)
//makeBig er funksjonen som gjør bildene større
function makeBig(e) {
  if(window.innerWidth > 768){//Sjekker om skjermen er bred nok, endrer seg når medlemmene har 1 per rad vs 3 per rad
    newImage.src = e.target.src//Gir klonen kildeattribut lik bildet som ble trykket på
    darkDiv.className = "nowDark"//Gjør diven til en stor mørkegrå, halvgjennomsiktig bakgrunn
    newImage.style.display = "inline"
    darkDiv.style.display = "inline"
  }
}
//Funksjon for å gjøre bildet lite igjen
function makeSmall() {
  //newImage.src=""//Fjerner det store bildet ved å fjerne kilden
  //darkDiv.className = ""//Gjør bakgrunnen lys igjen
  newImage.style.display ="none"
  darkDiv.style.display = "none"
}
