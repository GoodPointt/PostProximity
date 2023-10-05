'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggendIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PostProximity Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">PostProximity</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggendIn ? <div></div> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
