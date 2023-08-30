import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import TeamShowcase from './Components/TeamShowcase/TeamShowcase.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TeamShowcase />
    </div>
  );
}

// TODO:1: Move title components out of <Hero/> and nest them as child components instead
// TODO:2: Reduce the number of colors or at least try to use the same color with added opacity for things like text/border colors
// TODO:3: Clean/organize SlideList.jsx
// TODO:4: Add styling to <ListItem />
// TODO:5: Remove RaceIcon.svg: Consider making this a component so it is easy to apply styles in css and call as needed
//          - If ths is done be sure to insert this icon into the navbar 
// TODO:6: In slidelist transition from useState to useReducer
// TODO:7: In slidelist try to use only 1 useReft and search for children to find elements that are needed instead of having nested refs
// TODO:8: Add onClick method to <ScheduleButton /> (will be used after schedule modal is created)
// TODO:9: Create Teams section to show cards for each team, try to generate a logo for each team as well
// TODO:10: Create HOC to wrap content and set a width
//          - Would wrap content like the content inside <Hero /> and <TeamShowcase />
//          - Should only exist in App.js and wrap components from there.
//          - Pairs well with TODO:1:


// Team Names:
    // ThunderShift Racing
    // VelocityX Motorsport
    // ApexPulse Racing
    // NitroDrive Syndicate
    // TurboThrottle Titans
    // LightningLap Legends
    // CircuitCharge Racing
    // FusionSpeed Racers
    // ApexGlide Warriors
    // PrecisionStorm Racing
    // IgniteRide Rivals
    // WarpSpeed Racing
    // InfinityShift Esports
    // PowerDrive Pilots
    // QuantumQuake Racing
    // WarpFactor Motors
    // VelocityVortex Racers
    // QuantumShift Alliance
    // ThunderPulse Esports
    // ApexForce Racing
    // WarpMotion Masters
    // NitroWave Racing
    // QuantumFlare Esports
    // FusionFlash Racers
    // LightningSurge Motorsport

export default App;
