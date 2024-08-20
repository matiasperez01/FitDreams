import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import HomeAlumno from './pages/HomeAlumno.js';
import Rutina from './pages/Rutina.js';

function App() {

  const navbarHome = [
    {item: 'Inicio', link: '#inicio'},
    {item: 'Nosotros', link: '#nosotros'},
    {item: 'Servicios', link: '#servicios'},
    {item: 'Contacto', link: '#contacto'},
    {item: 'INGRESAR', link: '/login', idCss: 'boton-redirect'}
  ];
  const navbarAlumno = [
    {item: 'Inicio', link: '/alumno'},
    {item: 'Rutina', link: '/alumno/rutina'},
    {item: 'Dieta', link: '/alumno'},
    {item: 'Perfil', link: '/alumno'},
    {item: 'SALIR', link: '/', idCss: 'boton-redirect'}
  ];
  const navbarProfesor = [
    {item: 'Inicio', link: '#inicio'},
    {item: 'Nosotros', link: '#nosotros'},
    {item: 'Servicios', link: '#servicios'},
    {item: 'Contacto', link: '#contacto'},
    {item: 'INGRESAR', link: '/login', idCss: 'boton-ingresar'}
  ];
  



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home navbarOptions={navbarHome}/>}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/alumno" element={<HomeAlumno navbarOptions={navbarAlumno}/>}/>
        <Route exact path="/alumno/rutina" element={<Rutina navbarOptions={navbarAlumno}/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
