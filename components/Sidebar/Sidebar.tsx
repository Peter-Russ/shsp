import React from 'react'
import style from './Sidebar.module.css'
import Link from 'next/link';
import { AiOutlineHome, AiOutlineHistory, AiOutlineFire } from 'react-icons/ai';
import { MdSlowMotionVideo, MdOutlineVideoLibrary } from 'react-icons/md';
import { CiStreamOn } from 'react-icons/ci';
import { BsPeople } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <nav className={style.nav}>
        <Link href={"/"} className={style.link}>
          <AiOutlineHome  size={25}/>
          <span className={style.category}>
            Home   
          </span> 
        </Link>
        <Link href={"/"} className={style.link}>
          <MdSlowMotionVideo  size={25}/> 
          <span className={style.category}>
            Shorts  
          </span> 
        </Link>
        <Link href={"/"} className={style.link}>
          <AiOutlineFire  size={25}/>
          <span className={style.category}>
            Popular  
          </span> 
        </Link>
        <Link href={"/"} className={style.link}>
          <BsPeople  size={25}/>
          <span className={style.category}>
            Subscribed  
          </span> 
        </Link>
        <Link href={"/"} className={style.link}>
          <CiStreamOn  size={25}/>
          <span className={style.category}>
            Live  
          </span>  
        </Link>
        <hr className={style.hr}/>
        <Link href={"/"} className={style.link}>
          <AiOutlineHistory  size={25}/> 
          <span className={style.category}>
            History  
          </span> 
        </Link>
        <Link href={"/"} className={style.link}>
          <MdOutlineVideoLibrary  size={25}/> 
          <span className={style.category}>
            My Videos   
          </span> 
        </Link>
        <hr className={style.hr}/>
      </nav>
    </aside>
  )
}


export default Sidebar;