import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

const Card = ({data, inventoryContext}) => {
    const inventory = useContext(inventoryContext);

    return (
        <div className="row">
            {data.map((shoes, i) => (
                <div key={shoes.id} className="col-md-4">
                    <Link to={`/detail/${shoes.id}`}>
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="신발" width="100%" />
                        <h4>{shoes.title}</h4>
                    </Link>
                    <p>{shoes.content} & {shoes.price}</p>
                    <p>{inventory[shoes.id]}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;
