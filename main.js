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





































// ///////////////////////////////////////
//
//
// 1-masala
// function main(a , b) {
//     return a + b;
// }
//
// console.log(main(1,2,));

///////////////////////////////////
//
// 2-masala
// const a = (ism) => {
//   return `Salom, ${ism}`;
// }
// console.log(a("Anvar"));

/////////////////////////////////////////
// let a = prompt("1daan 100 bahoni kritin");
// if (a >= 90) {
//     console.log("A")
// }else if (a >= 89 || a >= 80) {
//     console.log("B")
// }else if (a >= 79 || a >=70) {
//     console.log("C")
// }else{
//     console.log("F")
// }

// ////////////////////////////////////////////
// let body = document.querySelector("body")
// let a =document.createElement('div');
// a.appendChild(body)
/////////////////////////////////////////////////////////////////
////////////////////////////
//
// let a = [1, 2, 3];
// a.splice(0, 2);
// console.log(a)

////////////////////////////////////

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = a.filter((c)=> c % 2 === 0);
// console.log(b)
// //////////////////////////////////////////
////////////////////////////////////////////////



// let number = [1, 2, 3];
//
// number.forEach(function(raqam) {
//   console.log(raqam);
// });

////////////////////////////////////////
//
// let a = document.querySelector('#img')
//
// a.addEventListener('click', () => {
//   console.log("salom dunyo");
// })

//////////////////////////////////////////
//
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// /////////////////////////////////////////////
// //
// let a =document.querySelector('#img');
// a.addEventListener('click', ()=>{
//     alert("Hello World!");
// })

// let input = document.querySelector(".input");
// let button = document.querySelector("#button");
// let div = document.createElement("div");
// let box = document.querySelector(".box");
//     button.addEventListener("click", () => {
//         console.log(input.value);
//         div.textContent = input.value;
//         console.log(box)
//         box.appendChild(div)
//     })
let a = prompt("son kriting")*1
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("Tasodifiy son:", getRandomNumber());
if (a===getRandomNumber()) {
    console.log("tug'ri")
}else{
    console.log("no tug'ri");
}