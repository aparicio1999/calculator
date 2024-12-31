function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let op1,op2,OP;
let DOT=0;
let ANS;

let display2 = document.querySelector("#second-display");
let display1 = document.querySelector("#main-display");
let displayop = document.querySelector("#display-operator");

function operate(a,b,operator) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "x":
            return multiply(a,b);
            break;
        case "%":
            return divide(a,b);
            break;
    }
} 

let container = document.querySelector("#container");
container.addEventListener("click", eListener);

function eListener(e) {
    switch (e.target.id) {
        case "one":
            display1.textContent += "1";
            break;
        case "two":
            display1.textContent += "2";
            break;
        case "three":
            display1.textContent += "3";
            break;
        case "four":
            display1.textContent += "4";
            break;
        case "five":
            display1.textContent += "5";
            break;
        case "six":
            display1.textContent += "6";
            break;
        case "seven":
            display1.textContent += "7";
            break;
        case "eight":
            display1.textContent += "8";
            break;
        case "nine":
            display1.textContent += "9";
            break;
        case "zero":
            if (!(display1.textContent) || +display1.textContent !== 0) {
                display1.textContent += "0";
            }
            break;
        case "dot":
            if (DOT==0 && display1.textContent) {
                display1.textContent += ".";
                DOT=1;
            }
            break;
        case "add":
            if (!display2.textContent && display1.textContent) {
                display2.textContent = display1.textContent;
                display1.textContent = "";
                displayop.textContent = "+";
                DOT = 0;
            }
            break;
        case "subtract":
            if (!display2.textContent && display1.textContent) {
                display2.textContent = display1.textContent;
                display1.textContent = "";
                displayop.textContent = "-";
                DOT = 0;
            }
            break;
        case "multiply":
            if (!display2.textContent && display1.textContent) {
                display2.textContent = display1.textContent;
                display1.textContent = "";
                displayop.textContent = "x";
                DOT = 0;
            }
            break;
        case "divide":
            if (!display2.textContent && display1.textContent) {
                display2.textContent = display1.textContent;
                display1.textContent = "";
                displayop.textContent = "%";
                DOT = 0;
            }
            break;
        case "del":
            if (display1.textContent) {
                if (display1.textContent[display1.textContent.length-1] === ".") {
                    DOT = 0;
                }
                display1.textContent = display1.textContent.slice(0,-1);
            }
            break;
        case "ac":
            display1.textContent = "";
            display2.textContent = "";
            displayop.textContent = "";
            DOT = 0;
            break;
        case "equal":
            if (display1.textContent && display2.textContent && displayop.textContent) {
                display1.textContent = (Math.floor(operate(Number(display2.textContent), Number(display1.textContent), displayop.textContent)*100000)/100000).toString();
                display2.textContent = "";
                displayop.textContent = "";
            }
            break;
        case "negative":
            if (display1.textContent) {
                if (display1.textContent[0] === "-") {
                    display1.textContent = display1.textContent.slice(1);
                } else {
                    display1.textContent = "-" + display1.textContent;
                }
            }
    }
}