function daysMonth() {
    let month = document.getElementById('month').value;
        month = parseInt(month);
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById('days').innerHTML = "Số ngày trong tháng " + month + " là: 31 ngày.";
                break;
            case 2:
                document.getElementById('days').innerHTML = "Số ngày trong tháng " + month + " là: 28 hoặc 29 ngày.";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('days').innerText = "Số ngày trong tháng " + month + " là: 30 ngày.";
                break;
            default:
                document.getElementById('days').innerText = "Vui lòng nhập lại tháng";
                break;
        }

}