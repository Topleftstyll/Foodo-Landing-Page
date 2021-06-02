import { Col, Container, Row } from "react-bootstrap"

const Service = () => {
    return (
        <div className="service-container-bg">
            <Container className="service-container">
                <Row>
                    <Col xs={12} md={4} className="col-container">
                        <img className="img-fluid service-img" src="assets/image-one.png" alt="" />
                        <h2>Best Offer In Town</h2>
                        <p>
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="col-container">
                        <img className="img-fluid service-img" src="assets/image-two.png" alt="" />
                        <h2>Fast Devliery</h2>
                        <p>
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="col-container">
                        <img className="img-fluid service-img" src="assets/image-three.png" alt="" />
                        <h2>Quality Food</h2>
                        <p>
                            What is Lorem Ipsum Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;