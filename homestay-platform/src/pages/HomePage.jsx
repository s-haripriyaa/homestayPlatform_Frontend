import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HomePage.css'; // Import your custom CSS

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            {/* Header Section */}
            <header className="navbar-header">
                <h1 className="navbar-title">DISCOVERIA</h1>
            </header>

            {/* Main Content */}
            <Container fluid className="homepage-content">
                <Row>
                    <Col md={8}></Col>
                    <Col md={4}>
                        <Card className="homepage-card">
                            <Card.Body>
                                <Card.Title className="homepage-title text-5xl leading-[60px]">
                                    Unveil the world's wonders
                                </Card.Title>
                                <Card.Text className="card-text">
    Welcome to Discoveria, where every adventure begins with curiosity!
</Card.Text>

                                <Button 
                                    variant="primary" 
                                    className="homepage-button px-11 py-6 mt-20 w-[252px] text-4xl leading-loose"
                                >
                                    Start Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
