import './Trophy.css'

export function Trophy(propes){
    return(
        <div className='trophydiv'> 
            <img src={propes.img} className='trophypic'></img>
            <h3 className='trophyname'></h3>
        </div>
    )
}