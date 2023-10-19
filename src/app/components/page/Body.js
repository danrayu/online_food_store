import React from 'react'
import ProductView from '../ProductView'

const Body = () => {
  return (
    <div className='w-100 min-vh-100'>
      <div className='container my-4'>
        <ProductView fullView={true}></ProductView>
      </div>
    </div>
  )
}

export default Body