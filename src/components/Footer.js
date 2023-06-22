import React from 'react'

export default function Footer() {
  return (
    <footer className='my-4'>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Ecommerce-Site</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">This React Site is use to some functionality like Add To Cart Category ways Products Show,and Buy Product Functionality also Use.</p>
        <p><span>www.ecoomerce-site.com</span>&copy; All rights reserved</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Login</button>
          <button type="button" className="btn btn-outline-light btn-lg px-4">Signup</button>
        </div>
      </div>
    </div>
  </div>
    </footer>
  )
}
