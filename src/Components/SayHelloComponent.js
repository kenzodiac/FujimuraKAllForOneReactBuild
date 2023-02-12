import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HelloApi } from '../Services/DataServices';
import berkeley from '../assets/images/berkeley.jpg';

export default function SayHelloComponent(){
    const [bgImage, setBgImage] = useState(berkeley);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage]);

    const [inputField, setInputField] = useState('');
    const [response, setResponse] = useState('');
    const keyDownPress = async (event) => {
        if (event.key === 'Enter'){
            setResponse(await HelloApi(inputField));
        }
    }

    return (
        <>
            <Row>
                <Col className="body-spacing-1">
                    <div className="body-txt">Please tell me your name:</div>
                    <div className="input-group mb-3 hello-form default-form">
                        <input type="text" class="form-control" placeholder="Input Name Here" onKeyDown={keyDownPress} onChange={ (e) => {
                            setInputField(e.target.value);
                        }}></input>
                        <Button className="btn btn-outline-secondary" type="button" onClick={ async () => {
                            setResponse(await HelloApi(inputField));
                        }}>Submit</Button>
                    </div>
                    <div class="body-txt">{response}</div>
                </Col>
            </Row>
        </>
    );
}