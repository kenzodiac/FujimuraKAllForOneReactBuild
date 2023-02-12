import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { OddEvenApi } from '../Services/DataServices';
import losAngeles from '../assets/images/losangeles.png';

export default function OddOrEvenComponent(){
    const [bgImage, setBgImage] = useState(losAngeles);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage]);

    const [num, setNum] = useState('');
    const [output, setOutput] = useState('');

    return (
        <>
        <Row>
            <Col className="body-spacing-1">
                <div class="body-txt">Please input a number:</div>
        
                <div class="input-group mb-3 odd-even-form default-form">
                    <input type="number" class="form-control" placeholder="       num" onChange={(e) => {
                        setNum(e.target.value);
                    }}></input>
                    <button class="btn btn-outline-secondary" type="button" onClick={ async () => {
                        setOutput(await OddEvenApi(num));
                    }}>Submit</button>
                </div>
                
                <div class="body-txt">
                    {output}
                </div>
            </Col>
        </Row>
        </>
    );
}