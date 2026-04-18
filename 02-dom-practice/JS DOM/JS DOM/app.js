let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let input = document.querySelector("input");



btn.addEventListener("click", function(){
    btn.style.color = "green";
})

input.addEventListener("change", function(){
    let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText = filteredValue;
    input.value = filteredValue;
});
// window.addEventListener("load", function () {
//     console.log("Page fully loaded");

//     div.addEventListener("scroll", function () {
//         let color = getRandomColor();
//         h2.innerText = color;
//         div.style.backgroundColor = color;
//     });
// });
// btn.addEventListener("click" , function(){
//     let color = getRandomColor();
//     h2.innerText = color;
//     div.style.backgroundColor = color;

// })

function getRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r} ,${g} , ${b})`;
    return color;
}