//add 2 numbers
let firstNum = document.getElementById("first")
let secondNum = document.getElementById("second")
let calculateBtn = document.getElementById("calculate")
let res = document.getElementById("ress")


calculateBtn.addEventListener("click", function add() {
    res.value = parseInt(firstNum.value) + parseInt(secondNum.value)
})

//convert
let num = document.getElementById("num")
let dolBtn = document.getElementById("dolval")
let sumBtn = document.getElementById("sumVal")
let convResult = document.getElementById("res")


dolBtn.addEventListener("click", function () {
    console.log(num.value)
    convResult.value = parseInt(num.value) / 10959.20
})
sumBtn.addEventListener("click", function () {
    console.log(num.value)
    convResult.value = parseInt(num.value) * 10959.20
})

//calculator
let btnArray = document.getElementsByClassName("btn");

function initBtn() {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener('click', btnFunc);
    }
}

result = document.getElementById("result");

let btnFunc = function (event) {
    switch (event.target.value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            if (result.value[result.value.length - 1] != event.target.value) {
                result.value = result.value + event.target.value;
            }
            break;
        case "C":
            result.value = "";
            break;
        case "DEL":
            result.value = result.value.slice(0, -1)
            break;
        case "=":
            Calc();
            break;
        default:
            result.value = result.value + event.target.value;
    }
}

initBtn();

function Calc() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        console.log(err);
        if (err instanceof SyntaxError) {
            alert(err.message);
        }
    }
}


