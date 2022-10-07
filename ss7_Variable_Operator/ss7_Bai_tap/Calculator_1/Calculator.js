function Addition(){
let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;

let value1 = parseInt(num1);
let value2 = parseInt(num2);

let result= value1 + value2;

document.getElementById("Result").innerHTML= "The result is:"+ result;

}
function Subtraction(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    let value1 = parseInt(num1);
    let value2 = parseInt(num2);

    let result= value1 - value2;

    document.getElementById("Result").innerHTML= "The result is:"+ result;

}
function Multiplication(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    let value1 = parseInt(num1);
    let value2 = parseInt(num2);

    let result= value1 * value2;

    document.getElementById("Result").innerHTML= "The result is:"+ result;

}
function Devision(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    let value1 = parseInt(num1);
    let value2 = parseInt(num2);
    let result= value1 / value2;

    document.getElementById("Result").innerHTML= "The result is:"+ result;

}