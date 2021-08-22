
class Alimento {
    constructor(tipoAlimento, precio){
    this.tipoAlimento = tipoAlimento;
    this.precio = precio;

}
}
/*
const alimento1 = new alimento("Royal Canin para perros", 2500);
const alimento2 = new alimento("Royal Canin para gatos", 2100);
const alimento3 = new alimento("Eukanuba para perros", 2450);
const alimento4 = new alimento("Nutrique para perros", 2400);
const alimento5 = new alimento("Nutrique para gatos", 2000);
*/

let carrito=[];


let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")


const saveData = () => {

    let tipoAlimento = document.getElementById("tipoAlimento").value
    
    if (JSON.parse(localStorage.getItem("carrito") != null)) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        let alimento = new Alimento (tipoAlimento)
        carrito.push(alimento) 
        localStorage.setItem("carrito", JSON.stringify(carrito))

    }else{
        let alimento = new Alimento (tipoAlimento)
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

            let th1 = document.createElement("th")
            th1.setAttribute("class", "col-2")
            th1.textContent = `${e.tipoAlimento}`
            table.appendChild(th1)

            let th2 = document.createElement("th")
            th2.setAttribute("class", "col-2")
            th2.textContent = `${e.precio}`
            table.appendChild(th2)

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