import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/slices/cartSlice"


const Cart = () => {
  const [total, setTotal] = useState(0)
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  let totalPrice = 0;
  const getTotal = () => {
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice = totalPrice + Number(cartItems[i].price);
    }
    setTotal(totalPrice)
  }

  useEffect(() => {
    getTotal();
  }, [cartItems])

  const navigate = useNavigate()

  const handleCheckOut = () => {
    alert('Successfully placed the order');
    navigate('/');
    dispatch(emptyCart())
  }

  return (
    <>
      <button style={{ marginTop: "120px" }} className='btn btn-success ms-5'>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
      </button>
      <div className='row w-100'>

        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.length > 0 ?
                  cartItems.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} height={"70px"} width={"80px"} style={{ borderRadius: '30%' }} /></td>
                      <td>{item.price} &#8377;</td>
                      <td>
                        <Button onClick={() => dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash "></i></Button>
                      </td>
                    </tr>
                  )) :
                  <p className='text-danger m-5'>No items in Cart</p>
              }
            </tbody>
          </table>
        </div>

        <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
          <div className="border shadow p-5">
            <h3 className="text-primary">Cart Summary</h3>
            <h5>Total no.of Products : <span className='fw-bolder text-warning ms-2'>{cartItems?.length}</span></h5>
            <h5>Total price : <span className='fw-bolder text-warning ms-2'>{total}</span ></h5>
            <button onClick={handleCheckOut} className="btn btn-success rounded w-100 mt-3">Check Out</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart