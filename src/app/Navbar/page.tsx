import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    
    <nav className="bg-gray-800 p-4">
    <div className='flex '> 
    <a href='/'>
        <Image src="/mozila.png" alt="mozila"
    className="rounded-full h-16 w-16"
    width={100} height={100}/></a>
    

    <a href='/'>
    <h1 className='text-5xl font-bold'>
    
  <span className="text-purple-800  ml-4">Mozilla</span> 
  <span className="text-purple-400">Club</span>
</h1>
</a>
    
      <ul className=" ml-auto flex justify-start items-start text-left space-x-4 text-white ">
        <li className="nav-item ml-auto text-bold hover:opacity-75"><a href="/" className="text-2xl text-bold nav-link">Home</a></li>
        <li className="nav-item hover:opacity-75" ><a href="About" className="nav-link text-bold text-2xl text-bold ">About</a></li>
 
        <li className="nav-item hover:opacity-75"><a href="Contact" className="nav-link  text-2xl text-bold">Contact</a></li>
      </ul>
    
    </div>
    </nav>
  )
}

export default Navbar