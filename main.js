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
// let a = prompt("1dan boshlen nechchigach busin kg")*1;
// let b = prompt("10gacha busin kg")*1;
// function candyPrices(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(`${i} kg = ${a, b * i}`);
//     }
// }
// candyPrices(a, b);
//
// let a = ["adham", "Anvar", "aziz","Anvar"]
// // a.push("Asil")
// // a.pop()
// // a.shift()
// a.unshift("men Nodir akani shogirti man")
// a.forEach(
//     name => console.log(name+" yaxshi bola")
// )
// let b = a.map(
//     name => {
//         return name + " yaxshi bola" + name
//     }
//
// )
// console.log(b)
//  let b = a.filter(
//     name => {
//         return name === "Anvar"
//     }
// )
// console.log(b)

// let b = a.find(
//     name =>
//     {
//         return name === "Anvar"
//     }
// )
// console.log(b)
// console.log(a.includes("adham"))

// // 1////////////
// let a = []
// a.push(1 , 2 ,3 ,4 , 5)
// console.log(a)

// // 2////////////
// let a = [prompt("kitoblar")]
// a.push("Yangi kitob")
// console.log(a)

// // 3////////////
// let a = [prompt("Anvar / yoz ")]
// a.push(prompt("Adhamni  ukasi / yoz"))
// console.log(a)

// // 4////////////
// let a = ["Banan " , "Olma", "Nok", "Tarvuz"]
// a.pop()
// console.log(a)

// // //5/////////
// let a = ["Banan " , "Olma", "Nok", "Tarvuz"]
// a.pop()
// a.pop()
// console.log(a)


// // //6/////////
// let a = ["Anvar"]
// a.pop()
// console.log(a)

// //7/////////
// let a = ["Adham", "Anvar", "aziz",]
// a.shift()
// console.log(a)

// //8/////////
// let a = [1 , 2 , 3 , 4, 5];
// a.shift()
// console.log(a);

// //9/////////
// let a = [1]
// a.shift()
// console.log(a)

// //10/////////
// let a = ["Anvar"]
// a.unshift("Adham", "Aziz", "Asil")
// console.log(a)

// //11/////////
// let a = ["Anvar", "Adham", "Aziz", "Asil"]
// a.unshift("todo")
// console.log(a)

// //12/////////
// let a = ["Anvar", "Adham", "Aziz", "Asil"]
// a.unshift("jad ahsda sdahc ashf adafba hbzrg zsdhgbjs sgbskeuve shejsbg janvar haasbd")
// console.log(a)

// //13/////////
// let a = [1,2,3,4,5,6,7,8]
//  a.forEach(e => console.log(e ** 2))

// //  //15/////////
// // let a = ["Anvar", "Adham", "Aziz", "Asil"]
// // a.forEach(e => console.log("Salom " +e))

//  //16/////////
// let a = [1,2,3,4,5,6,7]
// let b = a.map(name => {
//     return name ** 3
// })
// console.log(b)


// //  //18/////////
// let a = ["Anvar", "Adham"]
// let b = a.map(name => name.toUpperCase())
// console.log(b)

//  //19/////////
// let a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let b = a.filter(c => {
//     return c % 2 === 0
// })
// console.log(b)

//  //20/////////
// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let b = a.filter(e =>{
//     return e >= 18
// })
// console.log(b)

//  //22/////////
// let a =[101, 100]
// let b = a.find(e => {
//     return e <= 100
// })
// console.log(b)


//  //23/////////
// let a =["Anvar", "ali", "ali"]
// let b = a.find(e => {
//     return e === "ali"
// })
// console.log(b)

// //  //24/////////
// let a = [98,99,100,101,102]
// let b = a.find(w => {
//     return w > 100
// })
// console.log(b)

// // 25///////////////
// let a = ["Vatanga tuyg'usi ", "Huquq kitobi"]
// console.log(a.includes("JavaScript"))


// //26///////////////
// let a = ["gilos", "nok", "Tarvuz"]
// console.log(a.includes("gilos"))


//27///////////////
// let a = [1, 2, 3]
// console.log(a.includes(2))











/////////////////////////////////////////////////////////////////////

// 28/////////////////////
// let a = [1,2,3,4,5]
// console.log(a.length)

// 29/////////////////////
// let a = []
// console.log(a.length)

// 30/////////////////////
// let a = ["a","b","c","d","e","f"];
// console.log(a.length);

// 31/////////////////////
// let a = [1,2]
// let b = [3,4]
// console.log(a.concat(b))

// 32/////////////////////
// let a = ["a", "b"]
// let b = ["a", "c"]
// console.log(a.concat(b))

// 33/////////////////////
// let a = []
// let b = [10,20,30,40,]
// console.log(a.concat(b))

// 34/////////////////////
// let a = [10, 20, 30, 40, 50]
// console.log(a.slice(1,4))

// 35/////////////////////
// let a = ["a","b","c","d","e"];
// console.log(a.slice(3,5));

// 36/////////////////////
// let a = [1, 2, 3, 4, 5, 6]
// console.log(a.slice(0,4))

// 37/////////////////////
// let a = [1, 2, 3,4];
// a.splice(2, 1, 5,)
// console.log(a)

// 38/////////////////////
// let a = ["a","b","c","d"];
// a.splice(1, 2);
// console.log(a)

// 39/////////////////////
// let a = [10,20,30]
// a.splice(1, 1 , 25)
// console.log(a)

// 40/////////////////////
// let a = [1,2,3,4,5]
// a.fill(0, 0, 5)
// console.log(a)

// // 41/////////////////////
// let a = [1, 2, 3,4,5]
// a.fill(99, 1, 2)
// console.log(a)

// 42/////////////////////
// let a = [1,2,3,4,5,6,7]
// console.log(a.indexOf(6))

// 43/////////////////////
// let a = ["x", "y", "z"];
// console.log(a.indexOf("a"));

// 44/////////////////////
// let a = [1, 2, 3,2,1];
// console.log(a.indexOf(2));


// 45/////////////////////
// let a = [1, 2, 3]
// console.log(a.toString())


// 47/////////////////////
// let a = [true, false]
// console.log(a.toString())


// // 48/////////////////////
// let a = [1,3,2]
// console.log(a.sort())

// 49/////////////////////
// let a = [100,2,20]
// console.log(a.sort((a, b) => a - b))

// 50/////////////////////
// let a = ["A","B","C"]
// console.log(a.join(" , "))

// // 51/////////////////////
// let a = [2025, 4, 14]
// console.log(a.join("-"))
