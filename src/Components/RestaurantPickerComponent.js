import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { RestaurantPickerApi } from '../Services/DataServices';
import santaBarbara from '../assets/images/santabarbara.png';

export default function RestaurantPickerComponent(){
    const [bgImage, setBgImage] = useState(santaBarbara);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage]);

    const [output, setOutput] = useState('');

    return (
        <>
        <Row>
            <Col className="body-spacing-1">
                <div class="body-txt text-center">Let's decide where to eat <br/> Where would you like to eat?</div>

                <div class="">
                    <button class="btn submit-btn restaurant-btn" type="button" onClick={ async () => {
                            setOutput(await RestaurantPickerApi(1));
                    }}>Lodi</button>
                    <button class="btn submit-btn restaurant-btn" type="button" onClick={ async () => {
                            setOutput(await RestaurantPickerApi(2));
                    }}>Stockton</button>
                    <br/>
                    <button class="btn submit-btn restaurant-btn" type="button" onClick={ async () => {
                            setOutput(await RestaurantPickerApi(3));
                    }}>Fast Food</button>
                    <button class="btn submit-btn restaurant-btn" type="button" onClick={ async () => {
                            setOutput(await RestaurantPickerApi(4));
                    }}>I don't care!</button>
                </div>

                <div id="restaurantReturn" class="body-txt">
                    {output}
                </div>
            </Col>
        </Row>
        </>
    );
}