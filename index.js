//grab elements fro mthe DOM

const cube = document.querySelector(".cube__container");

document.addEventListener('mousemove', function(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    console.log(x);
    cube.style.left = x + "px";
    cube.style.top = y + "px";
    
})