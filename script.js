let randX = getRandomIntInclusive(1, 1366);
let randY = getRandomIntInclusive(1, 1366);

document.addEventListener("click", function(e) {

console.log(randX);

    let span = this.createElement("span");
    span.style.position = "absolute";
    span.style.top = e.clientY + "px";
    span.style.left = e.clientX + "px";
    span.style.backgroundColor = "black";
    span.style.color = "red"
    span.innerText = e.clientX + " / " + e.clientY;

    this.body.appendChild(span);



    let x = parseInt(randX) - parseInt(e.clientX);
    let y = parseInt(randY) - parseInt(e.clientY);

    if (x <= 10) {
        span.style.color = "greenyellow";

        alert("you wone");
    } else {
        alert(x + " X far from distance -- " + y + " Y far from distance");

    }



});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}