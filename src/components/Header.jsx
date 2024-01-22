import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const Header = () => {
const wishListArray = useSelector((state)=>state.wishlistReducer);
const cartArray = useSelector((state)=>state.cartReducer)
console.log('wishListArray',wishListArray)
console.log('cartArray',cartArray)


  return (
    <>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100"  style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">
          <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart" className="me-3" height={'40px'} />
          E KART
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/wishlist" className="btn border rounded me-3 text-light">Wishlist<Badge bg="secondary" className="ms-1">{wishListArray.length}</Badge></Nav.Link>                        
              <Nav.Link as={Link} to="/cart" className="btn border rounded" style={{width:"75px"}}>Cart<Badge bg="secondary" className="ms-1">{cartArray.length}</Badge></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
