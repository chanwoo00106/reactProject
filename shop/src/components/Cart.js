import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart({state}) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((state, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{state.name}</td>
                            <td>{state.count}</td>
                            <td>{state.price}원</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default connect(
    (state) => ({
        state
    })
)(Cart);
