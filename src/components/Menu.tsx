"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/working-hours" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!isOpen ? (
        <Image
          src="/open.png"
          alt="Open Menu"
          width={24}
          height={24}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Close Menu"
          width={24}
          height={24}
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 w-full top-24 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setIsOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        ) : (
          <Link href="/orders" onClick={() => setIsOpen(false)}>Orders</Link>
        )}
        <Link href="/cart" onClick={() => setIsOpen(false)}><CartIcon /></Link>
      </div>
      )}
    </div>
  );
};

export default Menu;
