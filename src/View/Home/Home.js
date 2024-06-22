import React from "react";
import './../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Home/Card";
import img1 from './1.avif'
import img2 from './2.avif'
import img3 from './3.avif'
import img4 from './4.avif'
import img5 from './5.avif'
import img6 from './6.avif'
import img7 from './7.avif'
import img8 from './8.avif'
import img9 from './9.avif'
import { Profile } from '../../Components/Home/Profile';
import profile1 from './../About us/profile1.avif'
import profile2 from './../About us/profile2.avif'
import { Designs } from "../../Components/Home/Designs";
import D1 from './D1.avif'
import D2 from './D2.avif'
import D3 from './D3.avif'
import D4 from './D4.avif'
import { Trophy } from "../../Components/Home/Trophy";
import trophy1 from './trophy1.avif'
import trophy2 from './trophy2.avif'
import trophy3 from './trophy3.avif'
import trophy4 from './trophy4.avif'
import trophy5 from './trophy5.avif'

export function Home() {

    return (
        <>
            <Navbar />

            {/* name on image */}
            <div className="transform">
                <div className="transform-para">
                    <h1>ARCHITECTURE is inhabited sclupture. </h1>
                    <p>-LivSpace Interiors.</p>
                </div>
            </div>


            {/* services cards */}
            <h2 className="heading">One-stop shop for all things interiors</h2>
            <p className="subheading">Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.</p>
            <div className="Designcards">
                <Designs img={D1} name='Modular interiors' info='Functional kitchen, wardrobe and storage'/>
                <Designs img={D2} name='Full Home interiors' info='Turnkey interior solution for your home'/>
                <Designs img={D3} name='Luxury interiors' info='Tailored interior that redefine elegance'/>
                <Designs img={D4} name='Renovation' info='Experts solutions to upgrade your home'/>
            </div>



            {/* why choose us */}
            <h2 className="heading">Why Choose Us</h2>
            <marquee scrollamount="10" scrolldelay="00" height="230px" width="100%" class="p-3  bg-dark-subtle " >

            <div className="rendercard">
                <Card img={img1} name='Flat 10 year warranty' />
                <Card img={img2} name='Easy EMI`s' />
                <Card img={img3} name='Move-in guarantee' />
                <Card img={img4} name='146 quality checks' />
                <Card img={img5} name='75,000+ happy homes' />
                <Card img={img6} name='40+ cities' />
                <Card img={img7} name='3 countries' />
                <Card img={img8} name='24 lakh+ products' />
                <Card img={img9} name='3,500+ designers' />
                <Card img={img1} name='Flat 10 year warranty' />
                <Card img={img2} name='Easy EMI`s' />
                <Card img={img3} name='Move-in guarantee' />
                <Card img={img4} name='146 quality checks' />
                <Card img={img5} name='75,000+ happy homes' />
                <Card img={img6} name='40+ cities' />
                <Card img={img7} name='3 countries' />
                <Card img={img8} name='24 lakh+ products' />
                <Card img={img9} name='3,500+ designers' />
                <Card img={img1} name='Flat 10 year warranty' />
                <Card img={img2} name='Easy EMI`s' />
                <Card img={img3} name='Move-in guarantee' />
                <Card img={img4} name='146 quality checks' />
                <Card img={img5} name='75,000+ happy homes' />
                <Card img={img6} name='40+ cities' />
                <Card img={img7} name='3 countries' />
                <Card img={img8} name='24 lakh+ products' />
                <Card img={img9} name='3,500+ designers' />
                <Card img={img1} name='Flat 10 year warranty' />
                <Card img={img2} name='Easy EMI`s' />
                <Card img={img3} name='Move-in guarantee' />
                <Card img={img4} name='146 quality checks' />
                <Card img={img5} name='75,000+ happy homes' />
                <Card img={img6} name='40+ cities' />
                <Card img={img7} name='3 countries' />
                <Card img={img8} name='24 lakh+ products' />
                <Card img={img9} name='3,500+ designers' />
            </div>
            </marquee>


           

            <h1 className='heading'>The team behind your dreams</h1>
            <h3 className='subheading'>It takes having the right people to bring dreams to life - and we make sure you get the best.</h3>
            <div className='profile'>
            <Profile img={profile1} name='Your Designer' post='An expert in full home design' para='Your designer will translate your family’s personality and needs into a wholesome design.' edu='Masters in Interior Design' exp='4+ years' home='Over 40 homes' skill1='Experienced in designing' skill2='Space planning' skill3='Civil/core materials know-how' skill4='Furniture & furnishing' skill5='Budget planning and pricing'/>
            <Profile img={profile2} name='Your Operations Leader' post='An expert in project management' para='Your rep on site, your operations lead will ensure a perfect and complete home transformation.' edu='B.E Civil Engineering' exp='6+ years' home='Over 35 homes' skill1='Project planning' skill2='Onsite progress & tracking' skill3='Custom work/services audit' skill4='Quality adherence' skill5='Vendor management'/>
            </div>


            <h1 className="heading">Our Trophy Gallery</h1>
            <div className="trophycards">
            <Trophy img={trophy1}/>
            <Trophy img={trophy2}/>
            <Trophy img={trophy3}/>
            <Trophy img={trophy4}/>
            <Trophy img={trophy5}/>
            </div>


            <Footer />
        </>

    )
}