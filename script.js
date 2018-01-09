var nombreCercle  = 0
var nombreProp = 0
var double = 0
var couleurPossible = ["red", "yellow", "blue", "green", "hotPink", "purple"]
var solution = ["", "", "", ""]
var reponse = []
var verificationJB = 0
var verificationJM = 0
var win = 0
var cercleRetour= ""
var cercle = ""
//dif
var verificationTab = [1,1,1,1]
var difficulte = 0

// 0=faux 1=juste mais pas a la bonne place 2=juste et a la bonne place

function newPartie() {
	nombreCercle = 0
	nombreProp = 0
	win = 0
	document.getElementById("nombreCoup").innerHTML = nombreProp
	document.getElementById("historique").innerHTML = '<div id="reponse1"></div><div id="reponse2"></div><div id="reponse3"></div><div id="reponse4"></div><div id="reponse5"></div><div id="reponse6"></div><div id="reponse7"></div><div id="reponse8"></div><div id="reponse9"></div><div id="reponse10"></div>'
	document.getElementById("verificateur").innerHTML = '<div id="verification1"></div><div id="verification2"></div><div id="verification3"></div><div id="verification4"></div><div id="verification5"></div><div id="verification6"></div><div id="verification7"></div><div id="verification8"></div><div id="verification9"></div><div id="verification10"></div>'
	if (difficulte == 1){
		randomColorDif(0,5)
	}
	else {
		randomColor(0,5)
	}
	console.log(solution)
}
function randomColor(min,max) { 
	couleurPossible = ["red", "yellow", "blue", "green", "hotPink", "purple"]
	for (q = 0; q < 4; q++){
		var random = Math.floor(min + (max-q+1-min)*Math.random())
		solution[q] = couleurPossible[random]
		couleurPossible.splice(random, 1)
			
		

	}
	
}
function randomColorDif(min,max) { 
	couleurPossible = ["red", "yellow", "blue", "green", "hotPink", "purple"]
	for (q = 0; q < 4; q++){
		var random = Math.floor(min + (max+1-min)*Math.random())
		solution[q] = couleurPossible[random]
		
	}
}


function choixFacile(color){
	console.log(color)
	double = 0
	for (var k = 0 ; k < 4 ; k++){
		if(color == reponse[k]){
			double++
		}
	}
	if (double == 0){
	reponse.push(color)
	console.log(reponse)
	cercleRetour = "<div id=" + color + "1 class='cercle " + color + "' onclick=retour('" + color + "')></div>"
	document.getElementById("proposition").innerHTML += cercleRetour
	nombreCercle++
	document.getElementById(color).style.opacity = 0





	if(nombreCercle === 4){
		for (l = 0 ; l < 4 ; l++){
		document.getElementById(reponse[l]).style.opacity = 1
									}
		nombreProp++
		document.getElementById("nombreCoup").innerHTML = nombreProp
		for(ab =0 ; ab<4;ab++){
		cercle += "<div class='cercle " + reponse[ab]+ "'></div>"
	}console.log(cercle)
		document.getElementById("reponse" + nombreProp).innerHTML = cercle
		document.getElementById("proposition").innerHTML = ""
		cercle = ""
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

			

		reponse = []
		

		
		
	}
	if(win == 1){
				alert("Super t'as trouvé 4 boules et t'es content.. joue à CupHead et tu verras la vraie difficulté d'un jeu!")

			}

			else if(nombreProp == 10){
				alert("tu as perdu, retourne sur adibou!")
			}

}
}




function retour(color){
	console.log(reponse)
	document.getElementById(color).style.opacity = 1
	var element = document.getElementById(color + "1");
	element.parentNode.removeChild(element);
	nombreCercle--
	for (b=0; b<4;b++){
		if(reponse[b] == color){
			reponse.splice(b, 1)

			console.log(nombreCercle)

		}
	}

}







// niveau difficile!
//
//---------------------------------------------------------------

function choixDifficile(color){
	console.log(color)
	reponse.push(color)
	console.log(reponse)
	cercleRetour = "<div id=" + color + "1 class='cercle " + color + "' onclick=retour('" + color + "')></div>"
	document.getElementById("proposition").innerHTML += cercleRetour
	nombreCercle++






	if(nombreCercle === 4){
		for (l = 0 ; l < 4 ; l++){
		document.getElementById(reponse[l]).style.opacity = 1
									}
		nombreProp++
		document.getElementById("nombreCoup").innerHTML = nombreProp
		for(ab =0 ; ab<4;ab++){
		cercle += "<div class='cercle " + reponse[ab]+ "'></div>"
	}console.log(cercle)
		document.getElementById("reponse" + nombreProp).innerHTML = cercle
		document.getElementById("proposition").innerHTML = ""
		cercle = ""
		nombreCercle  = 0
		document.getElementById("reponse").scrollTo(0, 800);
		// fin element graphique
		// debut verification
			for (var i = 0; i < 4; i++){
				if (reponse[i] == solution [i]){
						verificationJB++
						verificationTab[i] = 0
						}
					}
				for(var i = 0; i < 4; i++){

				for(var j = 0; j<4; j++ ){
					if (reponse[i] == solution [j] && verificationTab[j] == 1){
						verificationJM++
						verificationTab[j] = 0
						break

					}

					
				}



					}
			

			

			console.log(verificationTab)
			verificationTab = [1,1,1,1]
			console.log(verificationTab)

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

			

		reponse = []
		

		
		
	}
	if(win == 1){
				alert("Super t'as trouvé 4 boules et t'es content.. joue à CupHead et tu verras la vraie difficulté d'un jeu!")

			}

			else if(nombreProp == 10){
				alert("tu as perdu, retourne sur adibou!")
			}

}





// choix difficulte


function difficile(){
	newPartie()
	difficulte = 1
	// document.getElementById("difficile").style.backgroundColor = "#C2815D"
	// document.getElementById("facile").style.backgroundColor = ""
	document.getElementById("infoJeux").innerHTML = "La solution est composé de 4 couleurs pouvant être les mêmes!"
	// document.getElementById("careeColor").style.transform = "translate(0,124px)"

}

function facile(){
	newPartie()
	difficulte = 0
	// document.getElementById("difficile").style.backgroundColor = ""
	// document.getElementById("facile").style.backgroundColor = "#C2815D"
	document.getElementById("infoJeux").innerHTML = "La solution est composé de 4 couleurs différentes!"
	// document.getElementById("careeColor").style.transform = "translate(0,0px)"


}


function choix(color){
	if (difficulte == 1){
		choixDifficile(color)
	}
	else{
		choixFacile(color)
	}

}


//mousehover

function mouseOverD(){
	document.getElementById("careeColor").style.transform = "translate(0,124px)"

}
function mouseOverF(){
	document.getElementById("careeColor").style.transform = "translate(0,0px)"
}

function mouseOut(){
	if(difficulte == 1){
		document.getElementById("careeColor").style.transform = "translate(0,124px)"
	}
	else{
		document.getElementById("careeColor").style.transform = "translate(0,0px)"
	}
}


newPartie()
