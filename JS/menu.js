 function menu(){
      
      if(document.getElementById("menu").style.display==="none") {
         document.getElementById("menu").style.display="flex";
         document.getElementById("menu-icon").style.marginRight="42vw";
         document.getElementById("menu-icon").classList.remove('fa-bars');
         document.getElementById("menu-icon").classList.add('fa-times');
 
 }
 
    else {
      document.getElementById("menu").style.display="none";
      document.getElementById("menu-icon").style.marginRight="60px";
      document.getElementById("menu-icon").classList.remove('fa-times');
      document.getElementById("menu-icon").classList.add('fa-bars');
         
  }
      
    }