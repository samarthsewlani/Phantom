var i = 0;
var counter = 0;
var txt = 'Software Developer,******************,Freelancer,**********,Teacher,*******,Content creater,***************'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
typeWriter();
const buffer = 7;
function typeWriter() {
const text = getNextWord(counter);
//console.log("Text:-",text,counter);
if (i < text.length) {
    if(text.charAt(i)==="*"){
        var stringy = document.getElementById("introduction").innerHTML
        document.getElementById("introduction").innerHTML = stringy.slice(0,stringy.length-1);
        }
    else{
        document.getElementById("introduction").innerHTML += text.charAt(i);
    }
    i++;
    
}
else{
    counter++;
    i=0;
    pausems(750);
}
setTimeout(typeWriter, speed);
//console.log("Done...");
}
function getNextWord(index){

    const array = txt.split(",");
    const n = array.length;
    return array[index%n];

}
function pausems(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}