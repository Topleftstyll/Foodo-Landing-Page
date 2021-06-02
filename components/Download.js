import { Container } from "react-bootstrap";


const Download = () => {
    return (
        <div className="download-container-bg">
            <Container className="download-container">
                <h3>Get Food With Foodo</h3>
                <h3>Download The App</h3>
                <p>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text. What is Loremem Ipsum 
                    is simply dummy text. Wha Lorem Ipsum Lorem Ipsy dummy text, Wha Ipsum is simply 
                </p>
            </Container>
            <Container className="img-download">
                <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    className="img-fluid"
                    alt=""
                />
                <img
                    src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1"
                    className="img-fluid"
                    alt=""
                />
            </Container>
        </div>
    );
};

export default Download;