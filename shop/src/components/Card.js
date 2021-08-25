import React from 'react';
import { useHistory } from 'react-router-dom';


const Card = ({data}) => {
    const history = useHistory();
    return (
        <div className="row">
            {data.map((shoes, i) => (
                <div key={shoes.id} className="col-md-4" onClick={() =>history.push(`/detail/${shoes.id}`)}>
                    <div>
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="신발" width="100%" />
                        <h4>{shoes.title}</h4>
                    </div>
                    <p>{shoes.content} & {shoes.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;
