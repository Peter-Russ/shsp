"use client";

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react'
import style from './loginPage.module.css';
import Link from 'next/link';

export default function LoginPage() {

    const email = useRef("");
    const password = useRef("");

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            email:  email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
        })
    }

    return (
        <div className={style.loginContainer}>
            <input type="email" onChange={(e) => email.current = e.target.value} />
            <input type="password" onChange={(e) => password.current = e.target.value}/>
            <div>
                <button type="submit" onClick={onSubmit}>Login</button>
                <Link href={"/auth/register"}><button>Register</button></Link>
            </div>
        </div>
    )
}
