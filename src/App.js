import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Navbar from './components/Navbar';
import Works from './components/Works';
function App() {
  return (
    <div className="h-full overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Expertise/>
      <Works/>
      <Experience/>
    </div>
  );
}

export default App;
