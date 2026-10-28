import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./component/header.jsx";
import { Footer } from "./component/footer.jsx"

function App() {
  return (
  <div>className="page"
 <Header />   
<Bio />
<Footer /> 
  </div>
  );
} 


export default App

function Bio() {
  return(
      <section id="about" className="bio container">
      <h1>Hi, I'm Emmanuel Edwin</h1>
      <p className="tagline">Frontend developer training in . Portharcourt</p>
      <p>
        I started with HTML and CSS, learned JavaScript, and now I'm learning 
        React to build faster, cleaner interfaces
      </p>
      <ul id="skills" className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React (learning)</li>
      </ul>
    </section>
  )
}
