import React,{useEffect, useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import AddToCart from './components/AddToCart'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Buy from './components/Buy'
export default function App() {
  const [cart,setCart] = useState([])
  const Cart_Fun = (data)=>{
     setCart([...cart,data])
  }
  const [pname,setPname] = useState("")
  const getPname = (p)=>{
      setPname(p)
  }
  // useEffect(()=>{
          
  // },[])
  return (
    <>
    <BrowserRouter>
       <Navbar c={cart.length}/>
     <Routes>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/' element={<Products pg={getPname} c={Cart_Fun}/>}/>
       <Route path='/buy' element={<Buy p={pname}/>} />
       <Route path='/tv' element={<Products  c={Cart_Fun} p="tv"/>}/>
       <Route path='/laptop' element={<Products c={Cart_Fun} p="laptop"/>}/>
       <Route path='/computer' element={<Products c={Cart_Fun} p="computer"/>}/>
       <Route path='/clock' element={<Products c={Cart_Fun} p="clock"/>}/>
       <Route path='/phone' element={<Products c={Cart_Fun} p="phone"/>}/>
       <Route path='/addtocart' element={<AddToCart c={cart}/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}
