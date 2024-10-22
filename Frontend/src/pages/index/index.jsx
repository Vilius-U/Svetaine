import './index.css'
import React, { useEffect, useState, useRef } from 'react';
import { ReactSession } from 'react-client-session';
import { IconContext } from 'react-icons';
import { BiCategoryAlt } from "react-icons/bi";
import * as FaIcons from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import solarPanel from '../../solarPanel.jpg';
import city from '../../city.jpg';
import arrow from '../../arrow.png';

import solar1 from '../../logos/solar/1.png';
import solar2 from '../../logos/solar/2.png';
import solar3 from '../../logos/solar/3.png';
import solar4 from '../../logos/solar/4.png';

import camera1 from '../../logos/camera/1.png';
import camera2 from '../../logos/camera/2.png';
import camera3 from '../../logos/camera/3.png';
import camera4 from '../../logos/camera/4.png';

import smart1 from '../../logos/smart/1.png';
import smart2 from '../../logos/smart/2.png';
import smart3 from '../../logos/smart/3.png';
import smart4 from '../../logos/smart/4.png';

import electric1 from '../../logos/electric/1.png';
import electric2 from '../../logos/electric/2.png';
import electric3 from '../../logos/electric/3.png';
import electric4 from '../../logos/electric/4.png';

import { FaSolarPanel } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { LiaComment } from "react-icons/lia";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { PiCity } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

function Indexes({ setErrors, loading, loading2, darkMode }) {
  const [viewed, setViewed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Initialize scroll position state with 0
  const contentRef = useRef(null);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState('');

  const [cards, setCards] = useState([
    { id: 1, swiped: false },
    { id: 2, swiped: false },
    { id: 3, swiped: false },
    { id: 4, swiped: false },
  ]);

  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e, id) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;

    if (swipeDistance < -50) {
      // Update only the swiped card's state
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, swiped: true } : card
        )
      );
    } else {
      // Reset the swipe state if no significant left swipe
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, swiped: false } : card
        )
      );
    }
  };

  useEffect(() => {
    document.title = "Pagrindinis | Instalika.lt";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });



    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on component unmount
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);



//   const useElementOnScreen = (options) => {
//     const containerRef = useRef(null);
//     const containerRef2 = useRef(null);
//     const containerRef3 = useRef(null);
//     const containerRef4 = useRef(null);

//     const [isVisible, setIsVisible] = useState(false);
//     const [isVisible2, setIsVisible2] = useState(false);
//     const [isVisible3, setIsVisible3] = useState(false);
//     const [isVisible4, setIsVisible4] = useState(false);

//     const callbackFunction = (entries) => {
//         const [entry] = entries;
//         setIsVisible(entry.isIntersecting);
//     };

//     const callbackFunction2 = (entries) => {
//         const [entry] = entries;
//         setIsVisible2(entry.isIntersecting);
//     };

//     const callbackFunction3 = (entries) => {
//         const [entry] = entries;
//         setIsVisible3(entry.isIntersecting);
//     };

//     const callbackFunction4 = (entries) => {
//         const [entry] = entries;
//         setIsVisible4(entry.isIntersecting);
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(callbackFunction, options);
//         const observer2 = new IntersectionObserver(callbackFunction2, options);
//         const observer3 = new IntersectionObserver(callbackFunction3, options);
//         const observer4 = new IntersectionObserver(callbackFunction4, options);

//         if (containerRef.current) observer.observe(containerRef.current);
//         if (containerRef2.current) observer2.observe(containerRef2.current);
//         if (containerRef3.current) observer3.observe(containerRef3.current);
//         if (containerRef4.current) observer4.observe(containerRef4.current);

//         return () => {
//             if (containerRef.current) observer.unobserve(containerRef.current);
//             if (containerRef2.current) observer2.unobserve(containerRef2.current);
//             if (containerRef3.current) observer3.unobserve(containerRef3.current);
//             if (containerRef4.current) observer4.unobserve(containerRef4.current);
//         };
//     }, [containerRef, containerRef2, containerRef3, containerRef4, options]);

//     return [containerRef, containerRef2, containerRef3, containerRef4, isVisible, isVisible2, isVisible3, isVisible4];
// };

// const [containerRef, containerRef2, containerRef3, containerRef4, isVisible, isVisible2, isVisible3, isVisible4] = useElementOnScreen({
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
// });


  let counter = 0;
  let counter2 = 0;
  let counter3 = 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && viewed == false) {
          setViewed(true);

          // Function you want to trigger when the element is in view
          setInterval((counting) => {
            counter += 1;
            setCount(counter);
            if (counter >= 50) {
              setCount(50);
              clearInterval(counting);
            }
          }, 50)
          setInterval((counting) => {
            counter2 += 1;
            setCount2(counter2);
            if (counter2 >= 5) {
              setCount2(5);
              clearInterval(counting);

            }
          }, 500)
          setInterval((counting) => {
            counter3 += 1;
            setCount3(counter3);
            if (counter3 >= 10) {
              setCount3(10);
              clearInterval(counting);

            }
          }, 250)
        }
      },
    );

    if (document.querySelector('.counter')) {
      observer.observe(document.querySelector('.counter'));
    }
  }, []);

  function scrollMeet2() {
    const meet = document.getElementById('contact');
    meet.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (contentRef.current) {
      // Set the scroll position of the content based on the scrollPosition variable
      contentRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [scrollPosition]); // Re-run effect whenever scrollPosition changes


  function sendMail(event) {
    event.preventDefault();

    if (!name || !email || !number || !message) {
      setErrors(prevErrors => [...prevErrors, { message: "Užpildykite visus laukus", isFadingOut: false, type: "error" }]);
      return;
    }
    else if (ReactSession.get('sent')) {
      setErrors(prevErrors => [...prevErrors, { message: "Užklausa jau išsiusta", isFadingOut: false, type: "error" }]);
      return;
    }

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, number, message }),
    }

    fetch('/main/mail', request).then((response) => {
      if (response.ok) {
        setErrors(prevErrors => [...prevErrors, { message: "Užklausa sėkmingai išsiusta! Susiesiksime su jumis artimiausiu laiku", isFadingOut: false, title: "Užklausa išsiusta", type: "success" }]);
        ReactSession.set('sent', true);
        return response.json();
      } else {
        setErrors(prevErrors => [...prevErrors, { message: "Nepavyko išsiusti užklausos, bandykite dar kartą vėliau", isFadingOut: false, type: "error" }]);
      }
    }).catch((error) => {
      setErrors(prevErrors => [...prevErrors, { message: "Nepavyko išsiusti užklausos, bandykite dar kartą vėliau", isFadingOut: false, type: "error" }]);
    });
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* <div className='locations'>
        <div className={`location ${isVisible ? "viewed" : ""}`}><div className='container'><p className='word'>Paslaugos</p></div></div>
        <div className={`location ${isVisible2 ? "viewed" : ""}`}><div className='container'><p className='word'>Susisiekime</p></div></div>
        <div className={`location ${isVisible3 ? "viewed" : ""}`}><div className='container'><p className='word'>Rekvizitai</p></div></div>
        <div className={`location ${isVisible4 ? "viewed" : ""}`}><div className='container'><p className='word'>Darbo eiga</p></div></div>
      </div> */}
      <main>
        <div className='solarImg'>
          <img src={solarPanel} alt="solar" />
          <div className='textsContainer'>
            <div className='texts'>
              <h1 className='hidden'>Ne problema, <div>įdiegsime!</div></h1>
              <h1 className='hidden'>Moderniausi įrangos instaliavimo sprendimai</h1>
              <button className='hidden' onClick={scrollMeet2}><h3 className='text'>Susisiekime <FaArrowRightLong /></h3>
                <hr />
              </button>

            </div>
            <div className='bottomTexts'>
              <div className='bottomContainer'>
                <p>info@instalika.eu</p>
                <hr />
                <p>+370 655 65525</p>
              </div>
            </div>
          </div>

        </div>

        <article id='services'>
          <div className='services'>
            <h1 className={`topTitle ${darkMode ? 'dark-mode' : ''}`}>Mūsų paslaugos</h1>
            <hr />
          </div>
          <div className='icons'>


            <div
              className={`container hidden `}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, cards[0].id)}
            >

              <div className={`solar card ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`front ${cards[0].swiped ? 'swipedFront' : ''}`}>
                  <div className='iconContainer'>
                    <div className='icon'>
                      <FaSolarPanel />
                    </div>
                  </div>
                  <h2>Saulės energetika</h2>
                  <ul>
                    <li>Aplinkos apsauga</li>
                    <li>Energijos taupymas</li>
                    <li>Atsinaujinanti energija</li>
                    <li>Mažos išlaidos</li>
                    <li>Ilgaamžiškumas</li>
                    <li>Mažesnė priklausomybė nuo tinklo</li>
                    <li>Vietinė energijos gamyba</li>
                    <li>Valstybinės paramos galimybės</li>
                  </ul>
                </div>
                <div className={`design ${cards[0].swiped ? 'swipedDesign' : ''}${darkMode ? 'dark-mode' : ''}`}></div>
                <div className={`back ${cards[0].swiped ? 'swipedBack' : ''}`}>
                  <h2>Populiariausi gamintojai</h2>
                  <hr />
                  <div className='photos'>
                    <img src={solar1} alt="" />
                    <img src={solar2} alt="" />
                    <img src={solar3} alt="" />
                    <img src={solar4} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, cards[1].id)}
              className='container hidden'>

              <div className={`solar card ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`front ${cards[1].swiped ? 'swipedFront' : ''}`}>
                  <div className='iconContainer'>
                    <div className='icon'>
                      <GiCctvCamera />
                    </div>
                  </div>
                  <h2>Signalizacija ir apsauga</h2>
                  <ul>
                    <li>Saugumas</li>
                    <li>Prevencija</li>
                    <li>Stebėjimas</li>
                    <li>Greita reakcija</li>
                    <li>Ramybė</li>
                    <li>Apsauga nuo įsilaužimo</li>
                    <li>Įsilaužimo atgrasymas</li>
                    <li>Pavojaus signalai</li>
                  </ul>
                </div>
                <div className={`design ${cards[0].swiped ? 'swipedDesign' : ''}${darkMode ? 'dark-mode' : ''}`}></div>
                <div className={`back ${cards[1].swiped ? 'swipedBack' : ''}`}>
                  <h2>Populiariausi gamintojai</h2>
                  <hr />
                  <div className='photos'>
                    <img src={camera1} alt="" />
                    <img src={camera2} alt="" />
                    <img src={camera3} alt="" />
                    <img src={camera4} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, cards[2].id)}
              className='container hidden'>

              <div className={`solar card ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`front ${cards[2].swiped ? 'swipedFront' : ''}`}>
                  <div className='iconContainer'>
                    <div className='icon'>
                      <IoHomeOutline />
                    </div>
                  </div>
                  <h2>Smart Home</h2>
                  <ul>
                    <li>Patogumas</li>
                    <li>Energijos taupymas</li>
                    <li>Nuotolinis valdymas</li>
                    <li>Saugumas</li>
                    <li>Automatizacija</li>
                    <li>Efektyvumas</li>
                    <li>Įrenginių sąveika</li>
                    <li>Balsu valdomos sistemos</li>
                  </ul>
                </div>
                <div className={`design ${cards[0].swiped ? 'swipedDesign' : ''}${darkMode ? 'dark-mode' : ''}`}></div>
                <div className={`back ${cards[2].swiped ? 'swipedBack' : ''}`}>
                  <h2>Populiariausi gamintojai</h2>
                  <hr />
                  <div className='photos'>
                    <img src={smart3} alt="" />
                    <img src={smart2} alt="" />
                    <img src={smart1} alt="" />
                    <img src={smart4} alt="" />
                  </div>
                </div>
              </div>
            </div>


            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, cards[3].id)}
              className='container hidden'>

              <div className={`solar card ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`front ${cards[3].swiped ? 'swipedFront' : ''}`}>
                  <div className='iconContainer'>
                    <div className='icon'>
                      <BsLightningCharge />
                    </div>
                  </div>
                  <h2>Elektros darbai</h2>
                  <ul>
                    <li>Saugumas</li>
                    <li>Efektyvumas</li>
                    <li>Patikimumas</li>
                    <li>Profesionalumas</li>
                    <li>Ilgaamžiškumas</li>
                    <li>Energetinis efektyvumas</li>
                    <li>Kokybės garantija</li>
                    <li>Teisingas montavimas</li>
                  </ul>
                </div>
                <div className={`design ${cards[0].swiped ? 'swipedDesign' : ''}${darkMode ? 'dark-mode' : ''}`}></div>
                <div className={`back ${cards[3].swiped ? 'swipedBack' : ''}`}>
                  <h2>Populiariausi gamintojai</h2>
                  <hr />
                  <div className='photos'>
                    <img src={electric1} alt="" />
                    <img src={electric2} alt="" />
                    <img src={electric3} alt="" />
                    <img src={electric4} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>

        <div id='contact' className='contact'>
          <div className='texts2'>
            <div className='background'>
              <h2>Nedelskite! Susisiekim dabar!</h2>
              <div className='informationSend'>
                <BsInfoCircleFill className='iconCircle' />
                <p>Gavę jūsų prašymą, susisieksime su jumis, kai būsime pasiekiami darbo dienomis.</p>
              </div>
              <form onSubmit={sendMail}>
                <div>
                  <CiUser className='icon' />
                  <input required onChange={(e) => setName(e.target.value)} type="text" placeholder='Vardas' />
                </div>
                <div>
                  <CiMail className='icon' />
                  <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder='El. paštas' />
                </div>
                <div>
                  <CiPhone className='icon' />
                  <input required type="number" inputmode='numeric' onChange={(e) => setNumber(e.target.value)} placeholder="Telefono numeris" />
                </div>
                <div className='last'>
                  <LiaComment className='icon' />
                  <textarea onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Paslaugos aprašymas'></textarea>
                </div>
                <div className='checkbox'>
                  <input required id='checkbox2' type="checkbox" />
                  <label htmlFor="checkbox2">Aš sutinku su <NavLink to="/Privatumo-politika">privatumo politiką</NavLink></label>
                </div>
                <button type='submit'>Siusti</button>
              </form>
            </div>
          </div>
        </div>
        <div id='contacts' className='information'>

          <div className='title'>
            <h1 className={`topTitle ${darkMode ? 'dark-mode' : ''}`}>Rekvizitai</h1>
            <hr />
          </div>

          <div className='info'>
            <div className='hidden requisite'>
              <MdOutlineEmail className='icon' />
              <h2>Elektroninis paštas</h2>
              <a href='mailto:info@instalika.eu'>info@instalika.eu</a>
            </div>
            <div className='hidden requisite'>
              <FiPhone className='icon' />
              <h2>Telefonas</h2>
              <a href="tel:+37065565525">+370 655 65525</a>
            </div>
            <div className='hidden requisite1'>
              <HiOutlineNewspaper className='icon' />
              <h2>PVM mokėtojo kodas</h2>
              <p>LT100012828716</p>
            </div>
            <div className='hidden requisite2'>
              <PiCity className='icon' />
              <h2>Įmonės kodas</h2>
              <p>305276105</p>
            </div>
          </div>
        </div>
        <div className='milestones' >
          <div className='container'>
            <div className='stats counter'>
              <div className='hidden'>
                <h2>
                  {count2}+<br /> Metų<br /> dirbame
                </h2>
              </div>
              <div className='hidden'>
                <h2>
                  {count}+<br /> sėkmingų<br /> projektų
                </h2>
              </div>
              <div className='hidden'>
                <h2>
                  {count3}+<br />
                  bendradarbiaujančiu<br /> imonių
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='workflow'>
          <div  className='workflowTitle'>
            <div className='title'>
              <h1 className={`topTitle ${darkMode ? 'dark-mode' : ''}`}>Darbo eiga</h1>
              <hr />
            </div>

            <div className='container hidden'>
              <div className='texts'>
                <h1 className='number'>1</h1>
                <h1 className='description'>Sutarties sudarymas</h1>
                <p>
                  Pirmasis etapas yra sutarties sudarymas. Šiame etape vertinami darbo sudėtingumo aspektai, numatoma darbų eiga, taip pat apskaičiuojama, kokios medžiagos ir priemonės bus reikalingos projekto įgyvendinimui. Tikslus medžiagų sąrašas paruošiamas, siekiant užtikrinti sklandžią darbo eigą ir maksimalų efektyvumą.
                </p>
              </div>
            </div>

            <div className='container hidden'>
              <img src={arrow} alt="arrow" />
              <div className='texts'>
                <h1 className='number'>2</h1>
                <h1 className='description'>Darbo planavimas ir kainos apskaičiavimas</h1>
                <p>
                  Antrame etape atliekamas darbo planavimas ir kainos apskaičiavimas. Kaina priklauso nuo darbo sudėtingumo bei reikalingų medžiagų. Įvertinama, kiek kainuos visos reikalingos medžiagos, įrankiai ir kitos išlaidos, būtinos projektui įgyvendinti. Galutinė kaina sudaroma atsižvelgiant į visas šias aplinkybes.
                </p>
              </div>
            </div>
            <div className='container hidden'>
              <div className='texts'>
                <h1 className='number'>3</h1>
                <h1 className='description'>Medžiagų užsakymas</h1>
                <p>
                  Po to, kai sutariama dėl kainos ir darbo rezultatų, pradedamas medžiagų užsakymo procesas. Užsakomos visos būtinos medžiagos, reikalingos projekto įgyvendinimui. Užtikrinama, kad visos medžiagos būtų gautos laiku, kad galėtume pradėtį darbą pagal nustatytą grafiką.
                </p>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
            <div className='container hidden'>
              <img src={arrow} alt="arrow" />
              <div className='texts'>
                <h1 className='number'>4</h1>
                <h1 className='description'>Darbo vykdymas</h1>
                <p>
                  Gavus visas reikalingas medžiagas, pradedamas darbo vykdymas. Darbas atliekamas pagal sudarytą planą, laikantis nustatyto grafiko ir užtikrinant aukščiausią kokybę. Viso proceso metu stebimas projekto progresas, kad būtų pasiekti planuoti rezultatai ir laiku užbaigti visi darbai.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Indexes;
