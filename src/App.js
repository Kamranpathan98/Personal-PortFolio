import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar';
import Project from './Components/Project/Project';
import About from './Components/Service/About';
import { themeContext } from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='App' style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : '',
    }}>
      <Navbar />
      <Intro />
      <About />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
