// let a = 1
// let b = 2
// let c = a
// a=b
// b=c
// console.log("a",a)
// console.log("b",b)

// let a = prompt("0 dan 100 gacha");
// for (let i = 0; i < a.length; i++) {
//     if (a>=90) {
//         alert("A");
//     }else if(a>=80){
//         alert("B");
//     }else if(a>=70){
//         alert("C");
//     }else if(a>=60){
//         alert("D");
//     }else{
//         alert("E");
//     }
// }


// let a = prompt("son kriting");
// alert(a*2);

// let a = [prompt("son kriting")]
// a.forEach((item) => {
//     if (item % 2 === 0) {
//         alert(item)
//     }
// })


// let a = "salom dunyo"
// console.log(a.reverse(a))
let box = document.querySelector("#box")
fetch(`https://effective-mobile.duckdns.org/api/ads/`)
.then(response => response.json()).then(data => {
    console.log(data)
    name(data)
})
function name (name) {
    name.forEach((item) => {
        console.log(item)
        let list = document.createElement("li")
        list.innerHTML = `
        <p>${item.id}</p>
        <p>${item.user}</p>
        `
    })
}
