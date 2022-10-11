// Bài 10: Viết chương trình tính giá điện.
function bai10() {
    let group = document.getElementById('group').value;
    let sokWh = +document.getElementById('chuDien').value;
    let tienDien = null;


    switch (group) {
        case 'group2':
            console.log(group);
            tienDien = sokWh * 2.461;
            break;
        case 'group1':
            console.log(group);
            console.log(sokWh);
            console.log(typeof sokWh)
            if (sokWh < 0) {
                alert('Số chữ điện nhỏ hơn 0. Nhập lại số chữ điện!');
            } else if (sokWh < 101) {
                tienDien = sokWh * 1.743;
            } else if (sokWh < 201) {
                tienDien = sokWh * 2.014;
            } else if (sokWh < 301) {
                tienDien = sokWh * 2.536;
            } else if (sokWh < 401) {
                tienDien = sokWh * 2.834;
            } else {
                tienDien = sokWh * 2.927;
            }
            break;
        default:
            break;

    }
    document.getElementById('resultBai10').innerHTML = "Sô tiền điện là: " + tienDien + " đồng."
}

// Bài 11: Viết chương trình tính thuế thu nhập cá nhân
function bai11() {
    let income = +document.getElementById('income').value;
    let thueTNCH = null;
    if (income <= 0) {
        alert("Không có thu nhập/Thu nhập âm. Nhập lại thu nhập cá nhân!")
    } else if (income <= 5000000) {
        thueTNCH = income*5/100
    }else if (income <= 10000000) {
        thueTNCH = income*10/100 - 250000;
    }else if (income <= 18000000) {
        thueTNCH = income*15/100 - 750000;
    }else if (income <= 32000000) {
        thueTNCH = income*20/100 - 1650000;
    }else if (income <= 52000000) {
        thueTNCH = income*25/100 - 3250000;
    }else if (income <= 80000000) {
        thueTNCH = income*30/100 - 5850000;
    }else {
        thueTNCH = income*35/100 - 9850000;
    }
    document.getElementById('resultBai11').innerHTML = "Thuế TNCN : " + thueTNCH + " đồng";
}

// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

function bai12() {
    let P = +document.getElementById('money').value;
    let n = +document.getElementById('month').value;
    let i = +document.getElementById('interect').value/100;
    let A = null;

    if (P<=0) {
        alert('Nhập số tiền cho vay!');
    }

    if (n<=0) {
        alert('Nhập số tháng vay!');
    }
    A = (P * Math.pow((1+i),n)).toFixed(2);

    document.getElementById('resultBai12').innerText = " Lãi là : " + A + " đồng.";
}