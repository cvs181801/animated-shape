//grab elements fro mthe DOM

const cube = document.querySelector(".cube__container");

document.addEventListener('click', function(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    cube.style.left = (x + .5) + "px";
    
})