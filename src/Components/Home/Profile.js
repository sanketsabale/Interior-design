import './Profile.css'

export function Profile(propes) {
    return (
        <div className='box'>

            <div className='boxinfo'>
                <div>
                    <img src={propes.img} className='dp'></img>
                </div>
                <div className='boxname'>
                    <h3>{propes.name}</h3>
                    <h5>{propes.post}</h5>
                    <p>{propes.para}</p><hr></hr>
                </div>
            </div>

            <div className='boxinfo2'>
                <div>
                <p>Education  </p>
                <p>Typical Experience  </p>
                <p>Projects Managed  </p>
                <p>Top Skills  </p>
                </div>
                <div>
                    <p>: {propes.edu}</p>
                    <p>: {propes.exp}</p>
                    <p>: {propes.edu}</p>
                    <p>: {propes.skill1}</p>
                </div>

            </div>

        </div>
    );
}