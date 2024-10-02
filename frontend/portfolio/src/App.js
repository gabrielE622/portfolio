import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exams from './components/Exams';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Exams/>
    </div>
  );
}

export default App;
