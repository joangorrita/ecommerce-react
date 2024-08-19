

function NavBar ({Nombre, Descripcion, Cantidad, Precio}){
    return <div>
        <h1>{Nombre}</h1>
        <p>{Descripcion}</p>
        <p>{Cantidad}</p>
        <p>{Precio}</p>
    </div>
}


export default NavBar;