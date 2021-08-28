class Producto {
    constructor(id, marca, animal, precio) {
        this.id = id;
        this.marca = marca;
        this.animal = animal;
        this.precio = precio;
    }
}

let carritoID = document.getElementById("carrito")
let cards = document.getElementById("listaProductos")
let tablePrint = document.getElementById("table")
let total = document.getElementById("total")
let btnClear = document.getElementById("clear")

let carrito = [];

let productos = []

let producto1 = new Producto(1, "Royal Canin", "Perros", 2500);
let producto2 = new Producto(2, "Royal Canin", "Gatos", 2100);
let producto3 = new Producto(3, "Eukanuba", "Perros", 2450);
let producto4 = new Producto(4, "Nutrique", "Perros", 2400);
let producto5 = new Producto(5, "Nutrique", "Gatos", 2000);

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)

/*
let ObjToJSON = JSON.stringify(productos)
localStorage.setItem("productos", ObjToJSON)
*/

productos.forEach(e => {

    let div1 = document.createElement("div")
    div1.setAttribute("class", "card card-body text-center")

    //let div2 = document.createElement("div")
    //div2.setAttribute("class", "card-body")

    let h5 = document.createElement("h5")
    h5.setAttribute("class", "card-title")
    h5.textContent = `${e.marca} para ${e.animal}`
    div1.appendChild(h5)

    let p1 = document.createElement("p")
    p1.setAttribute("class", "card-text")
    p1.textContent = `${e.precio}`
    div1.appendChild(p1)

    let a = document.createElement("a")
    a.setAttribute("class", "btn btn-secondary")
    a.setAttribute("onclick", `añadirCarrito(${e.id})`)
    a.textContent = ("Comprar")
    div1.appendChild(a)

    cards.appendChild(div1)

})

//AÑADIR A CARRITO

const añadirCarrito = (idPorOnclick) => {
    const objectoIdentificado = productos.find(e => e.id == idPorOnclick)
    console.log(objectoIdentificado)

    if (JSON.parse(localStorage.getItem("carrito")) != null) {
        let carritoNew = JSON.parse(localStorage.getItem("carrito"))
        carritoNew.push(objectoIdentificado)

        localStorage.setItem("carrito", JSON.stringify(carritoNew))
        location.reload()
    } else {
        carrito.push(objectoIdentificado)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        location.reload()
    }
}


//IMPRIMIR CARRITO

const imprimirCarrito = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("carrito"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            let table = document.createElement("tr")
            table.setAttribute("class", "table-light")

            let td1 = document.createElement("td")
                //td1.setAttribute("class", " table-light")
            td1.textContent = `${e.marca}`
            table.appendChild(td1)

            let td2 = document.createElement("td")
                //td2.setAttribute("class", " table-light")
            td2.textContent = `${e.animal}`
            table.appendChild(td2)

            let td3 = document.createElement("td")
                //td3.setAttribute("class", " table-light")
            td3.textContent = `${e.precio}`
            table.appendChild(td3)

            tablePrint.appendChild(table)
        })

    } else {
        document.getElementById("err").textContent = "Todavia no has agregado nada al carrito"
    }
}

imprimirCarrito()


//PRECIO TOTAL

const precioTotal = () => {
    let dataToPrint = JSON.parse(localStorage.getItem("carrito"))

    let precioTotal = 0;

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {
            precioTotal = precioTotal + e.precio
            console.log(precioTotal);
        })

    } else {
        document.getElementById("total").textContent = 0
    }

    total.textContent = precioTotal
}

btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})


precioTotal()