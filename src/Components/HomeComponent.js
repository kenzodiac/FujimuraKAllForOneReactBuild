import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanFrancisco from '../assets/images/sanfrancisco.webp'

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
            <Row className="index-page-tiles-padding2">
                <Col className="index-page-tiles minich4-bg px-0">
                    <div className="index-page-titles-txt-area">#4: Greater or Less Than</div>
                </Col>
                <Col className="index-page-tiles minich5-bg px-0">
                    <div className="index-page-titles-txt-area">#5: Mad Lib</div>
                </Col>
                <Col className="index-page-tiles minich6-bg px-0">
                    <div className="index-page-titles-txt-area">#6: Odd or Even</div>
                </Col>
            </Row>
            <Row className="index-page-tiles-padding2">
                <Col className="index-page-tiles minich7-bg px-0">
                    <div className="index-page-titles-txt-area">#7: Reverse It</div>
                </Col>
                <Col className="index-page-tiles minich8-bg px-0">
                    <div className="index-page-titles-txt-area">#8: Student Directory</div>
                </Col>
                <Col className="index-page-tiles minich9-bg px-0">
                    <div className="index-page-titles-txt-area">#9: Restaurant Picker</div>
                </Col>
            </Row>
        </>
    );
}
// <div class="row index-page-tiles-padding1">
//     <div class="col index-page-tiles minich1-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich1.html" class="page-links">#1: Say Hello</a></div>
//     </div>
//     <div class="col index-page-tiles minich2-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich2.html" class="page-links">#2: Add Two Numbers</a></div>
//     </div>
//     <div class="col index-page-tiles minich3-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich3.html" class="page-links">#3: Asking Questions</a></div>
//     </div>
// </div>
// <div class="row index-page-titles-padding2">
//     <div class="col index-page-tiles minich4-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich4.html" class="page-links">#4: Greater or Less Than</a></div>
//     </div>
//     <div class="col index-page-tiles minich5-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich5.html" class="page-links">#5: Mad Lib</a></div>
//     </div>
//     <div class="col index-page-tiles minich6-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich6.html" class="page-links">#6: Odd or Even</a></div>
//     </div>
// </div>
// <div class="row index-page-titles-padding2">
//     <div class="col index-page-tiles minich7-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich7.html" class="page-links">#7: Reverse It</a></div>
//     </div>
//     <div class="col index-page-tiles minich8-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich8.html" class="page-links">#8: Student Directory</a></div>
//     </div>
//     <div class="col index-page-tiles minich9-bg px-0">
//         <div class="index-page-titles-txt-area"><a href="./pages/minich9.html" class="page-links">#9: Restaurant Picker</a></div>
//     </div>
// </div>