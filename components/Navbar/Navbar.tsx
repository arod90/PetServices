'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';
import PostForm from '../postForm/PostForm';
import { useUser } from '@clerk/nextjs';
import './Navbar.css';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="bg-background text-textBlack">
      <nav
        className="mx-auto text-lg sm:text-xl flex items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/">
          <div className="logo-cont">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <span>Pet Market</span>
          </div>
        </a>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <SignedIn>
            {/* Mount the UserButton component */}
            <button onClick={() => setIsOpen(true)}>Publica tu anuncio</button>
            {user && <p>Hola {user.firstName}!</p>}
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
      </nav>

      {isOpen && <PostForm setIsOpen={setIsOpen} />}
    </header>
  );
}
