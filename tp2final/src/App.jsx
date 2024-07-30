import Header from "./assets/components/header/header"
import './app.css'
import Hero from "./assets/components/hero/hero"
import Services from "./assets/components/servicios/services"
import Skills from "./assets/components/skills/skills"
import Aboutme from "./assets/components/contact/aboutme"


const  App = ()=>{ 

  return (
    <section className="total">
      <Header/>
      <Hero/>
      <Services/>
      <Skills/>
      <Aboutme/>
    </section>
    
  )
}

export default App
