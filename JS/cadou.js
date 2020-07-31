let elevi = [
{
	nume:"Andrei",
	scor:100,
},
{
	nume:"Maria",
	scor:82,
},
{
	nume:"Ioana",
	scor:76,
},
{
	nume:"George",
	scor:50,
}
]

let name = document.getElementById("name");
let index;

function openGift(){
	for(let i=0;i<elevi.length;i++)
		if(elevi[i].nume===name.value) index=i;

	if(elevi[index].scor >=80) {
		document.getElementById("content").style.display="none";
		document.getElementById("premiu").style.display="flex";
		document.getElementById("premiu").innerHTML="Petrecere Online cu Pizza";
	}

	else {
		document.getElementById("content").style.display="none";
		document.getElementById("premiu").style.display="flex";
		document.getElementById("premiu").innerHTML="Din pacate nu ai primit niciun cadou astazi! Fii mai atent la curs ora viitoare! :)";
	}

}