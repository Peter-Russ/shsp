"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import style from './UserManageHub.module.css'
import Link from "next/link";
import Image from "next/image";
import {AiOutlineUser} from 'react-icons/ai';

export default function UserManageHub() {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (status === "authenticated" && session && session.user) {
    return (
      <div className={style.row}>
      {session.user.image ? (
        <Image
        src={session.user.image} alt="user"
        width={25}
        height={25} 
        />
      ) : (
        <AiOutlineUser size={25}/>
      )} 
        
      <p>{session.user.name}</p>

        <button onClick={() => signOut()}>
          Logout
        </button>
      </div>
    );
  }


  // default
  return (
    <div className={style.row}>
    <button onClick={() => signIn()} className={style.loginButton}>
      Login
    </button>
    <Link href={"auth/register"} className={style.link}>
      <button className={style.registerButton}>
        Register
      </button>
    </Link>
  </div>
  );
};