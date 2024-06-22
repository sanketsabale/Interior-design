import React from "react";
import './Services.css'
import Sdata from './../Data/Sdata.json'
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { Scard } from "./Scard";

export function Services() {
    return (
        <>
            <Navbar />

            {/* name on image */}
            <div className="text">
                <div className="text-para">
                    <h1>Our Services</h1>
                </div>
            </div>

            {/* Home interior */}

            <h1 className="heading">Home Interior Design</h1>
            <h3 className="subheading">We bring you carefully-curated interior design ideas, to give your home a brand new look. Explore exclusive interior designs and trends that are every bit inspirational as they are practical. Our team of interior designers have put together ideas across kitchen, bedroom, living room and more, to help you pick a design that will best suit your home interior requirements.</h3>

            <div className='Sdatacard'>

                {
                    Sdata.map(
                        (data) => {
                            return (
                                <Scard id={data.id} img={data.img} name={data.name} num={data.num}/>
                            )
                        }
                    )
                }


            </div>



            <Footer />
        </>
    )
}