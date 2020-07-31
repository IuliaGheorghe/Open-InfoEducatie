let words = [

{
  word:"Magura Tarcaului",
  value:0
},

{
  word:"Span",
  value:0
},

{
  word:"Bisisica",
  value:1
},

{
  word:"Achim",
  value:1
},

{
  word:"Paraschiv",
  value:1
},

{
  word:"Vasile Baciu",
  value:0
},

{
  word:"Fonciire",
  value:1
},

{
  word:"Codru",
  value:0
},

{
  word:"Minodora",
  value:0
},

{
  word:"Salcam",
  value:1
},

{
  word:"Fasole",
  value:1
},

{
  word:"Nichifor",
  value:0
},



]


let cuvant = document.getElementById("cuvant");
let score =0;
let i = 0;

function showWord(){
	
	
	if(i===words.length) {
		if(score<0) score=0;
        cuvant.style.fontSize="40px";
		cuvant.innerHTML = "Nu mai sunt cuvinte! Punctajul tau: " + score;
		document.getElementById("value-bttns").style.display="none";
	}
	else
    cuvant.innerHTML = words[i].word;  
		

}



function scoreFunc(x){

	if(words[i].value===x) score++;
	else  score-=2;
	

	console.log("Scorul:" + score);

	i++;
	showWord();
	
}

function startGame(){
	document.getElementsByTagName("button")[0].style.display="none";
    document.getElementById("value-bttns").style.display="flex";
	showWord();
	 
}
