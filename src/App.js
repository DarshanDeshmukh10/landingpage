import './App.css';
import Banner from './components/Banner';
import Expertise from './components/Expertise';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-full w-screen">
      <Navbar/>
      <Banner/>
      <Expertise/>
    </div>
  );
}

export default App;
