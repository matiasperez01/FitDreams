import React from 'react'
import NavBar from '../components/NavBar';
import homealumno from '../assets/styles/homealumno.css'
import { Link } from 'react-router-dom';

export default function HomeAlumno({navbarOptions}) {

  return (
    <div className='alumno-container'>
          <NavBar navbarOptions={navbarOptions}/>
          <div className='alumno-section-hero'>
          <div className='alumno-section-hero-div'>
            <h1>Bienvenido, Matias!</h1>
            <h2>Hoy te toca entrenar<br/>
            <strong>Pectoral, hombros y triceps.</strong></h2>
            <Link to="rutina"><div className='alumno-btnRutina'>Ver rutina</div></Link>
            <div className='alumno-consejos'>
              <h3>Consejo del Dia</h3>
              <p>Entrenar temprano o a última hora del día, siempre calzado deportivo indicado para entrenar, con base de goma eva, que evite lesiones.</p>
            </div>
          </div>
          </div>

          <div className='alumno-section-hero'>
          <h1>agregar mensajes importantes, consejos, feedback de users</h1>
          <h3>Hoy te toca entrenar</h3>
          <h2><strong>Pecho, hombro y triceps.</strong></h2>
          <div className='alumno-btnRutina'>Ver rutina del dia</div>
          </div>
        
    </div>
  )
}
