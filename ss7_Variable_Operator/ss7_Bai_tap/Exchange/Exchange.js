function Exchange(){
let amount=document.getElementById("amount").value;
let from=document.getElementById("from").value;
let to=document.getElementById("to").value;
let Result;

if ( from == "VND" && to == "USD" ){
    Result = "The result is :" + (amount/23000) + "VND";
}
    else if ( from == "USD" && to == "VND"){
    Result = "The result is :" + (amount*23000) + "VND";
}
    else if ( from =="VND") {
    "The result is :" + amount + "VND";
}
    else {
    "The result is :" + amount + "USD";
}

    document.getElementById("Result").innerHTML=Result;
}
