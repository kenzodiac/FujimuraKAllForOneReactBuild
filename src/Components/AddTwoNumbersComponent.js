import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { HelloApi } from '../Services/DataServices'

export default function AddTwoNumbersComponent(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [output, setOutput] = useState('');
    
    return (
        <>
            <Row>
                <Col className="body-spacing-1">
                    <div className="body-txt">Please give me two whole numbers:</div>
                    <div className="body-spacing-2">
                        <input type="number" className="form-control add-two-nums-form py-0" placeholder="      num1" required></input>
                        <input type="number" class="form-control add-two-nums-form py-0" placeholder="     num2" required></input>
                        <Button class="btn submit-btn add-two-nums-btn" type="button">Calculate!</Button>
                    </div>
                    <div className="body-txt">

                    </div>
                </Col>
            </Row>
        </>
    );
}

{/* <div class="row">
<div class="col body-spacing-1">
    <div class="body-txt">Please give me two whole numbers:</div>
    
    <div class="body-spacing-2">
        <input id="num1Input" type="number" class="form-control add-two-nums-form py-0" placeholder="      num1" required>
        <input id="num2Input" type="number" class="form-control add-two-nums-form py-0" placeholder="     num2" required>
        <button id="submit" class="btn submit-btn add-two-nums-btn" type="button">Calculate!</button>
    </div>

    <div id="add2NumsReturn" class="body-txt">
        &nbsp
    </div>
</div>
</div> */}