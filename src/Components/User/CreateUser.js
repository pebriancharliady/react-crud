import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

function CreateUser(props) {
  const [status, setStatus] = useState();
  const [newUsername, updateUsername, resetUsername] = useForm("");
  const [newPassword, updatePassword, resetPassword] = useForm("");
  const [newNIK, updateNIK, resetNIK] = useForm("");
  const [newNAK, updateNAK, resetNAK] = useForm("");
  const [newEmail, updateEmail, resetEmail] = useForm("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://180.131.147.103:4002/user/add`, {
        username: newUsername,
        password: newPassword,
        nik: newNIK,
        nak: newNAK,
        email: newEmail,
      })
      .then((res) => {
        res.data.status === 1 ? setStatus(true) : setStatus(false);
      });
    resetUsername();
    resetPassword();
    resetNIK();
    resetNAK();
    resetEmail();
  };

  const redirectToUserComponent = () => {
    if (status && status !== undefined) {
      return (
        <Redirect
          to={{
            pathname: "/user",
            state: { created: true },
          }}
        />
      );
    } else if (status === false && status !== undefined) {
      return (
        <Redirect
          to={{
            pathname: "/user",
            state: { created: false },
          }}
        />
      );
    } else {
      return false;
    }
  };

  return (
    <div>
      <Container fluid>
        {redirectToUserComponent()}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={newUsername}
              onChange={updateUsername}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPass">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={newPassword}
              onChange={updatePassword}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNIK">
            <Form.Label>NIK</Form.Label>
            <Form.Control
              type="text"
              placeholder="NIK"
              onChange={updateNIK}
              value={newNIK}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNAK">
            <Form.Label>NAK</Form.Label>
            <Form.Control
              type="text"
              placeholder="NAK"
              onChange={updateNAK}
              value={newNAK}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={updateEmail}
              value={newEmail}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mr-3">
            Submit
          </Button>
          <Button variant="secondary">Cancel</Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateUser;
