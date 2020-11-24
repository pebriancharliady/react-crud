import React, { useState, useEffect } from "react";
import { Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { withRouter, NavLink } from "react-router-dom";
import { BASE_URL } from "../../config";
import UserTable from "./UserTable";
import "./User.css";

function User(props) {
  const [user, setUser] = useState([]);
  //Fetching Data
  const getUser = async function () {
    let res = await axios.get(`${BASE_URL}/user`);
    let data = res.data;
    setUser(data);
  };

  useEffect(() => {
    getUser();
    window.history.replaceState(null, "");
  }, []);

  //Delete Akun
  const handleDelete = (username) => {
    axios.delete(`${BASE_URL}/user/${username}`);
    setUser(user.filter((u) => u.username !== username));
  };

  const columns = [
    {
      Header: "ID Akun",
      width: "200rem",
      accessor: "id_akun", // accessor is the "key" in the data
    },
    {
      Header: "NIK",
      accessor: "nik",
    },
    {
      Header: "NAK",
      accessor: "nak",
    },
    {
      Header: "Username",
      accessor: "username",
    },
    {
      Header: "Password",
      accessor: "password",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "",
      width: "125px",
      accessor: "actions",
      style: {
        cursor: "pointer",
      },
      Cell: ({ row }) => (
        <>
          <NavLink
            className="btn btn-outline-primary outline mr-3"
            to={`/user/detail/${row.original.username}`}
          >
            {/* <i className="far fa-edit"></i> */}
            Edit
          </NavLink>
          <Button
            variant="outline-danger"
            onClick={() => handleDelete(row.original.username)}
          >
            {/* <i className="far fa-trash-alt"></i> */}
            Delete
          </Button>
        </>
      ),
    },
  ];

  const isSuccess = () => {
    if (props.location.state !== null && props.location.state !== undefined) {
      if (props.location.state.created) {
        return (
          <Alert variant="success">
            Data Berhasil <strong>Ditambahkan !</strong>
          </Alert>
        );
      } else if (props.location.state.edited) {
        return (
          <Alert variant="success">
            Data Berhasil <strong>Diedit !</strong>
          </Alert>
        );
      } else if (props.location.state.created === false) {
        return (
          <Alert variant="danger">
            Data Gagal <strong>Ditambahkan !</strong>
          </Alert>
        );
      } else if (props.location.state.edited === false) {
        return (
          <Alert variant="danger">
            Data gagal <strong>Diedit !</strong>
          </Alert>
        );
      }
    } else if (props.location.state === null) {
      return false;
    }
  };

  return (
    <Container fluid>
      {isSuccess()}
      <div className="mb-3">
        <NavLink className="btn btn-orange" exact to="/user/create">
          Buat User +
        </NavLink>
      </div>
      <UserTable columns={columns} data={user} minRows={0} />
    </Container>
  );
}

export default withRouter(User);
