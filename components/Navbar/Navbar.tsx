'use client';
import { useState } from 'react';
import logo from '../../public/noback.svg';
import Image from 'next/image';
import './Navbar.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';
import PostForm from '../postForm/PostForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="logo-cont">
        <Image src={logo} alt="website logo" className="img" priority />
        <span>Pet Services</span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div className="user-cont">
        <SignedIn>
          {/* Mount the UserButton component */}
          <button onClick={() => setIsOpen(true)}>Publica tu anuncio</button>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignUpButton
            mode="modal"
            afterSignUpUrl="/new-user"
            // redirectUrl="/new-user"
          >
            <button>Registrate</button>
          </SignUpButton>
          <SignInButton mode="modal" redirectUrl="/" afterSignInUrl="/">
            <button>Inicia sesion</button>
          </SignInButton>
        </SignedOut>
      </div>
      {isOpen && <PostForm setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
