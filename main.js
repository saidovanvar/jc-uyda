// 1-masala
// function main(num) {
//     if (num > 0) {
//         num += 1;
//     }
//     console.log(num);
// }
// main(5)
// main(-5)

// 2-masala
// function main(a) {
//     if (a > 0) {
//         a += 1;
//     } else {
//         a -= 2;
//     }
//     console.log(a);
// }
// main(5)
// main(-5)

// 3-masala
// function main(b) {
//     if (b > 0) {
//         b += 1;
//     } else if (b < 0) {
//         b -= 2;
//     } else {
//         b = 10;
//     }
//     console.log(b);
// }
// main(4);
// main(-2);
// main(0);

// 4-masala
// function main(a, b, c) {
//     let d = 0;
//     if (a > 0) d++;
//     if (b > 0) d++;
//     if (c > 0) d++;
//
//     console.log(d);
// }
// main(3, -1, 7);
// main(-5, -2, -8);
// main(1, 2, 3);

// 5-masala
// function main(a, b, c) {
//     let d = 0;
//     let e = 0;
//     if (a < 0) e++;
//     if (b < 0) e++;
//     if (c < 0) e++;
//     if (a > 0) d++;
//     if (b > 0) d++;
//     if (c > 0) d++;
//
//     console.log(`${d} musbat${e} manfiy`);
// }
// main(3, -1, 7);
// main(-5, -2, -8);
// main(1, 2, 3);

// For1: k sonini n marta chiqarish
// let k = prompt("k sonini kiriting");
// let n = prompt("n sonini kiriting");
// function repeatK(k, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(n*k);
//     }
// }
// repeatK(k, n);



// For2: a dan b gacha bo'lgan butun sonlarni chiqarish
// let a = prompt("k sonini kiriting");
// let b = prompt("n sonini kiriting");
// function printRange(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }
// }
// printRange(a ,b);


// For3: a dan b gacha bo'lgan butun sonlarni kamayish tartibida chiqarish
// let a = prompt("k sonini kiriting")*1;
// let b = prompt("n sonini kiriting")*1;
// function printRangeDescending(a, b) {
//     for (let i = b; i >= a; i--) {
//         console.log(i);
//     }
// }
// printRangeDescending(a ,b);


let a = prompt("1dan boshlen nechchigach busin kg")*1;
let b = prompt("10gacha busin kg")*1;
function candyPrices(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(`${i} kg = ${a, b * i}`);
    }
}
candyPrices(a, b);