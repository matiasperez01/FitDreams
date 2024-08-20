import React from 'react'
import NavBar from '../components/NavBar'
import homealumno from '../assets/styles/homealumno.css'
import TableRutina from '../components/TableRutina'

export default function Rutina({navbarOptions}) {
  return (
    <div className='rutina-container'>
        <NavBar navbarOptions={navbarOptions}/>
        <div className='alumno-section-hero'>
        <div className='alumno-section-hero-div'>
          <h1>Rutina del dia</h1>
          <br/>
          <h2><strong>Pecho, hombro y triceps.</strong></h2>
        
        <TableRutina></TableRutina>
        </div>
      </div>

        
    </div>
  )
}
