function bai01() {
  let number = prompt("nhập vào 5 số");
  let numberarr = number.split(",");
  if (numberarr.length !== 5) {
    return alert("vui lòng nhập 5 số");
  }
  const sapxep = numberarr.sort((a, b) => b - a);
  for (let i = 0; i < sapxep.length; i++) {
    for (let j = i + 1; j < sapxep.length; j++) {
      if (sapxep[i] === sapxep[j]) {
        sapxep.splice(i, 2);
        j--;
      }
    }
  }
  console.log(sapxep[0]);
}

function bai02() {
  let number = prompt("Nhập vào chuỗi số:");
  let numberarr = number.split(",");
  const songuyento = timso(numberarr);
  console.log(songuyento);
  let sum = 0;
  for (i = 0; i < songuyento.length; i++) {
    sum += parseInt(songuyento[i]);
  }
  console.log(sum);
}
function timsonguyento(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function timso(arr) {
  return arr.filter((number) => timsonguyento(parseInt(number)));
}

function bai04() {
  let kytu = prompt("Nhập vào chuỗi số:");
  kytu = kytu
    .split("1")
    .join("")
    .split("2")
    .join("")
    .split("3")
    .join("")
    .split("4")
    .join("")
    .split("5")
    .join("")
    .split("6")
    .join("")
    .split("7")
    .join("")
    .split("8")
    .join("")
    .split("9")
    .join("");
  console.log(kytu);
}
function bai05() {
  const text = prompt("nhập vào 1 dòng chữ");
  let textarr = text.split(" ");
  let daonguoc = textarr.map((tu) => tu.split("").reverse().join(""));
  let ketqua = daonguoc.join(" ");
  console.log(ketqua);
}
