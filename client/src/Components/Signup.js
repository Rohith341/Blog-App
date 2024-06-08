import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
  primary: '#0056b3',
  secondary: '#6c757d',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  green: '#28a745',
  lightGrey: '#e9ecef',
  white: '#ffffff',
  error: '#ff6b6b',
};

const SignupContainer = styled(Container)`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 8px;
  background-color: ${colors.light};
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${colors.dark};
`;

const ErrorMessage = styled.p`
  color: ${colors.error};
  text-align: center;
  font-weight: bold;
`;

const StyledForm = styled(Form)`
  .form-label {
    font-size: 1.1rem;
    color: ${colors.dark};
  }
  .form-control {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${colors.lightGrey};
  }
  .form-check {
    margin-bottom: 1rem;
  }
  .form-check-input {
    margin-right: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 0.75rem;
  background-color: ${colors.green};
  border: none;
  &:hover {
    background-color: ${colors.primary};
  }
`;

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function onSignUpFormSubmit(userCred) {
    try {
      let res;
      if (userCred.userType === 'User') {
        res = await axios.post('http://localhost:4000/user-api/user', userCred);
      } else if (userCred.userType === 'author') {
        res = await axios.post('http://localhost:4000/author-api/user', userCred);
      } else {
        setErr("Select a user type.");
        return;
      }

      if (res.data.message === 'User created') {
        navigate('/signin');
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      setErr("An error occurred during registration.");
    }
  }

  return (
    <SignupContainer>
      <Title>Registration Form</Title>
      {err && <ErrorMessage>{err}</ErrorMessage>}
      <StyledForm onSubmit={handleSubmit(onSignUpFormSubmit)}>
        <div className="mb-4">
          <label htmlFor="user" className="form-check-label me-3 pd-3">
            Select User Type:
          </label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="author"
              value='author'
              {...register("userType", { required: true })}
            />
            <label htmlFor="author" className="form-check-label">
              Author
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="User"
              value='User'
              {...register("userType", { required: true })}
            />
            <label htmlFor="User" className="form-check-label">
              User
            </label>
          </div>
          {errors.userType && <ErrorMessage>User type is required</ErrorMessage>}
        </div>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
          {errors.username && <ErrorMessage>Username is required</ErrorMessage>}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && <ErrorMessage>Password is required</ErrorMessage>}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
        </Form.Group>
        <StyledButton type="submit">
          Register
        </StyledButton>
      </StyledForm>
    </SignupContainer>
  );
}
