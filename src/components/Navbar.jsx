import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='flex align-items-center justify-between'>
                <Link to={"/"} className='text-white text-2xl'>Alifreza <span className='text-lime-500'>.</span></Link>
                <div>
                    <Link className='ml-6 text-white' to={"/"}>Home</Link>
                    <Link className='ml-6 text-white' to={"/services"}>Services</Link>
                    <Link className='ml-6 text-white' to={"/work"}>Work</Link>
                    <Link className='ml-6 text-white' to={"/about"}>About Us</Link>
                    <Link className='ml-6 text-white' to={"/blog"}>Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar