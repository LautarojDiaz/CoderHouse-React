  /* COMPONENTE */
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
return (

  /* SIEMPRE UTILIZARLO DENTRO DE UN DIV,
    SINO, NO LO DETECTA */
<div>
  <Navbar  />
  <Footer  />
</div>
    
  );
}

export default App;

