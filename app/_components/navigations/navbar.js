"use client";

import logo from "@/public/logos/logo_long.png";
import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white pt-3 pb-2 p-0">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="logo" height={42} priority />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HambergerMenu />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link href="/" className="fw-bold nav-link text-black">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/#about" className="fw-bold nav-link text-black">
                About Us
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/#works" className="fw-bold nav-link text-black">
                Our Works
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/#stories" className="fw-bold nav-link text-black">
                Success Stories
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/#questions" className="fw-bold nav-link text-black">
                Faq
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link href="/#contact" className="fw-bold nav-link text-black">
                Contact Us
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                href="#"
                className="fw-bold nav-link btn-dash btn-primary px-5"
              >
                Download Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
