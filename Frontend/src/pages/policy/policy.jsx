import React, { useEffect, useState, useRef } from 'react';
import './policy.css'

function Indexes({ setErrors, loading, loading2 }) {

    const [scrollPosition, setScrollPosition] = useState(0); // Initialize scroll position state with 0
    const contentRef = useRef(null);
    useEffect(() => {
        document.title = "Privatumo politika | Instalika.lt";
    }, []);




    useEffect(() => {
        if (contentRef.current) {
            // Set the scroll position of the content based on the scrollPosition variable
            contentRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
    }, [scrollPosition]); // Re-run effect whenever scrollPosition changes


    return (
        <div className="policy">
            <div className='container'>
                <h1>Privatumo politika</h1>
                <h2>1. Bendra informacija</h2>

                <p>
                    Ši privatumo politika paaiškina, kaip tvarkome jūsų asmeninę informaciją, kurią pateikiate mūsų svetainėje. Mūsų svetainėje yra kontaktinė forma, kurioje prašome pateikti jūsų vardą, telefono numerį ir el. pašto adresą. Ši informacija naudojama tam, kad galėtume perduoti jūsų užklausą darbuotojui, kuris susisieks su jumis dėl jūsų užklausos.
                </p>
                <h2>
                    2. Kokius duomenis renkame?
                </h2>
                <p>
                    Naudodamiesi mūsų svetaine, jūs pateikiate šią informaciją:
                    <ul>
                        <li>Vardą</li>
                        <li>Telefono numerį</li>
                        <li>El. pašto adresą</li>
                    </ul>
                    Ši informacija yra renkama tik per kontaktinę formą ir nėra renkama automatiškai ar kitaip stebima naršant svetainėje.
                </p>
                <h2>
                    3. Kaip naudojame jūsų duomenis?
                </h2>
                <p>
                    Surinktus asmens duomenis naudojame šiais tikslais:
                </p>
                <ul>
                    <li>
                        Perduoti jūsų vardą, telefono numerį ir el. pašto adresą darbuotojui, kuris susisieks su jumis ir atsakys į jūsų užklausą.
                    </li>
                </ul>
                <p>
                    Mes nenaudosime jūsų duomenų reklamos tikslais, neperduosime jų trečiosioms šalims be jūsų sutikimo, išskyrus atvejus, kai tai yra būtina teisiniams reikalavimams įvykdyti.
                </p>
                <h2>
                    4. Duomenų saugumas
                </h2>

                <p>
                    Mes imamės atitinkamų techninių ir organizacinių priemonių, kad apsaugotume jūsų asmens duomenis nuo neteisėto prieigos, praradimo, sunaikinimo ar pakeitimo.
                </p>

                <h2>
                    5. Kiek laiko saugome jūsų duomenis?
                </h2>
                <p>
                    Jūsų asmens duomenis saugosime tik tiek laiko, kiek būtina tam tikslui, dėl kurio jie buvo surinkti, pasiekti arba tiek, kiek reikalauja teisės aktai. Jei jūsų užklausa išspręsta, jūsų duomenys bus ištrinti arba anonimizuoti.
                </p>
                <h2>
                    6. Jūsų teisės
                </h2>
                <p>
                    Jūs turite teisę:
                </p>
                <ul>
                    <li> Prašyti prieigos prie jūsų asmens duomenų;</li>
                    <li>Prašyti ištaisyti ar ištrinti jūsų asmens duomenis;</li>
                    <li>Apriboti duomenų tvarkymą;</li>
                    <li>Prieštarauti duomenų tvarkymui tam tikrais atvejais;</li>
                    <li>Perkelti duomenis (kai taikoma).</li>
                </ul>
                <p>
                    Jei norite pasinaudoti savo teisėmis arba turite klausimų apie tai, kaip tvarkome jūsų asmens duomenis, susisiekite su mumis naudodamiesi el. pašto adresu: [įmonės el. paštas].
                </p>
                <h2>
                    7. Kontaktai
                </h2>
                <p>
                    Jei turite klausimų apie šią privatumo politiką ar norite daugiau informacijos apie jūsų duomenų tvarkymą, galite susisiekti su mumis:
                </p>
                <ul>
                    <li> El. paštas: [įmonės el. paštas]</li>
                    <li>Telefonas: [įmonės telefono numeris]</li>
                </ul>
                <h2>
                    8. Privatumo politikos pakeitimai
                </h2>
                <p>
                    Šią privatumo politiką galime periodiškai keisti. Visus pakeitimus paskelbsime šioje svetainėje, todėl rekomenduojame reguliariai tikrinti šią politiką.
                </p>
            </div>
        </div>
    );
}

export default Indexes;
