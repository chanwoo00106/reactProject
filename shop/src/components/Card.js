import React from 'react';
import data from '../db/data';

const Card = () => {
    return (
        <div className="container">
            <div className="row">
                {data.map((shoes, i) => (
                    <div key={shoes.id} className="col-md-4">
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="신발" width="100%" />
                        <h4>{shoes.title}</h4>
                        <p>{shoes.content} & {shoes.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;
