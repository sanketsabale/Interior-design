import './Designs.css'

export function Designs(propes){
    return(
        <div className='Dcard'>
            
            <img src={propes.img} className='Dpic'></img>
            <h4 className='Dname'>◈{propes.name}◈</h4>
            <h6 className='Dinfo'>{propes.info}</h6>
            <a href='/Services'><h4 className='Dicon'>⟫</h4></a>
        </div>
    );
}