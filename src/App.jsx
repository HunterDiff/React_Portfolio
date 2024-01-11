import React from 'react';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Exp from './Components/Expreience/Exp'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testi from './Components/Testimonials/Testi'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Exp/>
      <Services/>
      <Portfolio/>
      <Testi/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App