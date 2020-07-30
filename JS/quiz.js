//Intrebari si raspunsuri posibile pentru quiz


let questions = [

{
    question: "Care era numele celui mai mare fiu al lui Ilie Moromete?",
    a1: {a: "Paraschiv",  s:1},
    a2: {a: "Achim", s:0},
    a3: {a: "Niculae", s:0},
    a4: {a: "Nila", s:0}
},

{
    question: "Cum se numea cainele familiei Moromete?",
    a1: {a: "Rex" , s:0},
    a2: {a: "Max", s:0},
    a3: {a: "Dutulache", s:1},
    a4: {a: "Nero" , s:0}
},

{
    question: "Ce premiu a luat Niculae Moromete la scoala?",
    a1: {a: "I" , s:1}, 
    a2: {a: "II", s:0},
    a3: {a: "III", s:0},
    a4: {a: "A ramas corigent la istorie", s:0}
},

{
    question: "In ce an a aparut primul volum din Morometii?",
    a1: {a: "1956" , s:0},
    a2: {a: "1967", s:0},
    a3: {a: "1955", s:1},
    a4: {a: "1966",s:0}
}



]


let score = 0;


let questionEl = document.getElementById('question');
let answer1 = document.getElementById('ans1');
let answer2 = document.getElementById('ans2');
let answer3 = document.getElementById('ans3');
let answer4 = document.getElementById('ans4');
let previousBttn = document.getElementById ('inapoi');
let nextBttn = document.getElementById ('inainte');
let finalBttn = document.getElementById ('final');


console.log(answer1);

let questionIndex =0;


function loadQuestion (questionIndex) {

//implementare intrebari si raspunsuri in codul HTML

questionEl.innerHTML = (questionIndex+1) + '. ' + questions[questionIndex].question;
answer1.innerHTML = questions[questionIndex].a1.a;
answer2.innerHTML = questions[questionIndex].a2.a;
answer3.innerHTML = questions[questionIndex].a3.a;
answer4.innerHTML = questions[questionIndex].a4.a;
}

/*afisare butoane: daca suntem la prima intrebare nu vom avea buton de INAPOI;
  daca suntem la ultima intrebare butonul INAINTE va fi inlocuit de butonul FINALIZARE
  */

  function showBttns(questionIndex)
  {
    if(questionIndex===0) {
        previousBttn.style.display = "none";
        finalBttn.style.display = "none";}
        else if (questionIndex===questions.length-1) {nextBttn.style.display = "none";
        finalBttn.style.display = "inline-block";}
        else {
            previousBttn.style.display = "inline-block";
            nextBttn.style.display = "inline-block";
            finalBttn.style.display = "none";
        }
        
    }

    let answersScoreArray=[];

    for(let i=0;i<questions.length;i++)
        answersScoreArray[i]="NULL";

    function nextQuestion (){
     questionIndex++;
     loadQuestion(questionIndex);
     showBttns(questionIndex);
 }


 function previousQuestion (){
    questionIndex--;
    loadQuestion(questionIndex);
    showBttns(questionIndex);

}

// in functie de numarul x returnat de apasarea unui buton se acceseaza scorul raspunsului respectiv si este adunat la scorul total

function getResult(x){
    if(x===1)
    {score+=questions[questionIndex].a1.s;
        
        if(answersScoreArray[questionIndex]!=="NULL") score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a1.s;
        console.log(score);}

    else if(x===2)
    {score+=questions[questionIndex].a2.s;
        
        if(answersScoreArray[questionIndex]!=="NULL") score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a2.s;console.log(score);}

    
    else if(x===3)
    {score+=questions[questionIndex].a3.s;
        
        if(answersScoreArray[questionIndex]!=="NULL") score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a3.s;console.log(score);}


    else 
    {score+=questions[questionIndex].a4.s;
        
        if(answersScoreArray[questionIndex]!=="NULL") score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a4.s;console.log(score);}
    return score;
}


function show(score){
    console.log(score);
    document.getElementById('questions-container').style.display="none";
    document.getElementById('result').style.display="flex";
    document.getElementById('score').innerHTML = score;
    

}

//pentru atuncti cand este apasat butonul 'Am citit aceasta carte'



    function checkAll(){
    //verificam daca toate intrebarile au fost completate
    let ok=1;
    for(let i=0;i<=answersScoreArray.length;i++)
        if(answersScoreArray[i]==="NULL") {alert('Toate intrebarile sunt obligatorii! Reintoarce-te si completeaza intrebarea '+ (i+1) + "!"); ok=0; break}
    if(ok===1) show(score);
}

loadQuestion(questionIndex);
showBttns(questionIndex);