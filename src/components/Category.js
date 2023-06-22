import React from 'react'
import Tv from './logo-images/tv.png'
import Computer from './logo-images/computer.png'
import Laptop from './logo-images/laptop.png'
import Phone from './logo-images/phone.png'
import Clock from './logo-images/clock.png'
import { Link } from 'react-router-dom'
export default function Category() {
  return (
    <div className='container text-center my-3'>
        <Link to="/tv"><img className='mx-4' src={Tv} alt="" height='70px' width='70px' /></Link>
        <Link to="/laptop"><img className='mx-4' src={Laptop} alt="" height='70px' width='70px' /></Link>
        <Link to="/clock"><img className='mx-4' src={Clock} alt="" height='70px' width='70px' /></Link>
        <Link to="/phone"><img className='mx-4' src={Phone} alt="" height='70px' width='70px' /></Link>
        <Link to="/computer"><img className='mx-4' src={Computer} alt="" height='70px' width='70px'/></Link>
    </div>
  )
}
