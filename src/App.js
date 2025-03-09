import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Navbar from './components/Navbar';
import Ques from './components/Ques';
import Whatthey from './components/Whatthey';
import Works from './components/Works';
import Footer from './components/Footer';
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
      <Ques/>
      <Footer/>
    </div>
  );
}

export default App;
