"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import style from './LoginButton.module.css'

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