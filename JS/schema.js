let parts = ["a. Inceputul" , "b. Sfarsit", "c.Mijloc"];
let raspunsuri = ["a", "c" ,"b"];

for(let i=1;i<parts.length;i++){
	console.log(i-1);
	console.log(document.getElementsByClassName("var")[i-1]);
  let clone = document.getElementsByClassName("var")[i-1].cloneNode( true );


  document.getElementById('variante').appendChild( clone );
  document.getElementsByClassName("var")[i].innerHTML = parts[i];

}

for(let i=1;i<raspunsuri.length;i++){
	console.log(i-1);
	console.log(document.getElementsByClassName("op")[i-1]);
  let clone = document.getElementsByClassName("op")[i-1].cloneNode( true );

  document.getElementById('raspunsuri').appendChild( clone );
  document.getElementsByClassName("num")[i].innerHTML=i+1;
}

let score =0;

function scor(){

   for(let i=0;i<raspunsuri.length;i++)
   	if(document.getElementsByClassName("rasp")[i].value[0] === raspunsuri[i]) score+=100/raspunsuri.length;

   document.getElementById("container").style.display="none";
   document.getElementById("result").style.display="flex";
   console.log(score);
   if(score===100) document.getElementById("res-txt").innerHTML="Minunat! Ai obtinut punctajul maxim.";
   else if(score>0) document.getElementById("res-txt").innerHTML="Felicitari! Scorul tau este: ";
   else if(score===0)document.getElementById("res-txt").innerHTML="Din pacate nu ai obtinut niciun punct! Fii mai atent la curs si data viitoare te vei descurca mai bine!";

   document.getElementById("points").innerHTML=Math.round(score) + " puncte";

   
}










