"use client";

import Image from "next/image";
import img from "/public/logo.png";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <header className="flex justify-between items-center pt-3 pb-3">
      <Link href="/">
        <Image
          src={img}
          alt="logo"
          width={50}
          className="object-contain ml-10"
        />
      </Link>
      <nav className="flex gap-10">
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
      <AiOutlineSearch className="mr-10"/>
    </header>
  );
}

export default Header;
