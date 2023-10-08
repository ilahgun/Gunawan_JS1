// if, else, nested if
let waktu = new Date().getHours();
let ucapkan;
if (waktu < 10) {
  ucapkan = "Selamat pagi";
} else if (waktu < 20) {
  ucapkan = "Selamat siang";
} else {
  ucapkan = "Selamat malam";
}

console.log(ucapkan);

let x = 10;

if (x === 0) {
  console.log("Tidak positif atau negatif!");
} else if (x > 0) {
  if (x < 10) {
    console.log("Bilangan positif satu digit!");
  } else {
    console.log("Lebih dari satu digit bilangan positif!");
  }
} else {
  console.log("Angka negatif!");
}

// switch case
let hewan = "anjing";

switch (hewan) {
  case "kadal":
    console.log("aku seekor kadal");
    break;
  case "kuda":
    console.log("aku seekor kuda");
    break;
  case "gajah":
    console.log("aku seekor gajah");
    break;
  case "anjing":
    console.log("aku anjing");
    break;
  case "babi":
    console.log("aku babi");
    break;
  default:
    console.log("gua bukan hewan");
    break;
}

// for statement
let first_num = 1;
let last_num = 1000;

let nilai = "";
for (let i = first_num; i <= last_num; i++) {
  nilai += String(i);
}
console.log(nilai[123]);

// while, do while
let y = 0;
while (y < 4) {
  console.log(y);
  y++;
}

let keluaran = "";
let j = 0;

do {
  j = j + 1;
  keluaran = keluaran + j;
} while (j < 5);

console.log(keluaran);

// function
function checkAsessment(n) {
  var result = 0;
  for (let i = 0; i * i < n; i++) {
    result += i;
  }
  return result;
}
console.log(checkAsessment(10));
