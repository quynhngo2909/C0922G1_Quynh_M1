let view = document.getElementById('view');
console.log(1)

function inputValue(a) {
    view.value += a;
    console.log(view);
}


function xoa() {
    view.value = "";
}

function result() {
    let result = eval(view.value);
    view.value = result;
}