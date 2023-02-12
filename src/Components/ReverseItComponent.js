import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ReverseApi } from '../Services/DataServices';
import sacramento from '../assets/images/sacramento.png';

export default function ReverseItComponent(){
    const [bgImage, setBgImage] = useState(sacramento);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, []);

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    return (
        <>
        <Row>
            <Col className="body-spacing-1">
                <div class="body-txt">Please tell me anything, and I'll tell you the reverse of it:</div>
        
                <textarea class="form-control reverse-form py-0" placeholder="Input Text Here" required onChange={(e) => {
                        setInput(e.target.value);
                    }}></textarea>
                
                <button class="btn submit-btn askingQs-btn" type="button" onClick={ async () => {
                        setOutput(await ReverseApi(input));
                    }}>Computate!</button>

                <div class="body-txt overflow-auto">
                    {output}
                </div>
            </Col>
        </Row>
        </>
    );
}