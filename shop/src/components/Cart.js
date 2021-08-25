import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart({goods, alert, dispatch}) {
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
                            <td>{state.price}원</td>
                            <td>
                                <button onClick={() => dispatch({type: '증가'})}>+</button>
                                <button onClick={() => dispatch({type: '감소'})}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {alert && <div className="my-alert2">
                <p>지금 구매하시면 티모스킨 50% 할인</p>
                <button onClick={() => dispatch({type: '닫기'})}>닫기</button>
            </div>}
        </div>
    )
}

export default connect(
    (state) => ({
        goods: state.reducer,
        alert: state.reducer2
    }),

)(Cart);
