

class alimento {
    constructor(marca, animal, precio){
    this.marca = marca;
    this.animal = animal;
    this.precio = precio;
}
}

const alimento1 = new alimento("Royal Canin", "Perro", 2500);
const alimento2 = new alimento("Royal Canin","Gato", 2100);
const alimento3 = new alimento("Eukanuba","Perro", 2450);
const alimento4 = new alimento("Nutrique", "Perro", 2400);
const alimento5 = new alimento("Nutrique", "Gato", 2000);

console.log(alimento1);

let carrito=[];

let agregar = confirm(`Bienvenido a la sección de compra segura. Querés agregar un alimento al carrito?`)

while (agregar){

    const seleccion = prompt(`Qué alimento vas a comprar? Elegí del 1 al 5`);

    switch(seleccion) {
        case "1":
            carrito.push(alimento1);
            alert(`Ingresaste ${alimento1.marca} para ${alimento1.animal} por un valor de ${alimento1.precio}`);
            agregar = confirm(`Querés agregar otro alimento?`);
            break;

        case "2":
            carrito.push(alimento2);
            alert(`Ingresaste ${alimento2.marca} para ${alimento2.animal} por un valor de ${alimento2.precio}`);
            agregar = confirm(`Querés agregar otro alimento?`);
            break;
        
        case "3":
            carrito.push(alimento3);
            alert(`Ingresaste ${alimento3.marca} para ${alimento3.animal} por un valor de ${alimento3.precio}`);
            agregar = confirm(`Querés agregar otro alimento?`);
            break;

        case "4":
            carrito.push(alimento4);
            alert(`Ingresaste ${alimento4.marca} para ${alimento4.animal} por un valor de ${alimento4.precio}`);
            agregar = confirm(`Querés agregar otro alimento?`);
            break;

        case "5":
            carrito.push(alimento5);
            alert(`Ingresaste ${alimento5.marca} para ${alimento5.animal} por un valor de ${alimento5.precio}`);
            agregar = confirm(`Querés agregar otro alimento?`);
            break;

        default:
            alert(`El valor es incorrecto. Por favor intentá nuevamente`);
            break;

    }
}

console.log(carrito);

function totalCarrito (){
    let carritoTotal = 0;
    for (const producto of carrito) {
        carritoTotal = carritoTotal + producto.precio;

    }
    return carritoTotal;
}

alert(`El total de alimentos elegidos es de ${carrito.length} y el monto a pagar es $${totalCarrito()}`)