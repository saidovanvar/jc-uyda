let max = document.querySelector("#app")
let colors = [
    {
        id: 1,
        bgColor: "#014E56",
        name: "Midnight Green",
        info: "HEX : #014E56 RGB : rgb(1, 78, 86) HSL : hsl(186°, 98%, 17%)"
    },
    {
        id: 2,
        bgColor: "#F67E7E",
        name: "Light Coral",
        info: "HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)"
    },
    {
        id: 3,
        bgColor: "#FFFFFF",
        name: "White",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    },

]
colors.forEach(col => {
    let box = document.createElement("div");
    box.innerHTML = `  <div>
            <div class="bg-[${col.bgColor}] max-w-[56px] h-[56px] rounded-full"></div>
            <p class="font-bold mt-[15px] text-sm text-[#002529] ">${col.name}</p>
            <p class="text-xs font-normal text-[#002529] mt-[4px] max-w-[129px]">${col.info }</p>
        </div>`
    max.appendChild(box)
})
let min = document.querySelector("#app2")
let coll = [
    {
        id: 4,
        bgColor: "#79C8C7",
        name: "Rapture Blue",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    },
    {
        id: 5,
        bgColor: "#2C6269",
        name: "Police Blue",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    },
    {
        id: 6,
        bgColor: "#004047",
        name: "Deep Jungle Green",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    },
    {
        id: 7,
        bgColor: "#012F34",
        name: "Sacramento State Green",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    },
    {
        id: 8,
        bgColor: "#002529",
        name: "Dark Green",
        info: "HEX : #FFFFFF RGB : rgb(255, 255, 255) HSL : hsl(0°, 0%, 100%)"
    }
]
coll.forEach(col => {
    let box = document.createElement("div");
    box.innerHTML = `  <div>
            <div class="bg-[${col.bgColor}] max-w-[56px] h-[56px] rounded-full"></div>
            <p class="font-bold mt-[15px] text-sm text-[#002529] ">${col.name}</p>
            <p class="text-xs font-normal text-[#002529] mt-[4px] max-w-[129px]">${col.info }</p>
        </div>`
    min.appendChild(box)
})