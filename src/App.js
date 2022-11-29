import "./App.css";
import Navbar from "./Components/Navbar";
import "../src/App.css";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Works from "./Components/Works";
import PortFolio from "./Components/PortFolio";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { themeContext } from "../src/Components/Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#2E2E2E" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <PortFolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
