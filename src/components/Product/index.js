import React from 'react'
import ProductDetail from './ProductDetail'

export default function Product({val , setVal}) {
  return (
    <div>
        Product Component
        <hr />
        <div>
            val : {val}
        </div>
        <ProductDetail val={val} setVal={setVal}/>
    </div>
  )
}
