import { Col, Container, Row } from "react-bootstrap"

const About = () => {
    return (
        <div className="about-container-bg">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src="assets/image-about.png" alt="" />
                    </Col>

                    <Col xs={12} md={6} className="about-details">
                        <div className="section-top-right shadow">
                            <h2>Best Offer In Town</h2>
                            <b>What is Lorem Ipsum Lorem Ipsum is simply dummy text</b>
                            <p>
                                What is Lorem Ipsum Lorem Ipsum is simply dummy text. What is Loremem Ipsum 
                                is simply dummy text. Wha Lorem Ipsum Lorem Ipsy dummy text, Wha Ipsum is simply 
                                dummy text sum is simply dum.
                            </p>
                            <button className="btn btn-custom">Explore More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
