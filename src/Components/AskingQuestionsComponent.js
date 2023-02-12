import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { QuestionsApi } from '../Services/DataServices';
import fresno from '../assets/images/fresno.jpg';

export default function AskingQuestionsComponent(){
    const [bgImage, setBgImage] = useState(fresno);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, []);

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [output, setOutput] = useState('');

    return (
        <>
            <Row>
                <Col className="body-spacing-1">
                    <div className="body-txt">I have some questions for you:</div>
                    <div className="body-spacing-3">
                        <div class="body-txt">What is your name?</div><input type="text" class="form-control askingQs-form py-0" placeholder="Input Name Here" required onChange={(e) => {
                            setName(e.target.value);
                        }}></input>
                    </div>
                    <div className="body-spacing-3">
                        <div class="body-txt">What time did you wake up?</div><input id="askingQsInput2" type="text" class="form-control askingQs-form py-0" placeholder="Input Time Here" required onChange={(e) => {
                            setTime(e.target.value);
                        }}></input>
                    </div>
                    <button class="btn submit-btn askingQs-btn" type="button" onClick={ async () => {
                            setOutput(await QuestionsApi(name, time));
                    }}>Hit to Submit!</button>
                    <div className="body-txt askingQs-return-txt overflow-auto">{output}</div>
                </Col>
            </Row>
        </>
    );
}