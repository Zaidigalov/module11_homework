//ЗАДАНИЕ 4
function show(a, d) {
  let i = setInterval(function () {
    console.log(1 + a++);
    if (a > d - 2) clearInterval(i);
  }, 1000);
}

show(1, 5);
