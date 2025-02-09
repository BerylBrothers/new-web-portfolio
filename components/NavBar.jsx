import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
  return (
    <nav>
    <Image src={"/logo-transparent.png"}
    height={100}
    width={100}
    alt=""
    />
    <ul className='flex flex-row justify-center items-center '>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default NavBar