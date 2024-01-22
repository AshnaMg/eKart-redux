import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slices/wishlistSlice';

const WishList = () => {
const wishlistItems = useSelector((state)=>state.wishlistReducer)
const dispatch = useDispatch()

  return (
    <>
    <button className='btn btn-success ms-3' style={{ marginTop: "100px" }}><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-arrow-left me-2"></i>Back To Home</Link></button>
    <Row className="ms-5 me-5 mt-5" >
      <h2>Wish List : {wishlistItems?.length > 1 ? wishlistItems?.length + ' items' : wishlistItems?.length + ' item'}</h2>
      {wishlistItems?.length > 0 ? (
        wishlistItems.map((item) => (
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.thumbnail} height={"200px"} />
              <Card.Body>
                <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                <Card.Text>{item.description.slice(0, 50)}...</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button onClick={()=>dispatch(removeFromWishList(item.id))} variant="outline-danger">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                  <Button  variant="outline-success">
                    <i className="fa-solid fa-cart-plus"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-danger">Wishlist is empty!</p>
      )}
    </Row>
    </>
  )
}

export default WishList