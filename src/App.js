
import Navigation from "./components/Navigation/navigation";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import GlobalStyles from "../src/components/Styles/Global.styles";


function App() {
  return (
    <>
        <GlobalStyles/>
        <body>
        <Navigation/>
        <Hero/>
        <About/>
        </body>
        <Footer/>
    </>
  );
}

export default App;
