import './App.css';
import Navigation from "./components/Navigation/navigation";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";


function App() {
  return (
    <div className="App">
        <body>
        <Navigation/>
        <Hero/>
        <About/>
        </body>
        <Footer/>
    </div>
  );
}

export default App;
