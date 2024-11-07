import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './header.css'
import { ReactSession } from 'react-client-session';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoExitOutline, IoMail } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaCircleCheck } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
// import logoVid from '../../logoVid.mp4';
import logoImg from '../../logo311.png';


function Header({ setErrors, errors, setScrolling, setDarkMode, darkModes }) {

  const navigate = useNavigate();

  function scrollMeet(scroll) {

    if (window.location.pathname == '/') {
      document.getElementById("checkbox").checked = false;
      const meet = document.getElementById(scroll);
      meet.scrollIntoView({ behavior: 'smooth' });
      return
    } else {
      setScrolling(true);
      navigate('/');
      setTimeout(() => {
        document.getElementById("checkbox").checked = false;
        const meet = document.getElementById(scroll);
        meet.scrollIntoView({ behavior: 'smooth' });
        setScrolling(false);
      }, 300);
      return
    }
  }

  function shop() {
    setErrors(prevErrors => [...prevErrors, { message: "Atsiprašome, šiuo metu elektronine parduotuvė yra gamyboje", isFadingOut: false, type: "error", title: "Klaida" }]);
  }

  useEffect(() => {
    if (ReactSession.get('darkMode')) {
      setTimeout(() => {
        darkMode();
      }, 10);
      console.log(ReactSession.get('darkMode'));
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkModes);
    ReactSession.set('darkMode', !ReactSession.get('darkMode'));
    console.log(darkModes);
    darkMode();

  }

  function darkMode() {
    console.log(ReactSession.get('darkMode'));
    var elements = [
      document.getElementsByClassName("darkButton"),
      document.getElementsByClassName("headerBg"),
      document.getElementsByClassName("followBackground"),
      document.getElementsByClassName("follow"),
      document.getElementsByClassName("footer")
    ];

    // Loop through each collection and toggle the class for each element
    elements.forEach(function (collection) {
      for (var i = 0; i < collection.length; i++) {
        collection[i].classList.toggle("dark-mode");
        if (i === 0 && !collection[i].classList.contains("dark-mode")) {
          collection[i].classList.add("light-mode");
      } else {
        collection[i].classList.remove("light-mode");
      }
      }
    });
  }

  return (
    <header>

      <div className="headerBg">
        <div className='header'>

          <NavLink className="logo" to="/">
            <img
              className='logoImg'
              src={logoImg}
              alt='Instalika'
            />
          </NavLink>
          <button onClick={toggleDarkMode} className='darkButton light-mode'><IoSunny className='sunIcon'/><BsFillMoonStarsFill className='darkIcon'/></button>

          <div className='options'>
            <div className="select">
              <input id="checkbox" type="checkbox" />
              <hr /><hr /><hr />
            </div>
            <div className='buttons'>
              <button onClick={scrollMeet.bind(this, 'services')} className={`button ${darkModes ? 'dark-mode' : ""}`}>Paslaugos <hr /></button>
              <button onClick={scrollMeet.bind(this, 'contact')} className={`button ${darkModes ? 'dark-mode' : ""}`}>Susisiekime <hr /></button>
              <button onClick={scrollMeet.bind(this, 'contacts')} className={`button ${darkModes ? 'dark-mode' : ""}`}>Kontaktai <hr /></button>
              <button onClick={shop} className={`button shop`}>Prekės</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
