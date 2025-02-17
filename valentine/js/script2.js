let open = document.getElementById("openMeID");
let oben = document.getElementById("oben");
let oben2 = document.getElementById("oben2");
let letterfull = document.getElementById("letterfull");
let obeninnen = document.getElementById("obeninnen");
let text = document.getElementsByClassName("letterfull");
let heartsine = document.getElementsByClassName("shape-container");
let heartsinecontainer = document.getElementById("heartsinecontainer");
let next_butt = document.getElementById("nextbutt");
let before_butt = document.getElementById("befbutt");


function myFunction() {
    console.log(open.innerHTML)
    if(open.innerHTML == "Open Envelope"){
        oben.style.borderTopWidth = "0vh";
        open.disabled = true
        setTimeout(function(){
        }, 1000) 
        setTimeout(function(){
            oben2.style.borderBottomWidth = "17.5vh";
            letter_id.style.transform = "rotate(-8deg)"
            letter_id.style.bottom = "7vh"
        }, 500) 
    
        setTimeout(function(){
            letter_id.style.zIndex = "7";
            open.innerHTML = "Close Envelope"
            open.disabled = false
        }, 2000) 
        next_butt.disabled = false;
        before_butt.disabled = false;
    } else {
            open.disabled = true
            letter_id.style.transform = "rotate(0deg)"
            letter_id.style.zIndex = "7";
            next_butt.disabled = true;
        before_butt.disabled = true;
        
        setTimeout(function(){
            letter_id.style.bottom = "0";
            oben2.style.borderBottomWidth = "0";
        }, 1000) 

        setTimeout(function(){
            oben.style.borderTopWidth = "17.6vh";
            open.disabled = false
            open.innerHTML = "Open Envelope"
        }, 1500) 
    }
  }


  function randomIntFromInterval(min, max) { // min and max included 
    let answer = Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function readNext(){
    console.log(curr_letter)
    curr_letter += 1;

//Next letter up
    if(count_num > curr_letter){
    letter_id.style.transform = "rotate(-360deg)"
    letter_id.style.bottom = "120vh"
    letter_id = document.getElementById("letter" + curr_letter)
    setTimeout(function(){
        letter_id.style.transform = "rotate(-8deg)"
        letter_id.style.bottom = "7vh"
    }, 500) 

    setTimeout(function(){
        letter_id.style.zIndex = "7";
    }, 1000) 
}else {
alert("That was the last letter, Darling")

}}

function readBefore(){
    console.log(curr_letter)
    curr_letter -= 1;

//Next letter up
    if(count_num > curr_letter){
        letter_id.style.transform = "rotate(0deg)"
        setTimeout(function(){
             letter_id.style.bottom = "0vh"
             letter_id = document.getElementById("letter" + curr_letter)
    }, 200) 
        
        setTimeout(function(){
            letter_id.style.transform = "rotate(-8deg)"
        letter_id.style.bottom = "7vh"
    }, 500) 

    setTimeout(function(){
        letter_id.style.zIndex = "7";
    }, 1000) 
}else {


}
}