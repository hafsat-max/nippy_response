import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/nippyLogo.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="border-b border-red-600 h-16">
      {/* <Image src={Logo} alt="Logo" width="12" height="40" /> */}
      <Link href="/">
        <Image
          src={Logo}
          alt="Nippy Logo"
          width={128}
          height={36}
          className="w-[110px] md:w-[128px] h-auto border-4"
        />
      </Link>
    </div>
  );
};

export default Navbar;
