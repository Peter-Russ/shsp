"use client";

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react'

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
        <div>
            <input type="email" onChange={(e) => email.current = e.target.value} />
            <input type="password" onChange={(e) => password.current = e.target.value}/>
            <button type="submit" onClick={onSubmit}>Login</button>
        </div>
    )
}
