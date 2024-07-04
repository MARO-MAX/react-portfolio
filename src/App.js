import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="app">
      <main>
        <Header/>
        <AboutMe/>
        <Experience/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
