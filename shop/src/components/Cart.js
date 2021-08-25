import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart({data, dispatch}) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => (
                        <tr key={i}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.count}</td>
                            <td>{x.price}</td>
                            <td>
                                <button onClick={() => dispatch({type: 'up', id: x.id})}>+</button>
                                <button onClick={() => dispatch({type: 'down', id: x.id})}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default connect(
    state => ({
        data: state
    })
)(Cart)
