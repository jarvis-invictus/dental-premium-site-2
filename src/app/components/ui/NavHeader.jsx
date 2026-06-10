"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


function NavHeader() {
  const pathname = usePathname();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-primary-blue bg-white p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
        <Tab key={href} href={href} active={pathname === href} setPosition={setPosition}>
          {label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, href, active, setPosition }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className={`relative z-10 block rounded-full ${active ? "bg-primary-blue" : ""}`}
    >
      <Link
        href={href}
        className={`relative z-20 block px-3 py-1.5 text-xs uppercase font-semibold md:px-5 md:py-2.5 md:text-sm transition-colors ${active ? "text-white" : "text-gray-700 hover:text-dental-blue"}`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-primary-blue md:h-10"
    />
  );
};

export default NavHeader;
