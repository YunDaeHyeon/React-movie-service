const text = document.querySelector("#container span:first-child");
const button = document.querySelector("#container button");

let count = 0;

function onButtonClick(){
    count++;
    text.innerText = `${count}번 클릭하였다.`;
}

text.innerText = `${count}번 클릭하였다.`;
button.addEventListener("click", onButtonClick);