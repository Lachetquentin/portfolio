
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About />
        <Skills/>
        <Work/>
        {/* <Resume/> */}
    </div>
  );
}

export default App;
