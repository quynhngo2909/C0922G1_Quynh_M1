

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.

function bai5() {
    let a = parseInt(document.getElementById('canh1').value);
    let b = parseInt(document.getElementById('canh2').value);
    let S = (a * b) / 2;
    document.getElementById('resultBai5').innerHTML
        = "Diện tích tam giác: " + S + " cm<sup>2</sup>.";
}

