'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './NavBar.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';
import PostForm from '../postForm/PostForm';
import { useUser } from '@clerk/nextjs';

const navigation = [
  { name: 'Peluqueria', href: '/peluqueria' },
  { name: 'Paseadores', href: '/paseadores' },
  { name: 'Veterinarios', href: '/veterinarios' },
  { name: 'Productos', href: '/productos' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="bg-white mb-7">
      <nav
        className="mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <div className="logo-cont">
            <img
              className="h-12 w-12"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <span className="ml-2 text-lg">Directorio Pet</span>
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}

          <SignedIn>
            <button
              onClick={() => setIsOpen(true)}
              className="relative publish rounded bg-indigo-500 px-2 py-1 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Publica un anuncio
            </button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignUpUrl="/new-user"
              // redirectUrl="/new-user"
            >
              <button className="text-base font-semibold leading-6 text-gray-900">
                Registrate
              </button>
            </SignUpButton>
            <SignInButton mode="modal" redirectUrl="/" afterSignInUrl="/">
              <button className="text-base font-semibold leading-6 text-gray-900">
                Inicia sesion
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <SignedIn>
                  <div className="flex items-center ">
                    <UserButton afterSignOutUrl="/" />
                    {user && (
                      <p className="ml-2 text-base font-semibold">
                        Hola {user.firstName}!
                      </p>
                    )}
                  </div>
                </SignedIn>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <SignedOut>
                  <SignUpButton
                    mode="modal"
                    afterSignUpUrl="/new-user"
                    // redirectUrl="/new-user"
                  >
                    <button
                      type="button"
                      className="rounded bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Registrate
                    </button>
                  </SignUpButton>
                  <SignInButton mode="modal" redirectUrl="/" afterSignInUrl="/">
                    <button
                      type="button"
                      className="ml-4 rounded bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Inicia sesion
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="relative publish rounded bg-indigo-500 px-2 py-1 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Publica un anuncio
                  </button>
                </SignedIn>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {isOpen && <PostForm setIsOpen={setIsOpen} />}
    </header>
  );
}
