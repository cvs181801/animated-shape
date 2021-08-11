//grab elements fro mthe DOM

const cube = document.querySelector(".cube__container");


function randomNum() {
    const result = Math.floor(Math.random()* 6);
    if (result >= 1) {
        return result;
    } else {
        return 6;
    }
}

currentClass = "";

function rotate() {
    randomNumber = randomNum();
    let showClass = "show__" + randomNumber;
    if (currentClass) {
        cube.classList.remove(currentClass);
    } 
    cube.classList.add(showClass);
    currentClass = showClass;
}

console.log(rotate());
// let currentClass="";

// function rollDice() {
//     let randomNumber = randomNum();
//     console.log(randomNumber);
//     let showClass = "show__" + randomNumber;
//     console.log(showClass);
//     if (currentClass) {
//         cube.classList.remove(currentClass);
//     }
//         cube.classList.add(showClass);
//         currentClass = showClass;
// }

// console.log(rollDice());

document.addEventListener('mousemove', function(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
   // console.log(x);
    //console.log(y);
    const midY = y - window.innerHeight / 2;
    const midX = x - window.innerWidth / 2;
    //console.log(midY);
    //console.log(window.innerHeight);
    cube.style.left = x + "px";
    cube.style.top = y + "px";
    //return rotate();
    cube.style.transform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + midX + "deg)";
    
})