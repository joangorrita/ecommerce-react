import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';

import notification from "./img/notification.png";



function App() {
  return (
    <div>
        <h1>Bienvenidos</h1>
        <CartWidget titulo="Mensajes 5" img={notification} />

        <NavBar Nombre= "Remera" Descripcion="algodon" Cantidad="3" Precio="$500" />
    </div>
  );
}

export default App;
