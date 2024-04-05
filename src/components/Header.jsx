import React from 'react'

function Header() {
    return (
        <div>
            <div className='text-white mt-28'>
                <h2 className='text-3xl text-lime-700 font-black mb-2'>Hello I'm Alif Reza</h2>
                <h1 className='text-8xl font-extrabold mb-8'>Product Designer|</h1>
                <p className='text-zinc-500 w-[500px] mb-8'>I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
                <div className='flex gap-8'>
                    <button className='bg-lime-600 py-2 px-4'>Email Me</button>
                    <button className=' py-2 px-4 text-zinc-500 font-medium'>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Header