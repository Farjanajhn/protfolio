
/*
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Skills from './components/Skills'

function App() {
 

  return (
    <>
      <Sidenav></Sidenav>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}

export default App;*/
/*

import './App.css';
import { Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Skills from './components/Skills';




// Home layout with all sections
function Home() {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
 
    </Routes>
  );
}

export default App;*/
import './App.css';
import { Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Skills from './components/Skills';

// ✅ Correct file imports from the pages folder
import FirstProject from './pages/FirstProject';
import SecondProject from './pages/SecondProject';
import ThirdProject from './pages/ThirdProject';
import FourthProject from './pages/FourthProject';

// ✅ Main home layout
function Home() {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

// ✅ App routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/first" element={<FirstProject />} />
      <Route path="/projects/second" element={<SecondProject />} />
      <Route path="/projects/third" element={<ThirdProject />} />
      <Route path="/projects/four" element={<FourthProject />} />
    </Routes>
  );
}

export default App;