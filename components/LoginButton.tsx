"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LoginButton = () => {

  const { data: session } = useSession();
  console.log(session?.user);

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()}>
      Login
    </button>
  );
};

export default LoginButton;