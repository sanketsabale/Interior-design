import React from "react";
import './Scardinfo.css'
import Sdata from './../Data/Sdata.json'
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

export function Scardinfo({ }) {
    const { id } = useParams()

    return (
        <>
            <Navbar />

            {/* maininfo */}
            {
                Sdata.map(
                    (data) => {
                        if (data.id == id)
                            return (

                                <div className="scardinfo">

                                    <p className="scardpage">{data.page}</p>
                                    <h1 className="heading">{data.heading}</h1>
                                    <h3 className="subheading">{data.para}</h3>


                                    <div className="scardmaindiv">
                                        <div className="scarddiv1">
                                            <h3>{data.pageinfo}</h3>
                                            <h5>{data.pageinfo2}</h5>
                                            <button className="maindivbtn">{data.btn}</button>
                                        </div>

                                        <div className="scarddiv2">
                                            <h3>❁ LIVESPACE PROMISES ❁</h3>
                                            <h5>◈ Flat 10-year warranty 1</h5>
                                            <h5>◈ 45-day Move-in Guarantee</h5>
                                            <h5>◈ 146 quality checks 2</h5>
                                            <h5>◈ Easy financing options</h5>
                                            <h5>◈ Customisable Designs</h5>
                                            <h5>◈ 40+ cities & 3 countries service available</h5>
                                        </div>
                                    </div>

                                    <div className="imgdiv1">
                                    <img src={data.img} className="scardinfoimg"></img>
                                    <div>
                                        <img src={data.img1} className="scardinfoimg1"></img>
                                        <img src={data.img2} className="scardinfoimg2"></img>
                                    </div>
                                    </div>


                                    <div className="imgdiv2">
                                        <img src={data.img3} className="scardinfoimg3"></img>
                                        <img src={data.img4} className="scardinfoimg4"></img>
                                        <img src={data.img5} className="scardinfoimg4"></img>
                                    </div>


                                </div>


                            )
                    }

                )
            }


            <Footer />
        </>
    )
}