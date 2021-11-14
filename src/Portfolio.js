import "./Portfolio.css";
import { NavBar, About, Projects, Contacts, Welcome } from "./Components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
