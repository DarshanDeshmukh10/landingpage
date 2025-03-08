import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Navbar from './components/Navbar';
import Whatthey from './components/Whatthey';
import Works from './components/Works';
function App() {
  return (
    <div className="h-full overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Whatthey/>
    </div>
  );
}

export default App;
