import React from 'react';
import {Table} from 'react-bootstrap';

function Cart() {
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
                    <tr>
                        <td>1</td>
                        <td>byun</td>
                        <td>chanwoo</td>
                        <td>chan</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tee</td>
                        <td>mo</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart
