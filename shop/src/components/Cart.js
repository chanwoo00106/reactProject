import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart({goods, dispatch}) {
    const [alert, setAlert] = useState(true);

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
                    {goods.map((state, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{state.name}</td>
                            <td>{state.count}</td>
                            <td>{state.price * state.count}원</td>
                            <td>
                                <button onClick={() => dispatch({type: '증가', payload: {id: state.id}})}>+</button>
                                <button onClick={() => dispatch({type: '감소', payload: {id: state.id}})}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {alert && <div className="my-alert2">
                <p>지금 구매하시면 티모스킨 50% 할인</p>
                <button onClick={() => setAlert(false)}>닫기</button>
            </div>}
        </div>
    )
}

export default connect(
    (state) => ({
        goods: state.reducer,
    }),

)(Cart);
