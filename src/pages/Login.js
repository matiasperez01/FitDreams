import React, { useEffect } from 'react'
import login from '../assets/styles/login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    alert("La aplicación está en proceso.\nPuedes ir viendo la interfaz clickeando en iniciar sesion\nEnterate de todas las novedades siguiendome en LinkedIn :).");
}, []);
  return (
    <div className='login-container' >
        <div className='login-form-login'>
            <h1 className='login-h1'>FitDreams</h1>
            <h3>Iniciar Sesion</h3>
            <label htmlFor='dni' className='login-label'>DNI</label><br/>
            <input type='number' placeholder='Numero de DNI (sin puntos)' id='dni' className='login-input'/>
            <br/>
            <label htmlFor='pass' className='login-label'>Contraseña</label><br/>
            <input type='password' placeholder='Contraseña' id='pass' className='login-input'/>
            <br/>
            <Link to='/alumno'><button className='login-button'>Iniciar Sesion</button></Link>
            <br/>
            <a href='/' className='login-a'>Olvide mi contraseña</a>
        </div>
    </div>
  )
}
