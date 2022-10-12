
// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
function bai4() {
    let dai = parseInt(document.getElementById('dai').value);
    let rong = parseInt(document.getElementById('rong').value);
    let S = dai * rong;
    document.getElementById('resultBai4').innerHTML
        = "Diện tích hình chữ nhật: " + S + " cm<sup>2</sup>.";
}
