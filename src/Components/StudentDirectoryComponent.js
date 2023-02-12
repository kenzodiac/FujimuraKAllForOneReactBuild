import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { DirectoryApi } from '../Services/DataServices';
import sanDiego from '../assets/images/sandiego.webp';

export default function StudentDirectoryComponent(){
    const [bgImage, setBgImage] = useState(sanDiego);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage]);

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    return (
        <>
        <Row>
            <Col className="body-spacing-1">
                <div class="body-txt">CodeStack Academy Class of 2022-2023 Student Directory:</div>
                <Container fluid>
                    <Row>
                        <Col xs={4} style={{display: "flex", justifyContent: "top", flexDirection: "column", alignItems: "center"}}>
                            <div class="body-txt text-center">Search By Name, Slack, or E-Mail:</div>
                            <input class="default-form directory-form form-control" placeholder="Input Name:" onChange={(e) => {
                                setInput(e.target.value);
                            }}></input>
                            <button class="btn submit-btn directory-btn" type="button" onClick={ async () => {
                                setOutput(await DirectoryApi(input));
                            }}>Search!</button>
                        </Col>
                        <Col xs={8}>
                            <Container fluid>
                                <Row>
                                    <Col xs={4}>
                                        <div class="body-txt">First Name:</div>
                                    </Col>
                                    <Col xs={8}>
                                        <div class="body-txt">{output.firstName}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>
                                        <div class="body-txt">Last Name:</div>
                                    </Col>
                                    <Col xs={8}>
                                        <div class="body-txt">{output.lastName}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>
                                        <div class="body-txt">Slack Name:</div>
                                    </Col>
                                    <Col xs={8}>
                                        <div class="body-txt">{output.slackName}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>
                                        <div class="body-txt">E-Mail:</div>
                                    </Col>
                                    <Col xs={8}>
                                        <div class="body-txt">{output.email}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4}>
                                        <div class="body-txt">Hobbies:</div>
                                    </Col>
                                    <Col xs={8}>
                                        <div class="body-txt">{output.hobbies}</div>
                                    </Col>
                                </Row>    
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
        </>
    );
}