const hourEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEL = document.getElementById("sec");

const ampm = document.getElementById("ampm");

function Clock(){
    let h  = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if(h>24){
        h=h-24
        ampm = "PM";
    }
    hourEl.innerText=h;
    minEl.innerText=m;
    secEL.innerText=s;

ampm,(innerText=am);
setTimeout(() => {
    Clock();
}, 1000);


}
Clock();