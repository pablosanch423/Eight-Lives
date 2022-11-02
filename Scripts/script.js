var main = document.getElementById('enter-container');
var btn = document.getElementById('play');
var game = document.getElementById('game-container')
var error = document.getElementById('error-code')
var wordspace = document.getElementById('letters')
var guessletter = document.getElementById('guess-word')
var guessletterbtn = document.getElementById('guess-btn')
var outcomescreen = document.getElementById('end-screen')
var outcometxt = document.getElementById('outcome')
var finaldis = document.getElementById('word-ag')
btn.addEventListener('click', play)



guessletterbtn.addEventListener('click', ()=>{ 
    var wordvalue = guessletter.value;
    var classnumber = document.querySelectorAll(".DEE");
    var wrongletters = document.getElementById('wletters');
    var lives = document.querySelectorAll('.lives-item')
    var redlives = document.querySelectorAll('.red-item')
    var FOUND = false;
    var two = document.getElementById('word').value.toLowerCase()
    for(var i=0; i < classnumber.length; i++){
     if(classnumber[i].className.includes(wordvalue.toLowerCase()) == true){
        guess(wordvalue.toLowerCase());
        FOUND = true;
     }
      if(i+1 == classnumber.length && FOUND == false){
        if(wrongletters.innerHTML.includes(wordvalue.toLowerCase()) == false){
            wrongletters.innerHTML+= wordvalue.toLowerCase() + ", "
            
            var j = lives[0]
            j.className = 'red-item'

            if(redlives.length === 7){
                game.style.display = "none"
                outcomescreen.style.display ="flex"
                
                outcometxt.innerText = "lost!"

                finaldis.innerText = two
            }

             }
        }
      }


}

);

function play(){
var na = document.getElementById('word').value;
var wordvalue = na.toLowerCase()
var wordlengh = wordvalue.length

if(wordlengh == 0){
    main.style.display = "flex"
    error.style.display = "block"
}

else if(wordlengh > 0){
    main.style.display = "none"
    game.style.display = "flex"

    for(let i = 0; i < wordlengh; i++) {
        var parentdiv = document.createElement('div')
        parentdiv.innerText = '0'
        parentdiv.classList.add('DEE',wordvalue.substring(i,i+1))
        wordspace.appendChild(parentdiv)
        var classnumber = document.querySelectorAll(".DEE");
        parentdiv.setAttribute("id", + classnumber.length);
    } 
}
}


function guess(L){
    var classnumber = document.querySelectorAll(".DEE");  
   for(let i = 1; i < classnumber.length+1;i++){
    if(document.getElementById(i).className.includes(L) == true){
        document.getElementById(i).innerHTML = L;
    }
   }




   var na = document.getElementById('word').value;
   var wordvalue = na.toLowerCase()
    var COUNT = 0;
    var two = document.getElementById('word').value.toLowerCase()
   for(let j = 1; j < classnumber.length+1;j++){
    if(document.getElementById(j).innerHTML != "0"){
        COUNT++
    }
   }  

   if(COUNT == classnumber.length){
    game.style.display = "none"
    outcomescreen.style.display ="flex"
    outcometxt.innerText = "won!"

    finaldis.innerText = two
   } 
   
  
}



