import ProfileCard from "./ProfileCard";
import './App.css';

import AlexaImg from "./img/alexa.png";
import CortaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

function App() {
  return (
    <div>
        <h1>Asistentes</h1>
        <ProfileCard titulo="Alexa" arroba="@alexa91" img={AlexaImg} />
        <ProfileCard titulo="Siri" arroba="@siri10" img={SiriImg} />
        <ProfileCard titulo="Cortana" arroba="@cortana52" img= {CortaImg} />
    </div>
  );
}

export default App;
