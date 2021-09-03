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
let tablaPrint = document.getElementById("tabla")
let total = document.getElementById("total")
let btnClear = document.getElementById("clear")
    //let btnComprar = document.getElementById("comprar")

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


//ESTO LO ESTOY AGREGANDO PARA PROBAR EL DELETE
let ObjToJSON = JSON.stringify(productos)
localStorage.setItem("productos", ObjToJSON)


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
    p1.textContent = `$${e.precio}`
    div1.appendChild(p1)

    let a = document.createElement("a")
    a.setAttribute("class", "btn btn-secondary")
    a.setAttribute("onclick", `añadirCarrito(${e.id})`)
    a.textContent = ("Agregar")
    div1.appendChild(a)

    cards.appendChild(div1)
})


////////////////////////////////////////////////////////////////////
///////////////////////// AÑADIR A CARRITO /////////////////////////
////////////////////////////////////////////////////////////////////

const añadirCarrito = (idPorOnclick) => {
    const objIdentificado = productos.find(e => e.id == idPorOnclick)
    console.log(objIdentificado)

    if (JSON.parse(localStorage.getItem("carrito")) != null) {

        //let index = productos.lenght + 1 //ESTA LINEA LA CREO PARA DARLE UN INDEX A CADA PRODUCTO Y PODER BORRARLO
        let carritoNew = JSON.parse(localStorage.getItem("carrito"))
        carritoNew.push(objIdentificado)

        localStorage.setItem("carrito", JSON.stringify(carritoNew))
        location.reload()
    } else {
        //let index = 1 //ESTA LINEA LA CREO PARA DARLE UN INDEX A CADA PRODUCTO Y PODER BORRARLO
        carrito.push(objIdentificado)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        location.reload()
    }
}


////////////////////////////////////////////////////////////////////
///////////////////////// IMPRIMIR CARRITO /////////////////////////
////////////////////////////////////////////////////////////////////

const imprimirCarrito = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("carrito"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            let tabla = document.createElement("tr")
            tabla.setAttribute("class", "table-light")

            let td1 = document.createElement("td")
                //td1.setAttribute("class", " table-light")
            td1.textContent = `${e.marca}`
            tabla.appendChild(td1)

            let td2 = document.createElement("td")
                //td2.setAttribute("class", " table-light")
            td2.textContent = `${e.animal}`
            tabla.appendChild(td2)

            let td3 = document.createElement("td")
                //td3.setAttribute("class", " table-light")
            td3.textContent = `$${e.precio}`
            tabla.appendChild(td3)

            let td4 = document.createElement("td")
            tabla.appendChild(td4)

            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-outline-danger")
            button.setAttribute("id", `${e.id}`)
            button.setAttribute("onclick", `deleteSelection(${e.id})`)
            button.textContent = "X"
            td4.appendChild(button)

            tablaPrint.appendChild(tabla)
        })

    } else {
        document.getElementById("err").textContent = "Todavia no has agregado nada"
    }
}


const deleteSelection = (id) => {

    let allProd = JSON.parse(localStorage.getItem("carrito"))
    let allProdAct = allProd.filter(e => e.id != id)
    localStorage.setItem("carrito", JSON.stringify(allProdAct))
    location.reload()
}

imprimirCarrito()


////////////////////////////////////////////////////////////////////
/////////////////////////// PRECIO TOTAL ///////////////////////////
////////////////////////////////////////////////////////////////////

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

    total.textContent = `$${precioTotal}`
}

btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})

precioTotal()


//BOTON CONFIRMAR COMPRA

const btnComprar = document.querySelector("#comprar");

btnComprar.addEventListener("click", () => {
    //localStorage.comprar()
    //location.reload()
    Swal.fire({
        title: 'Confirmas tu compra?',
        text: "Clickea Continuar para realizar la compra!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'COMPRAR!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Haz realizado tu compra!',
                '',
                'success'
            )
        }
    })

})


////////////////////////////////////////////////////////////////////
//////////////////// ENVIAR DATOS Y MENSAJE ////////////////////////
////////////////////////////////////////////////////////////////////

class Nota {
    constructor(nombre, direccion, telefono, email, note) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.note = note;
    }
}

let notas = []

const imprimirNota = () => {
    let notas = JSON.parse(localStorage.getItem("notas"))

    notas.forEach(element => {
        $("#print").append(`
            <h5> ${element.nombre} </h5> 
            <h6> ${element.direccion} </h6> 
            <h6> ${element.telefono} </h6>
            <h6> ${element.email} </h6>
            <p> ${element.note} </p>
        `)
    })
}

$("#btnForm").on("click", () => {
    let nombre = $("#nameUser").val()
    let direccion = $("#direccion").val()
    let telefono = $("#telefono").val()
    let email = $("#email").val()
    let note = $("#text").val()

    console.log($("#text").val())

    notas.push(new Nota(nombre, direccion, telefono, email, note))

    localStorage.setItem("notas", JSON.stringify(notas))
    console.log(notas);

    imprimirNota()
})