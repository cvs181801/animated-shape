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


document.addEventListener('mouseover', function(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    const midY = y - window.innerHeight / 2;
    const midX = x - window.innerWidth / 2;
    //cube.style.left = x + "px";
    //cube.style.top = y + "px";
    cube.style.transform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + midX + "deg)";
    //cube.style.transition = "transform ease 1s";
    
    //there are 2 options here, one is to use the random number generator to make it move, the other is to use the above line using the x and y values 

    //return rotate();
    
})