import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import './SignUp.css';  // Your custom styles should come after

import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        role: ''
    });

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = JSON.stringify(userDetails);
        const url = 'http://localhost:8080/api/users/signup';

        const callApi = (method, url, data) => {
            const options = {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: data
            };
            return fetch(url, options);
        };

        callApi('POST', url, data)
            .then(response => {
                if (!response.ok) throw new Error(response.status + ": " + response.statusText);
                return response.text();
            })
            .then(() => navigate("/"))
            .catch(error => alert(error));
    };

    const navigate = useNavigate();

    return (
        <div className="signup-wrapper">
            <Container fluid>
                <div className="text-box">
                    <h1>Great Deals Are Just a Click Away</h1>
                    <p>
                        Unlock a world of travel possibilities with Discoveria. Whether you're looking for your next adventure or planning a relaxing getaway, we've got everything you need. Join our community of travelers and enjoy exclusive deals, personalized itineraries, and seamless booking experiences.
                    </p>
                </div>

                <div className="signup-card-wrapper">
                    <Card className="signup-card">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/526be9164f6ea4d2a99f520e4736b9715cbd789d38501a48e030eb63fc95f59d?placeholderIfAbsent=true&apiKey=071437e89f684ce89111d5fb1c92ec34"
                            alt="Profile"
                            className="profile-img"
                        />
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={userDetails.username}
                                        onChange={handleInputChange}
                                        required
                                        className="input-field" // Add custom class here
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={userDetails.password}
                                        onChange={handleInputChange}
                                        required
                                        className="input-field" // Add custom class here
                                    />
                                </Form.Group>



                                <Form.Group controlId="formRole" className="mb-3">
                                    <Form.Select
                                        name="role"
                                        value={userDetails.role}
                                        onChange={handleInputChange}
                                        className="role-dropdown"  /* Custom class */
                                        required
                                    >
                                        <option value="">Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Tourist">Tourist</option>
                                        <option value="Guide">Guide</option>
                                    </Form.Select>
                                </Form.Group>


                                <Button type="submit" className="btn-custom">
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
