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

            {/* why choose us */}
            <h2 className="heading">Why Choose Us</h2>
            <marquee scrollamount="10" scrolldelay="00" height="230px" width="100%" class="p-3  bg-dark-subtle " >

            <div className="rendercard">
                <Card img={img1} name='Flat 10 year warranty' />
                <Card img={img2} name='Easy EMI`s' />
                <Card img={img3} name='45-day move-in guarantee' />
                <Card img={img4} name='146 quality checks' />
                <Card img={img5} name='75,000+ happy homes' />
                <Card img={img6} name='40+ cities' />
                <Card img={img7} name='3 countries' />
                <Card img={img8} name='24 lakh+ catalouge products' />
                <Card img={img9} name='3,500+ designers' />
                
            </div>
            </marquee>


           



            <Footer />
        </>

    )
}