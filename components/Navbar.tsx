"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const {data: session} = useSession();



  return (
    <nav>
        <Link href="/">
            <Image src="/../public/img/logo.png" width={200} height={50} alt="logo"/>
        </Link>

    </nav>
  )
}

export default Navbar;