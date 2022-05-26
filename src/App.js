import "./App.css";
import ComponenteA from "./components/ComponenteA";
import { Contacto } from "./models/contact.class";

function App() {
  const usuario = new Contacto("Lionel", "Villa", "lvilla@gmail.com", false);

  return (
    <div className="App">
      <div className="App-header">
        <ComponenteA contacto={usuario} />
      </div>
    </div>
  );
}

export default App;
