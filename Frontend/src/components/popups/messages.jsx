import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import { BiError } from 'react-icons/bi';
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

function Messages({ errors, setErrors, added, setAdded }) {
  const [fadeOut, setFadeOut] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const removeError = (index) => {
    // Mark the error for fading out
    setErrors((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index].isFadingOut = true;
      return updatedErrors;
    });
    // Remove the error after the animation duration
  };

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (errors.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setErrors([]);
      }, 8000)
    }
  }, [errors]);

  return (
    <>
      <div className='messages'>
        {errors.filter((error) => error.type === 'error').map((error, index) => (
          <div key={index} className={`error message ${error.isFadingOut ? 'fade-out' : 'fade-in'}`}>
            <div className='container'>
              <div className='top'>
                <div className='icon'>
                  <BiError className='error-icon' />
                  <h3 className='title'>Klaida</h3>
                </div>
                <button onClick={() => removeError(index)}>X</button>
              </div>
              <p>{error.message}</p>
              <hr />
            </div>
          </div>
        ))}

        {errors.filter((error) => error.type === 'success').map((error, index) => (
          <div key={index} className={`success message ${error.isFadingOut ? 'fade-out' : 'fade-in'}`}>
            <div className='container'>
              <div className='top'>
                <div className='icon'>
                  <FaCheck className='error-icon' />
                  <h3 className='title'>{error.title}</h3>
                </div>

              </div>
              <p>{error.message}</p>
              <hr />
            </div>
          </div>
        ))}


      </div>


    </>
  );
}

export default Messages;
