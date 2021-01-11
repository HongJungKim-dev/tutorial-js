const title = document.querySelector("#title");
title.innerHTML ="hello";
title.style.color = "blue";
document.title = "hello js";

function handleResize(event){
    console.log(event);
}

function handleClick(){
    title.style.color = "red";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);