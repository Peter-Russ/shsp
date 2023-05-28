import React from 'react'
import LoginButton from '@components/Navbar/LoginButton';
import Link from 'next/link';
import style from './Navbar.module.css';
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';



const Navbar = () => {
  return (
    <header className={style.header}>
        <Link href={"/"}>
          <Image src={"/../public/img/logo_shsp.png"} width={200} height={25} alt="logo"/>
        </Link>
        <Link href={"/uploadVideo"} className={style.link}>
            Upload <FiUpload  size={25}/>
        </Link>
        <LoginButton />
    </header>
  )
}

export default Navbar;