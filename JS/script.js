function login() {
    let Contraseña = prompt('Ingrese su nueva contraseña, NO SE LA OLVIDE PORQUE NO PODRA ACCEDER AL SISTEMA');
    if (Contraseña===''){
    do{
        alert('DEBE INGRESAR UNA CONTRASEÑA')
        Contraseña = prompt('Ingrese su nueva contraseña, NO SE LA OLVIDE PORQUE NO PODRA ACCEDER AL SISTEMA');
    }while (Contraseña==='')
}
    let intentos = 3;
    let ingresar = false;
    for (let i = intentos; i > 0; i--) {
        let Ncontraseña = prompt('Ingresa la contraseña, Tienes ' + i + ' intentos.');
        if (Ncontraseña === Contraseña) {
            alert('Bienvenido/a al sistema');
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;
}



const Juegos = [
    {ID:1 ,nombre:"Tlou", precio:35000},
    {ID:2 ,nombre:"Spiderman", precio:28500},
    {ID:3 ,nombre:"Days gone", precio:39250}
]

const preciosActualizados = Juegos.map((producto) => {
    return {
        ID: producto.ID,
        nombre: producto.nombre,
        precio:Math.round(producto.precio * 1.21)
    }
});

if (login()){
    let opcion= prompt('Elija el juego que quiere compar:\n1. Tlou \n2. Spiderman \n3. days gone');
    function comprajuego(opcion){
        let juego,precio
        switch(opcion){
            case '1':
                alert('El nombre del producto es ' + Juegos[0].nombre + ' Y El precio es de $' + preciosActualizados[0].precio);
                break;
            case '2':
                alert('El nombre del producto es ' + Juegos[1].nombre + ' Y El precio es de $' + preciosActualizados[1].precio);
                break;
            case '3':
                alert('El nombre del producto es ' + Juegos[2].nombre + ' Y El precio es de $' + preciosActualizados[2].precio);
                break;
            default:
                if (opcion===""){
                    alert('No ingresaste ningun valor');
                }else{
                    alert('No ingresaste el valor de un juego válido');
                    };
                    do{
                        opcion=prompt('Elija nuevamente el juego que quiere compar:\n1. Tlou \n2. Spiderman \n3. days gone')
                        if (opcion==1){
                            alert('El nombre del producto es ' + Juegos[0].nombre + ' Y El precio es de $' + preciosActualizados[0].precio);
                            break;
                        }else if (opcion==2){
                            alert('El nombre del producto es ' + Juegos[1].nombre + ' Y El precio es de $' + preciosActualizados[1].precio);
                            break;
                        } else if (opcion==3){
                            alert('El nombre del producto es ' + Juegos[2].nombre + ' Y El precio es de $' + preciosActualizados[2].precio);
                            break;
                        } else{
                            alert('NO ES OPCIÓN VÁLIDA')
                        }
                    } while(opcion==="" || opcion !==1 || opcion !== 3);
        }
        return {juego, precio};
    }

comprajuego(opcion);

} else{
    alert('ERROR, No pudiste iniciar sesion, preciona F5 para reiniciar')
}