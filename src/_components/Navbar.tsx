import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link href="/" className="logo">
          Logo
        </Link>

        <div className="links">
          <ul className="tabs">
            <Link href="/events">Events</Link>
            <Link href="/tickets">My Tickets</Link>
            <Link href="/about">About Projects</Link>
          </ul>
        </div>

        <Link href="/" className="profile">
          My Tickets
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
