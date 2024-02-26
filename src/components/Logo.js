import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

import LogoLight from '../../public/images/profile/logo_dark.png';
import LogoDark from '../../public/images/profile/logo_light.png';

const Logo = () => {
  const [mode] = useThemeSwitcher();

  // This useEffect will trigger whenever the 'mode' changes
  useEffect(() => {
    // You can put any logic here that you want to execute when the theme is switched
    // For example, you can force a re-render by updating state or performing other actions
  }, [mode]);

  return (
    <div className='flex items-center justify-center mt-1'>
      <Link href="/" className="w-48 h-48">
        <Image
          src={mode === "dark" ? LogoDark : LogoLight}
          alt={mode === "dark" ? "LogoLight" : "LogoDark"}
 
          className="w-full h-full object-cover transition hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default Logo;
