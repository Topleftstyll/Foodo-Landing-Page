import { Col, Container, Row } from "react-bootstrap"

const Header = () => {
    return (
        <>
            <div className="background" />

            <div className="texture">
                <Container className="container-top">
                    <Row className="section-top">
                        <Col xs={12} md={6} className="section-top-left">
                            <img className="img-fluid" src="/assets/mobile.png" alt="" />
                        </Col>

                        <Col xs={12} md={6} className="section-top-right shadow">
                            <div className="plate-img-container">

                            </div>
                            <h6>FOODO</h6>
                            <h2>Get Your Food In</h2>
                            <h1>FOODO</h1>
                            <p>
                                What is Lorem Ipsum Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.
                            </p>
                            <button className="btn btn-custom">Download App</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Header;
