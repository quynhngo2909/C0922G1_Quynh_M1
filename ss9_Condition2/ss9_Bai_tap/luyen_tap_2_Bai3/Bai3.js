// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
function bai3() {
    let a = parseInt(document.getElementById('canhA').value);
    // a = parseInt(a);
    let S = Math.pow(a, 2);
    console.log(S);
    document.getElementById('resultBai3').innerHTML
        = "Diên tích hình vuông: " + S + " cm<sup>2</sup>.";
}
