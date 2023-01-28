let buttonsSection=document.querySelector(".buttons")
let hintsText=document.querySelector(".hints")
let attemptsText=document.querySelector(".attempts span")
for(let i=1;i<31;i++){
    let button=document.createElement("button")
    button.classList.add("number")
    button.innerHTML=i
    buttonsSection.appendChild(button)
}
let secretNumber=getRandInt(1,30)
let live=10
let buttons=document.querySelectorAll(".number")
buttonsSection.onclick=function(event){
    let t=event.target
    if(t.classList.contains("number") && live>0){
        let userNumber=t.innerHTML
        t.disabled=true
        if(userNumber>secretNumber){
            hintsText.innerHTML="Секретное число меньше"
            live--
            attemptsText.innerHTML=live
        }
        else if(userNumber<secretNumber){
            hintsText.innerHTML="Секретное число больше"
            live--
            attemptsText.innerHTML=live
        }
        else{
            hintsText.innerHTML="Ты угадал"
            revealButtons()
        }
    }
    else if(t.classList.contains("new_game")){
        live=10
        secretNumber=getRandInt(1,30)
        hintsText.innerHTML="Я буду подсказывать"
        attemptsText.innerHTML="10"
        buttons.forEach(function(button){
            button.disabled=false
            button.classList.remove("right")
        })
    }
    if(live==0){
        revealButtons()
        hintsText.innerHTML="Ты проиграл"
    }
}
function revealButtons(){
    buttons.forEach(function(button){
            if(button.innerHTML==secretNumber){
                button.classList.add("right")
                
            }
            button.disabled=true
        })
}
function getRandInt(min,max){
return Math.floor(Math.random() * (max - min + 1)) + min
}
