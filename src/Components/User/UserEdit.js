import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { BASE_URL } from "../../config";
import useForm from "../../Hooks/useForm";
import { Redirect } from "react-router-dom";

function UserEdit(props) {
  const username = props.match.params.username;
  const [status, setStatus] = useState();
  const [newUsername, updateUsername, setUsername, resetUsername] = useForm("");
  const [newPassword, updatePassword, setPassword, resetPassword] = useForm("");
  const [newNIK, updateNIK, setNIK, resetNIK] = useForm("");
  const [newNAK, updateNAK, setNAK, resetNAK] = useForm("");
  const [newEmail, updateEmail, setEmail, resetEmail] = useForm("");

  const getUserDetail = async function () {
    let res = await axios.get(`${BASE_URL}/user/${username}`);
    let data = res.data;
    data.forEach((dataVal) => {
      setUsername(dataVal.username);
      setPassword(dataVal.password);
      setNIK(dataVal.nik);
      setNAK(dataVal.nak);
      setEmail(dataVal.email);
    });
  };

  const submitEdit = async function (e) {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/user/${username}`, {
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

  useEffect(() => {
    getUserDetail();
  }, []);

  const redirectToUserComponent = () => {
    if (status && status !== undefined) {
      return (
        <Redirect
          to={{
            pathname: "/user",
            state: { edited: true },
          }}
        />
      );
    } else if (status === false && status !== undefined) {
      return (
        <Redirect
          to={{
            pathname: "/user",
            state: { edited: false },
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
        <Form onSubmit={submitEdit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="New Username .."
              value={newUsername}
              onChange={updateUsername}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPass">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="New Password .."
              value={newPassword}
              onChange={updatePassword}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNIK">
            <Form.Label>NIK</Form.Label>
            <Form.Control
              type="text"
              placeholder="New NIk .."
              value={newNIK}
              onChange={updateNIK}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNAK">
            <Form.Label>NAK</Form.Label>
            <Form.Control
              type="text"
              placeholder="New NAK .."
              value={newNAK}
              onChange={updateNAK}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              key="5"
              type="text"
              placeholder="New Email .."
              value={newEmail}
              onChange={updateEmail}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* ))} */}
      </Container>
    </div>
  );
}

export default UserEdit;
