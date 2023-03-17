import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarOfPage from "../NavbarOfPage/NavbarOfPage";
import NavLink from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Map from "../leafletMap/leafletMap";
import OnSale from "../OnSale/OnSale";

const HomePage = (props) => {
  return (
    <>
      <Navbar className="me-auto justify-content-center">this is navbar</Navbar>
      <NavbarOfPage />
      <Map />
      <OnSale />
    </>
  );
};

export default HomePage;
