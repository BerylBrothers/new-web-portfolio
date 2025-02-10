import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
  return (
    <nav className="w-full fixed px-3 py-4 lg:8px xl:px-[4%] flex items-center justify-between">
    <Link href={"/"}><Image src={"/logo-transparent.png"}
    height={100}
    width={100}
    alt=""
    href="/"
    /></Link>
    <ul className='hidden md:flex justify-between py-3 px-12 gap-6'>
        <li>Home</li>
        <Link href="/about"><li>About</li></Link>
        <li>Services</li>
        <Link href="/work"><li>Work</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
    </ul>

    <div className="hidden lg:flex items-center border ml-4 gap-3 px-10 py-2.5 rounded-full border-blue-500">Contact</div>
    </nav>
  )
}

export default NavBar