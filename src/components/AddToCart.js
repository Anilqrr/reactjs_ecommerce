import React from 'react'
import ProductsItems from './ProductsItems'
export default function AddToCart(props) {
  return (
    <div className='container my-3'>
       <div className="row">
        { props.c.map((e)=>{
           return  <div key={e.id} className="col-4 my-2">
           <ProductsItems cart={true} all={e} pname={e.pname} price={e.price} image={e.image}/>
           </div>
        })}
        {/* {!props.p && P.map((e)=>{
           return  <div key={e.id} className="col-4 my-2">
           <ProductsItems all={e} c={()=>props.c(e)} pname={e.pname} price={e.price} image={e.image}/>
           </div>
        })}
       */}
     </div>
    </div>
  )
}
