import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
