import React from 'react'
import LoginButton from '@components/Navbar/LoginButton';
import Link from 'next/link';
import style from './Navbar.module.css';
import Image from 'next/image';
import Searchbar from './Searchbar';



export default function Navbar() {
  return (
    <header className={style.header}>
        <Link href={"/"} as={'image'}>
          <Image 
            src={"/../public/img/logo_shsp.png"} 
            width={200} 
            height={25} 
            alt="logo"
            placeholder="blur"
            blurDataURL={'/../public/img/logo_shsp.png'}/>
        </Link>
        <Searchbar/>
        <LoginButton />
    </header>
  )
}
