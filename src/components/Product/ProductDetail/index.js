import React from 'react'

export default function ProductDetail({val , setVal}) {
  return (
    <div>
        Product Detail Component
        <hr />
        <div>
            val : {val}
        </div>
        <div>
            <button onClick={() => setVal(20)}>Set Val to 20</button>
        </div>
    </div>
  )
}
