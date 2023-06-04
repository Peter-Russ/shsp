import React from 'react'
import style from './Searchbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Searchbar() { 
  return (
    <div className={style.row}>
        <label htmlFor="searchbox"></label>
        <input id="searchbox" type="search" placeholder="Search" className={style.search}/>
        <div className={style.searchIcon}>
            <AiOutlineSearch  size={25}/>
        </div>
    </div>
  )
}
