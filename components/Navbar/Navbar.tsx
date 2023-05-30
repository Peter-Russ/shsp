import React from 'react'
import Link from 'next/link';
import style from './Navbar.module.css';
import Image from 'next/image';
import Searchbar from './Searchbar';
import UserManageHub from '@components/Navbar/UserManageHub';



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
        <UserManageHub />
    </header>
  )
}
