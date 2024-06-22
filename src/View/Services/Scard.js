import React from 'react';
import './Scard.css'
import { Link } from 'react-router-dom'


export function Scard({ img, name, id ,num  }) {
    return (

        <div className='scard'>


            <img src={img} className='scardimg'></img>

            <div className='information'>
                <h4 className='scardname'>{name}</h4>
                <h6 className='scardnum'>{num}</h6>
                <Link to={`/Scardinfo/${id}`}>
                    <button className='scardbtn'>View details</button>
                </Link>
            </div>

        </div>

    );
}
