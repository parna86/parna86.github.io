var listObjects = document.getElementsByTagName('li');
let listDegrees = [0, 90, 180, 270];
var header = document.getElementById('header');
// console.log(listObjects[0].innerHTML);
// console.log(list.classList);
// var listPosition = list.getBoundingClientRect();

// console.log(listPosition.top);
// console.log(listPosition.left);
let h = window.innerWidth/2-100;
let k = window.innerHeight/2-200;
let r = h/3;

header.style.top = k;
header.style.left = h-r/8;
console.log(header.style.top);
console.log(k);
console.log(h);
// console.log("Radius = ",r);
for(let i = 0; i < listObjects.length; i++){
    element = listObjects[i];
    let top = k + (r*Math.sin(degree_to_radians(listDegrees[i])));
    let left = h + (r*Math.cos(degree_to_radians(listDegrees[i])));
    element.style.top = top;
    element.style.left = left;
    console.log('For ', element.innerHTML);
    console.log('Angle ', (i*90));
    console.log("Top: ",top, ", Left: ", left);
}

setInterval(()=>{
    for(let i = 0; i < listDegrees.length; i++){
        listDegrees[i] += 0.25;
        element = listObjects[i];
        let top = k + (r*Math.sin(degree_to_radians(listDegrees[i])));
        let left = h + (r*Math.cos(degree_to_radians(listDegrees[i])));
        element.style.top = top;
        element.style.left = left;
    }
}, 50);

function degree_to_radians(deg){
    var pi = Math.PI;
    var rad = deg * (pi/180);
    // console.log(rad)
    return rad;
}
