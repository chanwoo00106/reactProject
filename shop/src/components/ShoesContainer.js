import React from 'react';
import data from '../db/data';

const ShoesContainer = () => {
    return (
        <div className="container">
            <div className="row">
                {data.map(shoes => (
                    <div key={shoes.id} className="col-md-4">
                        <img src={shoes.src} alt="신발" width="100%" />
                        <h4>{shoes.title}</h4>
                        <p>{shoes.content} & {shoes.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoesContainer;
