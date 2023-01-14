import React from 'react'

function Category() {
  return (
    <section className='container mx-auto text-gray-800 px-2 md:px-0 pt-6'>
      <h3 className='text-2xl font-bold'>Category</h3>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
        <div>
          <h4>Product Name: Mobile</h4>
        </div>
      </div>
    </section>
  )
}

export default Category