import './header.css'

export default function Header() {
  return (
    <header>
            <nav className="navbar">
                <div id="Title">mat<span>.</span>ca</div>
                <a href="#hero">Inicio</a>
                <a href="#services">Servicios</a>
                <a href="#about">Acerca De Mi</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contacto</a>
                <i className="bi bi-list icon"></i>
            </nav>
    </header> 
  )
}
