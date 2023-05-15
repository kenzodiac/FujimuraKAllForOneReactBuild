import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanFrancisco from '../assets/images/sanfrancisco.png'

export default function HomeComponent(){
    const [bgImage, setBgImage] = useState(sanFrancisco);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage]);
    
    return (
        <>
            <Row className="index-page-tiles-padding1">
                <Col className="index-page-tiles minich1-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="SayHello" className="page-links">#1: Say Hello</Link></div>
                </Col>
                <Col className="index-page-tiles minich2-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="AddTwoNumbers" className="page-links">#2: Add Two Numbers</Link></div>
                </Col>
                <Col className="index-page-tiles minich3-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="AskingQuestions" className="page-links">#3: Asking Questions</Link></div>
                </Col>
            </Row>
            <Row className="index-page-tiles-padding2" style={{paddingRight: "8px", paddingLeft: "8px"}}>
                <Col className="index-page-tiles minich4-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="GreaterOrLess" className="page-links">#4: Greater or Less Than</Link></div>
                </Col>
                <Col className="index-page-tiles minich5-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="MadLib" className="page-links">#5: Mad Lib</Link></div>
                </Col>
                <Col className="index-page-tiles minich6-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="OddOrEven" className="page-links">#6: Odd or Even</Link></div>
                </Col>
            </Row>
            <Row className="index-page-tiles-padding2" style={{paddingRight: "8px", paddingLeft: "8px"}}>
                <Col className="index-page-tiles minich7-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="ReverseIt" className="page-links">#7: Reverse It</Link></div>
                </Col>
                <Col className="index-page-tiles minich8-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="StudentDirectory" className="page-links">#8: Student Directory</Link></div>
                </Col>
                <Col className="index-page-tiles minich9-bg px-0">
                    <div className="index-page-titles-txt-area"><Link to="RestaurantPicker" className="page-links">#9: Restaurant Picker</Link></div>
                </Col>
            </Row>
        </>
    );
}