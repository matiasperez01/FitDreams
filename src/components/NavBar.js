import React from 'react'
import navbar from '../assets/styles/navbar.css';

export default function NavBar({navbarOptions}) {


    const mostrarMenu = () => {
        const itemsNavbar = document.querySelector('.navbar-ul'); 
            if(itemsNavbar.style.display === 'flex'){
                itemsNavbar.style.display = 'none';
            }else{
                itemsNavbar.style.display = 'flex';
            }
    }


    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


  return (
    <div className='navbar'>
        <h3>FitDreams</h3>
        <ul className='navbar-ul'>
            {navbarOptions.map((option, index) => (
                <li key={index} className='navbar-li'>
                    <a href={option.link} className='navbar-a' id={option.idCss}>{option.item}</a>
                </li>
            ))}
        </ul>
        <svg className='navbar-menu' onClick={mostrarMenu} width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 8H20M4 16H12" stroke="#393D3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
  )
}
