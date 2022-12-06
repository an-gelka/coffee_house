btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
const products = document.querySelectorAll(".item");
inputSurname = document.querySelector('[name="surname"]');
inputName = document.querySelector('[name="name"]');



function totalSumm() {
    sum = 0;
    for (const product of products) {
        let checkboxElement = product.querySelector('input[type="checkbox"]');
        let amountElement = product.querySelector('input[type="number"]');
        if (checkboxElement.checked) {
        if (amountElement.value <= 0 || amountElement.value > 100) {
            amountElement.value = 1;
        }
        sum +=
            parseInt(checkboxElement.dataset.price) * parseInt(amountElement.value);
        } else {
        amountElement.value = 0;
        }
        resultElement.textContent = sum;
    }
    }
btnElement.addEventListener("click" , function(){
    alert(`Заказчик: ${inputSurname.value} ${inputName.value}
Итого: ${resultElement.textContent} р.`)
})







