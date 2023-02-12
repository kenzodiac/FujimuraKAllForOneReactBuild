import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { MadLibApi } from '../Services/DataServices';
import lodi from '../assets/images/lodi.jpg';

export default function GreaterOrLessThanComponent() {
    const [bgImage, setBgImage] = useState(lodi);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, []);

    const [name1, setName1] = useState('');
    const [musicGenre1, setMusicGenre1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [verb1, setVerb1] = useState('');
    const [pet1, setPet1] = useState('');
    const [hobby1, setHobby1] = useState('');
    const [sport1, setSport1] = useState('');
    const [name2, setName2] = useState('');
    const [musicGenre2, setMusicGenre2] = useState('');
    const [petName1, setPetName1] = useState('');
    const [output, setOutput] = useState('');

    return (
        <>
            <Row>
                <Col className="body-spacing-1">
                    <div class="body-txt mad-lib-title">Please provide the missing words to complete the story:</div>

                    <div class="body-spacing-4">
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{name of a person}" required onChange={(e) => {
                            setName1(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{musical genre}" required onChange={(e) => {
                            setMusicGenre1(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{verb}" required onChange={(e) => {
                            setVerb2(e.target.value);
                        }}></input>
                    </div>

                    <div class="body-spacing-4">
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{verb}" required onChange={(e) => {
                            setVerb1(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{type of pet}" required onChange={(e) => {
                            setPet1(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{name of a hobby}" required onChange={(e) => {
                            setHobby1(e.target.value);
                        }}></input>
                    </div>

                    <div class="body-spacing-4">
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{name of a sport}" required onChange={(e) => {
                            setSport1(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{name of a person}" required onChange={(e) => {
                            setName2(e.target.value);
                        }}></input>
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{musical genre}" required onChange={(e) => {
                            setMusicGenre2(e.target.value);
                        }}></input>
                    </div>

                    <div class="body-spacing-4">
                        <input type="text" class="form-control mad-lib-form py-0" placeholder="{name of a pet}" required onChange={(e) => {
                            setPetName1(e.target.value);
                        }}></input>
                        <button class="btn submit-btn mad-lib-btn" type="button" onClick={async () => {
                            setOutput(await MadLibApi(name1, verb1, sport1, musicGenre1, pet1, petName1, name2, verb2, hobby1, musicGenre2));
                        }}>Hit to submit!</button>
                    </div>

                    <div id="madLibReturn" class="body-txt-2 overflow-auto">
                        {output}
                    </div>
                </Col>
            </Row>
        </>
    );
}