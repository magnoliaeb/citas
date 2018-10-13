nc = prompt('Ingrese el numero de citas')

if (nc <= 3) {
    precio = 200
    total = precio * nc
} else if (nc <= 5) {
    precio = 150
    total = (nc -3)*precio + 600
} else if (nc <= 8) {
    precio = 100
    total = (nc -5)*precio + 900
}else {
    precio = 50
    total = (nc -8)*precio + 1200
}

console.log('El numero de citas es: '+ nc);
console.log('El precio de la cita es de: '+ precio);
console.log('El total a pagar es de: '+ total);