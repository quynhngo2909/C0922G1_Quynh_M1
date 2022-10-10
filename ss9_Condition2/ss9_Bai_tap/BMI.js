function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let BMI = weight/Math.pow(height,2);
        BMI = BMI.toFixed(1)
    let result;
    if (BMI < 18.5) {
        result = "Underweight";
    } else if(BMI < 25.0) {
        result = "Normal";
    } else if (BMI < 30.0) {
        result = "Overweight";

    } else {
        result = "Obese";
    }

    document.getElementById('result').innerHTML = "BMI = " + BMI +".Kết quả: " + result;
}