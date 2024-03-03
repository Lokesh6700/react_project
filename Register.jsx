import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, Button, Modal, ModalBody } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const next = useNavigate();

  const handleRegister = () => {
    // Logic to handle registration goes here
    // Assuming registration is successful, set isRegistered to true
    setIsRegistered(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    next("/login");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <FormGroup>
                  <input type="text" placeholder='Username' id='username' required />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' id='email' required />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' id='password' required />
                </FormGroup>
                <Button onClick={handleRegister}>Create Account</Button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modalOpen} toggle={closeModal}>
        <ModalBody>
          {isRegistered ? (
            <>
              <p>You have successfully registered!</p>
              <Button color="primary" onClick={closeModal}>Close</Button>
            </>
          ) : (
            <>
              <p>Registration failed. Please try again later.</p>
              <Button color="primary" onClick={closeModal}>Close</Button>
            </>
          )}
        </ModalBody>
      </Modal>
    </section>
  );
}

export default Register;
