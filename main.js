const typingEffect = document.getElementById("typed");
const blink = document.getElementById("blink-me");
let i = 0;
const txt = "Hello! My name is Vedad and I am a web developer. Welcome to my page.";
const speed = 200;


typingEffect.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);
function typeWriter() {
    typingEffect.innerHTML += txt.charAt(i);
    if (txt.charAt(i) == "!") {
        typingEffect.innerHTML += "<br/>";
    }
    i++;
    setTimeout(typeWriter, speed);
    if(i == txt.length){
        setTimeout(function(){
        typingEffect.innerHTML = "";
        i=0;},3000);
    //    setTimeout(function(){
   //         blink.style.display = "none";
   //     },1000);
    }
}




