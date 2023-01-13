import React from 'react';
import { ImMenu} from 'react-icons/im';

function Header() {
    return (
        <header>
            <nav className='text-white md:flex md:justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Kenabecha.com</h1>
                </div>
                <div>
                <h3><ImMenu /></h3>
                </div>
                <ul className='md:flex text-center md:items-center left-0'>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                    <li className='md:p-2 hover:text-gray-400 font-bold'>Home</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header