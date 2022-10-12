// Bài 1
// Kiểm tra a % b == 0

function bai1() {
    let a = prompt("Nhập số đầu tiên: a ");
    let b = prompt("Nhập số thứ hai: b");
    let result = a % b;

    if (result == 0) {
        alert("a chia hết cho b");
    } else {
        alert("a không chia hết cho b");

    }
}
// Bài 2
// Tuổi vào học lớp 10

function bai2() {
    let age = prompt("Nhập tuổi của học sinh:");
    let result = "Chưa đủ tuổi học lớp 10";

    if (age <0) {
        alert("Nhập lại tuổi của học sinh!");
    } else if ( age >= 16) {
        result= "Đủ tuổi học lớp 10";
    }
    document.getElementById('resultBai2').innerHTML = "Kết quả kiểm tra: " + result;
}

// Bài 3
// So sánh số nguyên bất kì với 0
//check lại công thức
function bai3() {
    // let checkInteger = false;
    // let number = null;
    // while (checkInteger === false) {
    //     number = prompt("Nhập 1 số nguyên:");
    //     checkInteger = Number.isInteger(number);
    //     console.log(checkInteger);
    // }
    let number = prompt("Nhập 1 số nguyên:");
        number = parseInt(number);
    let result = null;
    if (number < 0) {
        result = "Số nguyên âm";
    } else if (number > 0) {
        result = "Số nguyên dương";
    } else {
        result = "Số 0"
    }

    document.getElementById('resultBai3').innerHTML = "Kết quả kiểm tra: " + result;
}
//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
function bai4() {
    let a = prompt("Nhập số a:");
    let b = prompt("Nhập số b:");
    let c = prompt("Nhập số c:");
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
    let max = a;
    if (a > b && a> c) {
    } else if (b>c) {
        max = b;
    } else {
        max = c;
    }
    document.getElementById('resultBai4').innerHTML = "Max là " + max;
}

//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
function bai5() {
    let a = parseInt(prompt("Nhập điểm bài kiểm tra:"));
    let b = parseInt(prompt("Nhập điểm thi giữa kì:"));
    let c = parseInt(prompt("Nhập thi cuối kì:"));
    let result = a*0.2 + b*0.3 + c*0.5;
    let ketQua = null;
    if (result > 8.0) {
        ketQua = "Giỏi";
    } else if (result > 6.5) {
        ketQua = "Khá";
    } else if (result > 5) {
        ketQua = "Trung bình";
    }
    else {
        ketQua = "Yếu";
    }
    document.getElementById('resultBai5').innerHTML = "Xếp hạng: " + ketQua;
}
//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
function bai6() {
    let a = parseInt(prompt("Nhập doanh số bán hàng, đơn vị VND:"));
    let result = null;
    if (a >= 500000000) {
        result = '30%';
    } else if (a >= 200000000) {
        result = '10%';
    } else if (a >= 100000000) {
        result = '5%';
    }else if (a >= 50000000) {
        result = '3%';
    } else {
        result = '1%'
    }
    document.getElementById('resultBai6').innerHTML = "Hoa hồng: " + result;
}