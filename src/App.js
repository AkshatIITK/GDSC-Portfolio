import './App.css';
import Sidebar from './components/sidebar/sidebar';
import About from './components/about/about';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Parallax from './components/parallax/parallax';
import Wishes from './components/wish/wish';
import FeaturedProjects from './components/projects/FeaturedProjects';

function App() {
  return (
    <>
    <Wishes />
    <Sidebar />
    <Home />
    
    <About />
    
    <FeaturedProjects />
    <Contact />

   

    </>
  );
}

export default App;
