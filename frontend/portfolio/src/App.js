import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exams from './components/Exams';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Exams/>
      <Contact/>
    </div>
  );
}

export default App;
