"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" }, // ← change to real URL later
  { id: 4, title: "Contact", url: "/" },       // ← same
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMP user – replace with real auth later (e.g. useSession from next-auth)
  const user = false;

  return (
    <div className="relative z-50">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
      >
        <Image
          src={open ? "/close.png" : "/open.png"}
          alt={open ? "Close menu" : "Open menu"}
          width={28}
          height={28}
          className="cursor-pointer"
          priority // good for above-the-fold icon
        />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden">
          <div className="bg-red-600 text-white absolute top-20 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-10 text-4xl font-medium">
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={() => setOpen(false)}
                className="hover:text-red-200 transition"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href={user ? "/orders" : "/login"}
              onClick={() => setOpen(false)}
              className="hover:text-red-200 transition"
            >
              {user ? "Orders" : "Login"}
            </Link>

            <Link href="/cart" onClick={() => setOpen(false)}>
              <CartIcon /> {/* CartIcon already has Link inside – but ok to nest if needed */}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;