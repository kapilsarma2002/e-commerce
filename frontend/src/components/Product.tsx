import React from 'react'
import { Card, CardDescription, CardTitle, CardContent } from './ui/card'

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded">
      <a href={`/product/${product._id}`}>
        <img src={product.image} className="mb-4" />
      </a>

      <CardContent>
        <a href={`/product/${product._id}`}>
          <CardTitle>
            <div>{product.name}</div>
          </CardTitle>
        </a>
        <div className='text-xl'>${product.price}</div>
      </CardContent>
    </Card>
  )
}

export default Product