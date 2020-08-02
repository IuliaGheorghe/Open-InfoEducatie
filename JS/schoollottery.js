let questions = [

{
	q:"Numarul al carui patrat perfect este 625 este ... (numar)",
	a:25,
	s:200
},
{
	q:"Teorema lui Pitagora afirma faptul ca ipotenuza este egala cu ... patratelor catetelor",
	a:"suma",
	s:250
},
{
	q:"Suma masurilor unghiurilor intr-un triunghi este egala cu ... grade (numar)",
	a:180,
	s:100
},
{
	q:"In decompunerea in factori primi a numarului 425, 5 apare la puterea a ...-a (cifra)",
	a:2,
	s:500
},
{
	q:"Intr-un triunghi mediana uneste un varf cu ... laturii opuse",
	a:"mijlocul",
	s:200
},


]

let q = document.getElementById("question");
let index;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Timp Ramas: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            document.getElementById("content").style.display="none";
            if(document.getElementById("wrong-ans").style.display="none")
            {document.getElementById("time-out").style.display="flex";
             document.getElementsByClassName("punctaj")[0].innerHTML=questions[index].s;
    }
            
        }
    }, 1000);
}

function start(x){
   document.getElementById("ans-c").style.display="flex";
   q.innerHTML = questions[x-1].q;
   index=x-1;

   var fiveMinutes = 60 * 0.5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    for(let i=0;i<5;i++)
    	document.getElementsByClassName("card")[i].style.display="none";


}

function checkAns(){
	console.log(index);
	    
	    if(document.getElementById('ans').value===questions[index].a) {

            document.getElementById("content").style.display="none";
            document.getElementById("time-out").style.display="none";
            document.getElementById("good-ans").style.display="flex";
            document.getElementsByClassName("punctaj")[2].innerHTML=questions[index].s;
	    }
	    else if(Number(document.getElementById('ans').value) === questions[index].a) {

            document.getElementById("content").style.display="none";
            document.getElementById("time-out").style.display="none";
            document.getElementById("good-ans").style.display="flex";
            document.getElementsByClassName("punctaj")[2].innerHTML=questions[index].s;
	    }
	    else {

            document.getElementById("content").style.display="none";
            document.getElementById("time-out").style.display="none";
            document.getElementById("wrong-ans").style.display="flex";
            document.getElementsByClassName("punctaj")[1].innerHTML=questions[index].s;
	    }
	 
		
}









