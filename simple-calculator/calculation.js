let num1 = null;
let num2 = null;
let operator = null;
let equalLastButtonPushed = false;

const buttons = document.querySelectorAll(".button.num");
const operations = document.querySelectorAll(".button.op");
const display = document.querySelector(".answer");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const percent = document.querySelector(".percent");
const toggle = document.querySelector(".neg");

toggle.addEventListener("click", () => {
    let number = display.textContent;
    
        if (number[0] === "-") {
            number = number.substring(1);
            if (num2 === null) {
                num1 = Number(number);

            }else {
                num2 = Number(number);
            }
            display.textContent = String(number);
        } else {
            number = "-" + number;
            if (num2 === null) {
                num1 = Number(number);

            }else {
                num2 = Number(number);
            }
            display.textContent = String(number);
        }
});


percent.addEventListener("click", () => {
    if (Number(display.textContent) !== 0) {
        if (num2 === null) {
            num1 = num1 / 100;
            if (String(num1).length > 15) {
                if (String(num1).includes(".")) {
                    let index = String(num1).indexOf(".");
                    if (index > 12) {
                        num1 = null;
                        num2 = null;
                        operator = null;
                        display.textContent = "Overflow ERR"
                    } else {
                        num1 = Number(num1.toFixed(5));
                        display.textContent = String(num1);
                    }
                } else {
                    num1 = null;
                    num2 = null;
                    operator = null;
                    display.textContent = "Overflow ERR"
                }
            } else {
                display.textContent = String(num1);
            }
        } else {
            num2 = num2 / 100;

            if (String(num2).length > 15) {
                if (String(num2).includes(".")) {
                    let index = String(num2).indexOf(".");
                    if (index > 12) {
                        num1 = null;
                        num2 = null;
                        operator = null;
                        display.textContent = "Overflow ERR"
                    } else {
                        num2 = Number(num2.toFixed(5));
                        display.textContent = String(num2);
                    }
                } else {
                    num1 = null;
                    num2 = null;
                    operator = null;
                    display.textContent = "Overflow ERR"
                }
            } else {
                display.textContent = String(num2);
            }
        }
    }
});

decimal.addEventListener("click", () => {
            if (!display.textContent.includes(".") && num1 === null) {
                display.textContent = "0.";
                num1 = Number("0.0");
            } else if (equalLastButtonPushed && operator == null && num2 == null) {
                display.textContent= "0.";
                num1 = Number("0.0");
            }else if(!display.textContent.includes(".") && display.textContent.length < 15 && num1 !== null && operator === null) {
                display.textContent = display.textContent + decimal.textContent;
                num1 = Number(display.textContent);
            } else if(operator !== null && num2 === null) {
                display.textContent = "0."
                num2 = Number("0.0");
            } else if (!display.textContent.includes(".") && display.textContent.length < 15 && num2 !== null) {
                display.textContent = display.textContent + decimal.textContent;
                num2 = Number(display.textContent);
            }
            equalLastButtonPushed = false;
    
});
//console.log(buttons.length);
clear.addEventListener("click", () => {
    equalLastButtonPushed = false;
    display.textContent = 0;
    num1 = null;
    num2 = null;
    operator = null;
});

for (let button of buttons) {
    
    button.addEventListener("click", () => {
        //console.log(num1);
            if (num1 === null) {
                display.textContent = button.textContent;
                num1 = Number(button.textContent);
            } else if (equalLastButtonPushed && operator == null && num2 == null) {
                display.textContent= button.textContent;
                num1 = Number(button.textContent);
            } else if(display.textContent.length < 15 && num1 !== null && operator === null) {
                display.textContent = display.textContent + button.textContent;
                num1 = Number(display.textContent);
            } else if(operator !== null && num2 === null) {
                display.textContent = button.textContent;
                num2 = Number(display.textContent);
            } else if (display.textContent.length < 15 && num2 !== null) {
                display.textContent = display.textContent + button.textContent;
                num2 = Number(display.textContent);
            }
            equalLastButtonPushed = false;
        
    });
}

for(let op of operations) {
    op.addEventListener("click", () => {
        
        equalLastButtonPushed = false;
        if (num1 !== null && num2 === null) {
            num1 = Number(display.textContent);
            operator = op.textContent;
        } else if (num1 !== null && num2 !== null) {
            console.log(num1);
            console.log(num2);
            console.log(operator);
            let result = operate(num1, num2, operator);
            if (String(result).length > 15) {
                if (String(result).includes(".")) {
                    let index = String(result).indexOf(".");
                    if (index > 12) {
                        num1 = null;
                        num2 = null;
                        operator = null;
                        display.textContent = "Overflow ERR"
                    } else {
                        num1 = Number(result.toFixed(5));
                        display.textContent = String(num1);
                    }
                } else {
                    num1 = null;
                    num2 = null;
                    operator = null;
                    display.textContent = "Overflow ERR"
                }
            } else {
                display.textContent = String(result);
                if (result !== "DivBy0ERR") {
                    operator = op.textContent;
                }
            }


            //num1 = result;
            
            
            console.log(num1);
            console.log(num2);
            console.log(operator);
            //num2 = null;
        }
    })
}

equal.addEventListener("click", () => {
    if (num2 !== null) {
        console.log(num1);
            console.log(num2);
            console.log(operator);
        let result = operate(num1, num2, operator);
        if (String(result).length > 15 ) {
            if (String(result).includes(".")) {
                let index = String(result).indexOf(".");
                if (index > 12) {
                    num1 = null;
                    num2 = null;
                    operator = null;
                    display.textContent = "Overflow ERR"
                } else {
                    num1 = Number(result.toFixed(5));
                    display.textContent = String(num1);
                }
            } else {
                num1 = null;
                num2 = null;
                operator = null;
                display.textContent = "Overflow ERR"
            }
        } else {
            display.textContent = String(result);
        }
       
        console.log(num1);
        console.log(num2);
        console.log(operator);
        equalLastButtonPushed = true;
        //num1 = result;
        //num2 = null;
    }
});


function operate(number1, number2, operation) {
   
    if (operation === '*') {
        num1 = number1 * number2
        operator = null;
        num2 = null;
        return num1;
    } else if ( operation === '+') {
        num1 = number1 + number2
        operator = null;
        num2 = null;
        return num1;
    } else if (operation === '-') {
        num1 = number1 - number2
        operator = null;
        num2 = null;
        return num1;
    } else if (operation === '/') {
        if(num2 == 0) {
            num1 = null;
            operator = null;
            num2 = null;
            result = "DivBy0ERR"
        } else {
            num1 = number1 / number2
            operator = null;
            num2 = null;
        return num1;
        }
        
    }
}