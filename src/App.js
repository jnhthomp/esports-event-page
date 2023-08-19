import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

// TODO: Move Button component from navbar/hero into own component
// TODO: Move title components out of <Hero/> and nest them as child components instead

export default App;
