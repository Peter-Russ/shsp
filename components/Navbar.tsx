import React from 'react'
import LoginButton from '@components/LoginButton';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <Link href={"/"}>Home</Link>
        <LoginButton />
    </div>
  )
}

export default Navbar