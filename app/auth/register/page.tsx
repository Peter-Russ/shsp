"use client";

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react'

export default async function LoginPage() {

    const name = useRef("");
    const email = useRef("");
    const password = useRef("");



    const createUser = async () => {
        const user = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.current,
                email: email.current,
                password: password.current
            })     
        });

        // login(JSON.parse(JSON.stringify(user)));
    }

    


    // const login = async (user: User) => {
    //     const result = await signIn("credentials", {
    //         email:  user.email,
    //         password: user.password,
    //         redirect: true,
    //         callbackUrl: "/"
    //     })
    // }

    return (
        <div>
            <input type="name" onChange={(e) => name.current = e.target.value} />
            <input type="email" onChange={(e) => email.current = e.target.value} />
            <input type="password" onChange={(e) => password.current = e.target.value}/>
            <button type="submit" onClick={createUser}>Register</button>
        </div>
    )
}