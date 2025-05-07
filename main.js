// let a = 10
// let b = 100
// let c = 200
// if (a >= b <= c) {
//     console.log("200 katta")
// }else ( console.log("teng"))

////////////////////////

// let yosh = prompt("Yoshingizni kiriting:");
//
// if (yosh >= 0 && yosh <= 12) {
//     alert("Bola");
// } else if (yosh >= 13 && yosh <= 19) {
//     alert("O'smir");
// } else if (yosh >= 20 && yosh <= 59) {
//     alert("Katta");
// } else if (yosh >= 60) {
//     alert("Qariya");
// } else {
//     alert("Noto‘g‘ri yosh kiritildi.");
// }




///////////////////////////


// for (let i = 0; i < "salom".length; i++) {
//     console.log("salom"[i]);
// }


//////////////////////////////////////////////////////////
// let son = prompt("Son kiriting:");
// let yigindi = 0;
//
// for (let i = 0; i < son.length; i++) {
//     yigindi += parseInt(son[i]);
// }
//
// alert("Yig'indisi: " + yigindi);



////////////////////////////////////////////////
let n = prompt("Son kiriting:");
n = parseInt(n);


let juft = 0;
let toq = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        juft++;
    } else {
        toq++;
    }
}

console.log(`Juft sonlar : ${juft}`);
console.log(`Toq sonlar  : ${toq}`);