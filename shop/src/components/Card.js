import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = ({data, counters}) => {

    return (
        <div className="row">
            {data.map((shoes, i) => (
                <div key={shoes.id} className="col-md-4">
                    <Link to={`/detail/${shoes.id}`}>
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="신발" width="100%" />
                        <h4>{shoes.title}</h4>
                    </Link>
                    <p>{shoes.content} & {shoes.price}</p>
                    <p>{counters[shoes.id].count}</p>
                </div>
            ))}
        </div>
    )
}

export default connect(
    state => ({
        counters: state.reducer2
    })
)(Card);
