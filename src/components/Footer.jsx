import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
        <div className='footer d-flex justify-content-evenly align-items-center'>
          <div className='website mt-4 mb-3' style={{ width: "400px" }}>
            <h5>
            <img height={'27px'} className='me-2' src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png" alt="" />
            E KART</h5>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati suscipit, quod velit molestias harum commodi aliquid at earum, quia esse illum ullam, dolorum beatae! Incidunt voluptatem reiciendis obcaecati beatae consequuntur.</p>
          </div>
          <div className='link d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          </div>
          <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to='https://react.dev' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>Bootswatch</Link>
          </div>
          <div className='contactus ms-5'>
            <h4>Contact Us</h4>
            <div className="d-flex">
              <input type="text" className='form-control' placeholder='Enter your email' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-3">
              <Link to='https://instagram.com' target='_blank'><i className="fa-brands fa-instagram fa-lg"></i></Link>
              <Link to='https://twitter.com' target='_blank'><i className="fa-brands fa-twitter fa-lg"></i></Link>
              <Link to='https://twitter.com' target='_blank'><i className="fa-brands fa-linkedin fa-lg"></i></Link>
              <Link to='https://facebook.com' target='_blank'><i className="fa-brands fa-facebook fa-lg"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center'>Copyright &copy; 2024 Food Circle, Built With React</p>

    </div>
  )
}

export default Footer