import React from 'react'
import Header from '../../shared/Header'

function HomePageHeader() {
    return (
        <section className='bg-[#55769e] pb-12'>
            <div className='container mx-auto text-white px-2 md:px-0 pt-6'>
                <Header />
                <div className='text-center pt-20'>
                    <select className="select select-accent bg-[#55769e] max-w-xs">
                        <option disabled selected>All of Bangladesh</option>
                        <option>Dhaka</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                    </select>
                    <div className='flex justify-center pt-6 text-gray-800'>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search Your Product" className="input input-bordered" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageHeader