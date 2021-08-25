import React, { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import TabContent from './TabContent';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';


const Box = styled.div`
    padding-top: 20px;

    h4 {
        font-size: 25px;
        color: ${props => props.color}
    }
`;

const Detail = ({data, counters, dispatch}) => {
    let history = useHistory();
    let id = Number(useParams().id);
    const [alert, setAlert] = useState(true);
    const [tab, setTab] = useState(0);
    const [switchs, setSwitch] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    let shoes = data.find(shoes => shoes.id === id);

    if (shoes){
        return (
            <div className="container">
                <Box>
                    <h4 className="red">Detail</h4>
                </Box>
                {alert && <div className="my-alert2">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>}

                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt="신발" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{shoes.title}</h4>
                        <p>{shoes.content}</p>
                        <p>{shoes.price}</p>
                        <p>재고 : {counters[id].count}</p>
                        <button className="btn btn-danger" onClick={() => {
                            dispatch({type: '추가', payload: {id: 2, name: shoes.title, price: shoes.price, count: 1}});
                            dispatch({type: 'decrease', payload: {id}})
                            history.push('/cart')
                        }}>주문하기</button>
                        <button className="btn btn-danger" onClick={() => history.goBack()}>뒤로가기</button> 
                    </div>
                </div>
                
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => {setSwitch(false); setTab(0)}}>Option 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"onClick={() => {setSwitch(false); setTab(1)}}>Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => {setSwitch(false); setTab(2)}}>Option 3</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <CSSTransition in={switchs} classNames="wow" timeout={500}>
                    <TabContent tab={tab} switchs={switchs} setSwitch={setSwitch} />
                </CSSTransition>

            </div>
        )
    }
    else {
        return <div>찾으신 상품은 없는 상품입니다.</div>
    }
}

export default connect(
    state => ({
        goods: state.reducer,
        counters: state.reducer2
    })
)(Detail);
