"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import style from './LoginButton.module.css'
import Link from "next/link";
import { FiUpload } from "react-icons/fi";

const LoginButton = () => {

  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className={style.row}>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className={style.row}>
      <Link href={"/uploadVideo"} className={style.link}>
        <FiUpload  size={25}/> 
        <span className={style.span}>
          Upload  
        </span>
      </Link>
      <button onClick={() => signIn()} className={style.loginButton}>
        Login
      </button>
      <button className={style.registerButton}>
        Register
      </button>
    </div>
  );
};

export default LoginButton;