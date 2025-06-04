import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact'

// const inputValue = prompt("Enter your name:");
// let name = 'Mohit';
const loggedin = true;
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title="Unleash your vision with innovative front-end solutions tailored for the future."  header="Crafting Digital Experiences with Precision"/>
    <About  aboutself='I`m Frontend Developer With Skills like HTML5 , CSS, JS, ReactJS , And TailWindCSS. ' writeAbout='' birthday='23/01/2006' websiteLink='' phoneNum='9328746209' cityState='Ahmedabad Gujarat' age='19' degree='Persuing BSc(AI&DS)' email='mohitrathod9328@gmail.com' classification='Front-End Developer' />
    <Resume />
    <Contact  phonenumContact='9328746209' emailContact='23010303020@knu.edu.in'/>
    </>
  )
}

export default App
