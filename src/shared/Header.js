import React, { useState } from 'react';
import { ImMenu, ImCross } from 'react-icons/im';
import Button from './Button';

function Header() {

    let [open, setOpen] =useState(false);

    return (
        <header>
            <nav className='text-white md:flex md:justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Kenabecha.com</h1>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-xl absolute top-6 right-8 md:hidden'>
                    <h3> {open? <ImCross />: <ImMenu />}</h3>
                </div>
                <ul className={`md:flex md:items-center left-0 w-full md:w-auto absolute md:static ${open? 'top-20':'top-[-490px]'}`}>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                    <Button />
                </ul> 
            </nav>
        </header>
    )
}

export default Header