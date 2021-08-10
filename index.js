//grab elements fro mthe DOM

const cube = document.querySelector(".cube__container");

document.addEventListener('click', function(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    console.log(x);
    cube.style.left = (x - 150) + "px";
    
})