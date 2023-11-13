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

const Navbar = () => {
  return (
    <nav>
      <div className="logo-cont">
        <Image src={logo} alt="website logo" className="img" />
        <span>Pet Services</span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div className="user-cont">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignUpButton
            mode="modal"
            afterSignUpUrl="/new-user"
            redirectUrl="/new-user"
          >
            <button>Registrate</button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button>Inicia sesion</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
