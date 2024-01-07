import React from 'react'
import Product from '../Product'

export default function Category({val , setVal}) {
  return (
    <div>
        Category Component
        <hr />
        <div>
            val : {val}
        </div>
        <div>
            <Product val={val} setVal={setVal}/>
        </div>
    </div>
  )
}
