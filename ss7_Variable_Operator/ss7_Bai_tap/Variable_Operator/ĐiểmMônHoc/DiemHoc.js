let inputPhysics;
let inputChemistry;
let inputBiology;


inputPhysics= prompt("Enter Physics score");
inputChemistry= prompt("Enter Chemistry score");
inputBiology=   prompt("Enter Biology score");

let Physics=parseInt(inputPhysics);
let Chemistry=parseInt(inputChemistry);
let Biology=parseInt(inputBiology);

let total= Physics+Chemistry+Biology
let average= total/3

document.write("The total score is:" +total);
document.write("");
document.write("The average score is:" +average);
