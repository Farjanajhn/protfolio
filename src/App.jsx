

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

export default App
