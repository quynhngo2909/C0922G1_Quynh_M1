// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
function bai3() {
    let a = parseInt(document.getElementById('canhA').value);
    // a = parseInt(a);
    let S = Math.pow(a, 2);
    console.log(S);
    document.getElementById('resultBai3').innerHTML
        = "Diên tích hình vuông: " + S + " cm<sup>2</sup>.";
}

// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
function bai4() {
    let dai = parseInt(document.getElementById('dai').value);
    let rong = parseInt(document.getElementById('rong').value);
    let S = dai * rong;
    document.getElementById('resultBai4').innerHTML
        = "Diện tích hình chữ nhật: " + S + " cm<sup>2</sup>.";
}

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.

function bai5() {
    let a = parseInt(document.getElementById('canh1').value);
    let b = parseInt(document.getElementById('canh2').value);
    let S = (a * b) / 2;
    document.getElementById('resultBai5').innerHTML
        = "Diện tích tam giác: " + S + " cm<sup>2</sup>.";
}

//Bài 6: Giải phương trình bậc 1: ax + b = 0
function bai6() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    console.log(typeof a);
    let resultX = null;
    switch (a) {
        case 0:
            switch (b) {
                case 0:
                    resultX = "Vô số nghiệm";
                    break;
                default:
                    resultX = "Vô nghiệm";
                    break;
            }
            break;
        default:
            resultX = -b / a;
            break;
    }
    document.getElementById('resultBai6').innerHTML = "Kết quả: " + "x = " + resultX;
}

// Bài 7: Giải phương trình bậc 2: ax2 + bx + c = 0
function bai7() {
    let a = +document.getElementById('a2').value;
    let b = +document.getElementById('b2').value;
    let c = +document.getElementById('c2').value;
    let resultX = null;
    let delta = Math.pow(b, 2) - 4 * a * c;
    console.log(typeof a);

    console.log(typeof b);
    console.log(typeof delta);
    switch (a) {
        case 0:
            switch (b) {
                case 0:
                    switch (c) {
                        case 0:
                            resultX = "Vô số nghiệm";
                            break;
                        default:
                            resultX = "Vô nghiệm";
                            break;
                    }
                    break;
                default:
                    resultX = -c / b;
                    break;
            }
            break;
        default:
            if (delta > 0) {
                resultX = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2) + " và " + ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
                console.log(resultX);
                console.log(typeof resultX);
            } else if (delta == 0) {
                resultX = (-b) / (2 * a);
            } else {
                resultX = "Vô nghiệm";
            }

            break;
    }
    document.getElementById('resultBai7').innerHTML = "Kết quả: " + "x = " + resultX;
}

//Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
function bai8() {
    let tuoi = +document.getElementById('tuoi').value;
    result = "không đúng";

    if (tuoi < 120 && tuoi > 0) {
        result = "Đúng";
    }
    document.getElementById('resultBai8').innerHTML = "Kết quả: " + result;
}

//Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
function bai9() {
    let a = +document.getElementById('a9').value;
        b = +document.getElementById('b9').value;
        c = +document.getElementById('c9').value;
        ab = a + b;
        ac = a + c;
        bc = b + c;
        result = "Không phải là 3 cạnh tam giác";

    if (a <= 0 || b <= 0 || c <= 0) {
    } else if (ab <= c || ac <= b || bc <= a) {
    } else {
        result = "Là 3 cạnh tam giác"
    }
    document.getElementById('resultBai9').innerHTML = result;
}