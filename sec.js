var names = ["#Section6","#Sec6"];
var i = -1;
function changeMute(){
    var el = document.getElementsByClassName('txt')[0];
    i++;
    if (i > names.length-1) i = 0;
    el.setAttribute('data',names[i]);
    el.innerText = names[i];
}
changeMute();
setInterval(changeMute,3000);