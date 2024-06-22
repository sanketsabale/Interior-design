import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import logo from './../../Components/Navbar/logo.png'
import { Profile } from '../../Components/Home/Profile';
import profile1 from './profile1.avif'
import profile2 from './profile2.avif'


export function About() {
    return (
        <>
            <Navbar />

            {/* logo */}
            <img src={logo} className='mainlogo' alt='...'></img>

            {/* mission-vission-goal */}
            <div className='about1'>

                <div className='about11'>
                    <h1>Mission &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="rocket" viewBox="0 0 16 16"><path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" /><path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" /><path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" /></svg></h1>
                    <h6>We exist to create the beautiful backdrops against which our clients experience their lives. We are honored by the trust clients impart to us to select the sofa on which emotional conversations will occur, a table on which a young artist will create many masterpieces, and a fabric which can evoke a specific memory 50 years later.</h6>
                </div>

                <div className='about11'>
                    <h1>Vission &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="rocket" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg></h1>
                    <h6>We aspire to convey the sense of passion we feel about our craft and our clients through our work each day. We hope to challenge and inspire generations of clients through design born of diversity, innovation, collaboration, laughter, and layers. Remove the ego and create design that works and wows.</h6>
                </div>

                <div className='about11'>
                    <h1>Goal &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="rocket" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg></h1>
                    <h6>To ensure that the projects are successfully completed within the constraints of best quality, stated time period and with the minimal cost possible. Our main goals are: Diversifying income sources,Outsourcing,Refresh your marketing,Stay in the limelight,photography tools,Social marketing & Vendor relationship.</h6>
                </div>
            </div>

            {/* profiles */}

            <h1 className='heading'>The team behind your dreams</h1>
            <h3 className='subheading'>It takes having the right people to bring dreams to life - and we make sure you get the best.</h3>
            <div className='profile'>
            <Profile img={profile1} name='Your Designer' post='An expert in full home design' para='Your designer will translate your family’s personality and needs into a wholesome design.' edu='Masters in Interior Design' exp='4+ years' home='Over 40 homes' skill1='Experienced in designing' skill2='Space planning' skill3='Civil/core materials know-how' skill4='Furniture & furnishing' skill5='Budget planning and pricing'/>
            <Profile img={profile2} name='Your Operations Leader' post='An expert in project management' para='Your rep on site, your operations lead will ensure a perfect and complete home transformation.' edu='B.E Civil Engineering' exp='6+ years' home='Over 35 homes' skill1='Project planning' skill2='Onsite progress & tracking' skill3='Custom work/services audit' skill4='Quality adherence' skill5='Vendor management'/>
            </div>




            <Footer />
        </>
    );
}