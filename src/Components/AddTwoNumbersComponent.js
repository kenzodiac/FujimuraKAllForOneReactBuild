import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AddApi } from '../Services/DataServices';
import davis from '../assets/images/davis.png';


export default function AddTwoNumbersComponent(){
    const [bgImage, setBgImage] = useState(davis);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, []);

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [output, setOutput] = useState('');
    
    return (
        <>
            <Row>
                <Col className="body-spacing-1">
                    <div className="body-txt">Please give me two whole numbers:</div>
                    <div className="body-spacing-2">
                        <input type="number" className="form-control add-two-nums-form py-0" placeholder="      num1" required onChange={(e) => {
                            setNum1(e.target.value);
                        }}></input>
                        <input type="number" class="form-control add-two-nums-form py-0" placeholder="     num2" required onChange={(e) => {
                            setNum2(e.target.value);
                        }}></input>
                        <button class="btn submit-btn add-two-nums-btn" type="button" onClick={ async () => {
                            setOutput(await AddApi(num1, num2));
                        }}>Calculate!</button>
                    </div>
                    <div className="body-txt">{output}</div>
                </Col>
            </Row>
        </>
    );
}