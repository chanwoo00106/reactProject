import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    return (
        <div className="row">
            {data.map((shoes, i) => (
                <Link to={`/detail/${shoes.id}`} key={shoes.id} className="col-md-4">
                    <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="신발" width="100%" />
                    <h4>{shoes.title}</h4>
                    <p>{shoes.content} & {shoes.price}</p>
                </Link>
            ))}
        </div>
    )
}

export default Card;
