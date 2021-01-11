// const title = document.getElementById("title");

// console.log(title);

// console.error("hello");
// title.innerHTML = "Hi! From JS";

//const title = document.getElementById("title");
// const title = document.querySelector("#title");

// title.innerHTML = "hello js";
// title.style.color = "red";
// console.dir(document);

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

// function handleResize(event){
//     console.log(event);
// }

// function handleClick(){
//     title.style.color = "red";
// }
// window.addEventListener("resize", handleResize);
// title.addEventListener("click", handleClick);

// const age = prompt("How old are you");
// if(age > 18){
//     console.log('you can drink');
// } else {
//     console.log('you cant');
// }

