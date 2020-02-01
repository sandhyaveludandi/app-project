import React from 'react';


const Card = ({id, name, email} ) => {
    
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw3 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`} height='250px' width='250px'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;  