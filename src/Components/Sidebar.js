import React from "react";
// import { Container, Nav, Image, NavItem } from "react-bootstrap";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";
import logoWKDI from "../images/logo_wkdi.png";

function Sidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <div className="nav-link">
              <div className="profile-image">
                <img src={logoWKDI} />
                <span className="online-status online"></span>
              </div>
              <div className="profile-name">
                <p className="name"></p>
                <p className="designation">Super Admin</p>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <i className="fas fa-list"></i> &nbsp;
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/user">
              <i className="far fa-user"></i> &nbsp;
              <span className="menu-title">Users</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon-logout menu-icon"></i>
              <span className="menu-title">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <Nav className="col-md-12 d-none d-md-block Sidebar">
        <Container>
          <div className="sidebar-sticky">
            <Image
              className="Sidebar-logo"
              src={logoWKDI}
              alt="LOGO KOPERASI"
              fluid
            />
          </div>
          <NavItem className="Sidebar-navitem text-center">
            <NavLink to="/user">
              <div className="Sidebar-Link">
                <i className="far fa-user"></i> User
              </div>
            </NavLink>
          </NavItem>
        </Container>
      </Nav> */}
    </>
  );
}
export default Sidebar;
