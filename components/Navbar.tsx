import React from 'react'
import LoginButton from '@components/LoginButton';
import Link from 'next/link';


function Navbar() {
  return (
    <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/uploadVideo"}>Upload</Link>
        <LoginButton />
    </nav>
  )
}

export default Navbar