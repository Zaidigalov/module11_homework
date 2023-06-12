//ЗАДАНИЕ 1
const arr = [1, 2, 3, 4, 5, "d", 6, 0, 0];
let even = 0;
let odd = 0;
let nullElem = 0;

function getQuantityElements() {
  arr.forEach(function (item, index, array) {
    if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (item === 0) {
      nullElem++;
      even--;
    }
  });

  console.log("коилчество четных чисел в массиве - " + even);
  console.log("коилчество нечетных чисел в массиве - " + odd);
  console.log("коилчество нулевых элементов в массиве - " + nullElem);
}

getQuantityElements();
