import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import Indexes from './pages/index/index';
import Policy from './pages/policy/policy';
import Header from './components/header/header';
import Messages from './components/popups/messages';
import Footer from './components/footer/footer';
import Follow from './components/mouseFollow/follow';
import { ReactSession } from 'react-client-session';

import './components/pageTransitions/pageTransitions.css'; // Import the CSS file here

function App({ in: inProp }) {
  ReactSession.setStoreType('localStorage');

 
  const [errors, setErrors] = useState([]);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const duration = 300;
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to top only if the navigation type is not 'POP'
    if (navigationType !== 'POP' && !scrolling) {
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 300);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [location, navigationType]);

  function ScrollDelay() {
    const location = useLocation();
    const scrollPositionRef = useRef(0); // Store scroll position before navigation
  
    useEffect(() => {
      const handlePopState = (event) => {
        // Store the current scroll position before navigation occurs
        scrollPositionRef.current = window.scrollY;
  
        // Prevent instant scroll restoration and delay it by 300ms
        setTimeout(() => {
          window.scrollTo(0, scrollPositionRef.current);
        }, 300);
      };
  
      // Add listener for back/forward navigation (popstate event)
      window.addEventListener("popstate", handlePopState);
  
      return () => {
        // Clean up the event listener when the component unmounts
        window.removeEventListener("popstate", handlePopState);
      };
    }, [location]);
  
    return null; // No visual output, just logic
  }

  return (
    <>

    <ScrollDelay/>
 <Header setErrors={setErrors} errors={errors} setScrolling={setScrolling}/>
      <Messages errors={errors} setErrors={setErrors}/>
      <Follow />
      <TransitionGroup component={null}>
       <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Routes location={location}>
            <Route path="/" element={<Indexes errors={errors} setErrors={setErrors}/>}/>
            <Route path="/Privatumo-politika" element={<Policy errors={errors} setErrors={setErrors}/>}/>
          </Routes>

        </CSSTransition><Footer />
      </TransitionGroup>
      
    </>
  );
}

// Placed the context provider here so that <App/> can call useLocation()
const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(<Root />, document.getElementById('root'));
