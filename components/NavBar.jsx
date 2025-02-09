import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
  return (
    <nav className="w-full fixed px-5 py-4 flex items-center justify-between">
    <Image src={"/logo-transparent.png"}
    height={100}
    width={100}
    alt=""
    />
    <ul className='flex justify-between space-x-6'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>

    <div>Contact</div>
    </nav>
  )
}

export default NavBar