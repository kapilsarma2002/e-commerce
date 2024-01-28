import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 shadow-md rounded-md">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
