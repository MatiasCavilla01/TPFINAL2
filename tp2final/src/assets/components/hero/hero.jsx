import React from 'react'
import './hero.css'
import imagenhero from '../../../../public/imagenhero.PNG'
import academico from '../../../../public/academico.pdf'


export default function Hero() {
    const handleclick = ()=>{
        window.open('https://github.com/MatiasCavilla01', '_blank', 'noopener,noreferrer')
    }

  return (
    <section id="hero"  className="hero">
                <div className="firma">Matías&emsp; Cavilla</div>
                <section className="contenedor">
                    <section className="texto-hero">
                        <section className="iconos-redes">
                            <a href="https://www.facebook.com/matias.cavilla.9/"><i className="bi bi-facebook ico"></i></a>
                            <a href="https://x.com/MatiasCavilla01?t=tFye6axRrKwX0mHj-JpAMQ&s=08"><i className="bi bi-twitter-x ico"></i></a>               
                            <a href="https://www.instagram.com/matias.cavilla?igsh=N28wZm5kMGpoZW44"><i className="bi bi-instagram ico"></i></a>
                            <a href="https://www.linkedin.com/in/matias-cavilla-6960352b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin ico"></i></a>
                        </section>
                    
                            <h1>Soy Matias Cavilla</h1>
                            <p>Soy Matías, estudiante y desarrollador web.</p>
                            <p>Gracias por visitar mi portafolio.</p>
                            <a href={academico}><button className="academico">Mi Academico</button></a>
                            <button onClick={handleclick}  className="github"><i className="bi bi-github"></i></button>
                            
                    </section>
                    <div className="image-container">
                        <img className="imgmia" src={imagenhero} alt="Imagen mia"/>       
                    </div>
                </section>
            </section>
  )
}
