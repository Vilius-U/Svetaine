import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import Indexes from './pages/index/index';
import Policy from './pages/policy/policy';
import Header from './components/header/header';
import Messages from './components/popups/messages';
import Footer from './components/footer/footer';
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


  

  return (
    <>
 <Header setErrors={setErrors} setScrolling={setScrolling}/>
      <Messages errors={errors} setErrors={setErrors}/>
      <TransitionGroup component={null}>
       <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Routes location={location}>
            <Route path="/" element={<Indexes errors={errors} setErrors={setErrors}/>}/>
            <Route path="/Privatumo-politika" element={<Policy errors={errors} setErrors={setErrors}/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
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
