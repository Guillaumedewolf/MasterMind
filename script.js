var nombreCercle  = 0
var nombreProp = 0
var double = 0
var couleurPossible = ["red", "yellow", "blue", "green", "hotPink", "purple"]
var solution = ["", "", "", ""]
var reponse = ["","","",""]
var verificationJB = 0
var verificationJM = 0
var win = 0
// 0=faux 1=juste mais pas a la bonne place 2=juste et a la bonne place

function newPartie () {
	nombreCercle = 0
	nombreProp = 0
	win = 0
	randomColor(0,5)
	document.getElementById("nombreCoup").innerHTML = nombreProp

}
function randomColor (min,max) { 
	couleurPossible = ["red", "yellow", "blue", "green", "hotPink", "purple"]
	for (q = 0; q < 4; q++){
		var random = Math.floor(min + (max-q+1-min)*Math.random())
		solution[q] = couleurPossible[random]
		couleurPossible.splice(random, 1)
			
		

	}
	
	console.log(solution)
}



function choix(color){
	double = 0
	for (var k = 0 ; k < 4 ; k++){
		if(color == reponse[k]){
			double++
		}
	}
	if (double == 0){
	reponse[nombreCercle] = color
	var cercle = "<div class='cercle " + color + "'></div>"
	document.getElementById("proposition").innerHTML += cercle
	nombreCercle++
	document.getElementById(color).style.opacity = 0





	if(nombreCercle === 4){
		for (l = 0 ; l < 4 ; l++){
		document.getElementById(reponse[l]).style.opacity = 1
									}
		nombreProp++
		document.getElementById("nombreCoup").innerHTML = nombreProp
		var copier = document.getElementById("proposition").innerHTML
		document.getElementById("reponse" + nombreProp).innerHTML = copier
		document.getElementById("proposition").innerHTML = ""
		nombreCercle  = 0
		document.getElementById("reponse").scrollTo(0, 800);
		// fin element graphique
		// debut verification
			for (var i = 0; i < 4; i++){
				if (reponse[i] == solution [i]){
						verificationJB++
						}

				else {

				for(var j = 0; j<4; j++ ){
					if (reponse[i] == solution [j]){
						verificationJM++

					}

					
				}



					}
			}
			// fin boucle
			// debut verification affichage
					if(verificationJB == 4){win = 1}
					document.getElementById("verification" + nombreProp).style.height = "54px"
					document.getElementById("verification" + nombreProp).style.paddingTop = "30px"
				for (; verificationJB > 0; verificationJB--){
					document.getElementById("verification" + nombreProp).innerHTML += '<div class="cercleMB"></div>'


				}
				for (; verificationJM > 0; verificationJM--){
					document.getElementById("verification" + nombreProp).innerHTML += '<div class="cercleMW"></div>'


				}
				

			//victoire

			

		reponse = ["","","",""]
		

		
		
	}
	if(win == 1){
				alert("Super t'as trouvé 4 boules et t'es content.. joue à CupHead et tu verras la vraie difficulté d'un jeu!")

			}

			else if(nombreProp == 10){
				alert("tu as perdu, retourne sur adibou!")
			}

}
}

newPartie()