
class Alimento {
    constructor(marca, animal, precio){
    this.marca = marca;
    this.animal = animal;
    this.precio = precio;
}
}


const productos = []

const alimento1 = new Alimento("Royal Canin", "Perros", 2500);
const alimento2 = new Alimento("Royal Canin", "Gatos", 2100);
const alimento3 = new Alimento("Eukanuba", "Perros", 2450);
const alimento4 = new Alimento("Nutrique", "Perros", 2400);
const alimento5 = new Alimento("Nutrique", "Gatos", 2000);

productos.push(alimento1)
productos.push(alimento2)
productos.push(alimento3)
productos.push(alimento4)
productos.push(alimento5)

let ObjToJSON = JSON.stringify(productos)
localStorage.setItem("productos", ObjToJSON)

let selector = document.getElementById("testImprimir")

productos.forEach(e => {

    let div1 = document.createElement("div")
    div1.setAttribute("class", "card card-body text-center")
    
    //let div2 = document.createElement("div")
    //div2.setAttribute("card-body")

    let h5 = document.createElement("h5")
    //h5.textContent = e.marca
    h5.setAttribute("class", "card-title")
    h5.textContent = `${e.marca}`
    div1.appendChild(h5)

    let h6 = document.createElement("h6")
    h6.setAttribute("class", "card-subtitle text-muted")
    h6.textContent = `${e.animal}`
    div1.appendChild(h6)

    let p1 = document.createElement("p")
    p1.setAttribute("class", "card-text")
    p1.textContent = `${e.precio}`
    div1.appendChild(p1)

    div1.appendChild(h5)
    div1.appendChild(h6)
    div1.appendChild(p1)

    selector.appendChild(div1)

})


let carrito=[];


let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")


const saveData = () => {

    let marca = document.getElementById("marca").value
    let animal = document.getElementById("animal").value
    let precio = document.getElementById("precio").value

    if (JSON.parse(localStorage.getItem("carrito") != null)) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        let alimento = new Alimento (marca, animal, precio)
        carrito.push(alimento) 
        localStorage.setItem("carrito", JSON.stringify(carrito))

    }else{
        let alimento = new Alimento (marca, animal, precio)
        carrito.push(alimento)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

form.addEventListener("submit", saveData)

const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("carrito"))

    
    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            let table = document.createElement("tr")
            //table.setAttribute("class", "table-light")

            let td1 = document.createElement("td")
            td1.setAttribute("class", " table-light")
            td1.textContent = `${e.marca}`
            table.appendChild(td1)

            let td2 = document.createElement("td")
            td2.setAttribute("class", " table-light")
            td2.textContent = `${e.animal}`
            table.appendChild(td2)

            let td3 = document.createElement("td")
            td3.setAttribute("class", " table-light")
            td3.textContent = `${e.precio}`
            table.appendChild(td3)

            tablePrint.appendChild(table)
        })


    } else {
        document.getElementById("err").textContent = "Todavia no has agregado nada al carrito"
    }


}

form.addEventListener("submit", saveData)
btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})


printData()