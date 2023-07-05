"use client";

import Image from "next/image";
import img from "/public/logo.png";
import Link from "next/link";
function Header() {
  return (
    <header className="">
      <Link href="/">
        <Image
          src={img}
          alt="logo"
          width={100}
          height={100}
          className="object-contain mr-10"
        />
      </Link>
      <nav>
        <div>
          <Link href="/">
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>Products</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>Contact</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>About us</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
