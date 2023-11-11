import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar py-4 bg-white" style={{borderBottom:'5px solid green'}}>
            <div className="flex items-center justify-between container mx-auto">
                <div className="logo">
                    <a href="" className='text-2xl font-bold tracking-widest'>The<span className='text-green-900'>Cocktail</span>DB</a>
                </div>
                <ul className='flex gap-7'>
                    <li>
                        <Link to="/" className='font-bold text-base tracking-widest text-gray-600'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='font-bold text-base tracking-widest text-gray-600'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar