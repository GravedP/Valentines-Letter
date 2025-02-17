let open = document.getElementById("openMeID");
let oben = document.getElementById("oben");
let oben2 = document.getElementById("oben2");
let letterfull = document.getElementById("letterfull");
let obeninnen = document.getElementById("obeninnen");
let text = document.getElementsByClassName("letterfull");
let theletter = document.getElementById("theletter");
let lettercontainer = document.getElementById("lettercontainer");


function myFunction() {

    if(open.innerHTML == "Open Envelope"){
        oben.style.borderTopWidth = "0vh";
        open.disabled = true
        setTimeout(function(){
            oben2.style.borderBottomWidth = "17.5vh";
            theletter.style.bottom = "40vh";
        }, 500) 
    
        setTimeout(function(){
            theletter.style.width = "40vw"
            theletter.style.height = "45vh"
            theletter.style.fontSize = "25px"
            theletter.style.zIndex = "15";
            theletter.style.bottom = "1vh";
            open.innerHTML = "Close Envelope"
            open.disabled = false
        }, 2000) 
    } else {
            open.disabled = true
            theletter.style.fontSize = "16px"
            theletter.style.width = "20vw"
            theletter.style.height = "30vh"
            theletter.style.bottom = "40vh";
            
        setTimeout(function(){
            open.innerHTML = "Open Envelope"
            theletter.style.bottom = "0";
            theletter.style.zIndex = "7";
        }, 1000) 
        
        setTimeout(function(){
            oben2.style.borderBottomWidth = "0";
        }, 2500) 

        setTimeout(function(){
            oben.style.borderTopWidth = "17.6vh";
            open.disabled = true
            
        }, 3000) 
    }
  }


  