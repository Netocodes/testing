import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Navigatioinbar = () => {
  return (
    <nav className="w-full sticky top-0 left-0 z-[50]  backdrop-blur-sm bg-white/30 ">
      <Navbar
        className="max-w-[85rem]  mx-auto  backdrop-blur-sm bg-white/30"
        fluid
        rounded
      >
        <NavbarBrand href="/">
          <img
            src={logo}
            className="w-20  md:w-32  h-20 mr-3"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2 gap-x-4 px-4">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink as={Link} to="/" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/about">
            About
          </NavbarLink>
          <NavbarLink as={Link} to="/service">
            Services
          </NavbarLink>
          <NavbarLink as={Link} to="/product">
            Product Page
          </NavbarLink>
          <NavbarLink as={Link} to="/contact">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </nav>
  );
};

export default Navigatioinbar;
