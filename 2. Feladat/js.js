let points = localStorage.getItem("points");
let check = localStorage.getItem(document.querySelector("h1").dataset.value);

if(points === null){
    points = 0;
}

function setPoint(par) {
    if(par == 1 && check === null){
        localStorage.setItem("points",parseInt(points) + 1);
        localStorage.setItem(document.querySelector("h1").dataset.value,1);
    }
}

// let writing = false;

// const TypeWriter = event =>{
//     let text = event.target.innerText;
//     let i = 0;
//     if(!(writing)){
//         writing = true;
//         event.target.innerText = "";
//         const interval = setInterval(() => {
//             event.target.innerText += text.charAt(i);
//             i++;
//             if(i >= text.length){
//                 clearInterval(interval);
//                 event.target.innerText = text;
//                 writing = false;
//             }
//         },100)
//     }
// }


//document.querySelectorAll("h1").addEventListener("mouseover", TypeWriter);
// // document.querySelectorAll("button")[1].addEventListener("mouseover", TypeWriter);
// // document.querySelectorAll("button")[2].addEventListener("mouseover", TypeWriter);