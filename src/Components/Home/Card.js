import './Card.css'

export function Card(propes){
    return(
        <div className='bigdiv'>
       <div className='card'>
        <img src={propes.img} className='img'></img>
        <p className='cardtext'>{propes.name}</p>
       </div>
       </div> 
    )
}