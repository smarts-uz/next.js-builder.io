import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-row relative shrink-0 box-border w-full justify-center p-5">
      <div className="flex flex-row relative shrink-0 box-border w-full gap-5 max-w-[1200px]">
        <Link href="/" className="relative shrink-0 box-border h-auto cursor-pointer pointer-events-auto">
          Home
        </Link>

        <Link href="/about" className="relative shrink-0 box-border h-auto cursor-pointer pointer-events-auto">
          About us
        </Link>

        <Link href="/contact" className="relative shrink-0 box-border h-auto cursor-pointer pointer-events-auto">
          Contact
        </Link>
      </div>
    </div>
  );
};
