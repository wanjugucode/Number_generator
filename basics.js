let btn=document.getElementById(`btn`);
let output=document.getElementById(`outputtext`);
let number=[Math.floor(Math.random()*10)]
btn.addEventListener(`click`,function(){
let input=document.getElementById(`userinput`).value;
if(input==number){
    output.innerHTML=`You guessed right. your number was ${number}`
}
else if(input<number){
    output.innerHTML=`Almost there.guess again!`
}
if (input>number){
  output.innerHTML=`Guess again!`
}
})
 