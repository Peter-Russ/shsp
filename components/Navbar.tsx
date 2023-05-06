"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const isUserLoggedIn = false;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    }, []);


  return (
    <nav>
        <Link href="/">
            <Image src="/../public/img/logo.png" width={200} height={50} alt="logo"/>
        </Link>

        {isUserLoggedIn ? (
            <>
            </>
        ): (
        <>
            {providers && Object.values(providers).map((provider: any) => (
                    <button 
                        key={provider.name}
                        onClick={() => signIn(provider.id)}>
                        Sign In
                    </button>
            ))}
        </>
        )}
    </nav>
  )
}

export default Navbar;