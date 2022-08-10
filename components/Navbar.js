import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between absolute w-full px-8">
      <Image
        className=""
        src="/text-logo.png"
        width={140}
        height={35}
        alt="logo"
      />
      <button className="flex sticky top-0 z-50 h-[50px] items-center backdrop-blur-sm shadow-lg sm:rounded-3xl px-4 py-2 md:px-6 md:py-3 text-xl bg-clip-padding border border-gray-200 bg-gradient bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] bg-opacity-20 font-bold">
        <Link href="/register">Register </Link>
      </button>
    </div>
  );
};

export default Navbar;
