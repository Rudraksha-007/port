import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Asgn } from "./components/Assign";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Stats/>
      <Projects/>
      <Skills/>
    </div>
  );  
}

export default App;
