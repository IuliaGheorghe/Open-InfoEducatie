
let bal1 = document.getElementById("ballo");
let bal2 = document.getElementById("ballo2");

let score =0;





function scoreF1(){
	score++;
	document.getElementById("plus").innerHTML = "Scor: " + score;
	document.getElementById("ballo").style.display = "none";
		 


}


function scoreF2(){
	score++;
	document.getElementById("plus").innerHTML = "Scor: " + score;
	document.getElementById("ballo2").style.display = "none";
	


}

function moveBalloons(){

	    bal1.style.display ="block";
		  bal1.style.animationName = "ballmove";

		   bal2.style.display ="block";
		   bal2.style.animationName = "ballmove";

		

		setTimeout(function(){
		  bal1.style.display="none";
		  bal2.style.display="none";
          

		}, 5000);
	
}





