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
// TODO: Add color vars for a more unified color scheme and update existing colors to theme
//       - This will also make it easier to adjust the theme of the site for different use cases
// TODO: Clean/organize SlideList.jsx
// TODO: Add styling to <ListItem />
// TODO: Remove RaceIcon.svg: Consider making this a component so it is easy to apply styles in css and call as needed
//       - If ths is done be sure to insert this icon into the navbar 

export default App;
