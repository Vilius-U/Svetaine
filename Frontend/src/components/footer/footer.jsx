import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Footer() {

  const [copyStates, setCopyStates] = useState({});

  function copy(string) {
    navigator.clipboard.writeText(string)
      .then(() => {
        setCopyStates(prevStates => ({
          ...prevStates,
          [string]: true
        }));
        setTimeout(() => {
          setCopyStates(prevStates => ({
            ...prevStates,
            [string]: false
          }));
        }, 2000);
      });
  }



  return (
    <>
      <footer className="footer">

        <div className='container'>
          <h1>MB "Instalika"</h1>
          <div>
            <NavLink to="/Privatumo-politika">Privatumo politika</NavLink>
            <p>info@instalika.lt</p>
            <p>+370 655 65525</p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
