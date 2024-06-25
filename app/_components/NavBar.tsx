"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/shared/logo.svg";
import { NavText } from "./typography";
import Link from "next/link";
import hamburgerIcon from "../../public/assets/shared/icon-hamburger.svg";
import closeIcon from "../../public/assets/shared/icon-close.svg";
import $ from "jquery";
import { useCurrentPage } from "./zustand/currentPageStore";

export default function NavBar() {
  // re-use nav items
  const defaultClassName = ` h-full relative flex items-center after:absolute after:bg-gray/0 after:h-full after:right-0 after:w-1 sm:after:w-full sm:after:h-1 sm:after:bottom-0 after:transition-color after:duration-300 hover:after:bg-gray-400 gap-2 navItem`;

  const activeClassName = ` h-full relative flex items-center after:absolute after:bg-white after:h-full after:right-0 after:w-1 sm:after:w-full sm:after:h-1 sm:after:bottom-0 gap-2 navItem after:transition-color after:duration-300`;

  // Handle active nav item
  const { currentPage } = useCurrentPage();

  function navItem(number: number | string, name: string) {
    return (
      <Link
        href={`/${name}`}
        id={name}
        className={name == currentPage ? activeClassName : defaultClassName}
      >
        <NavText style="font-bold">{number}</NavText>
        <NavText>{name}</NavText>
      </Link>
    );
  }
  // handle nav open and close in mobile screen

  const [isOpened, setisOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      $(".mobileScreenNav").animate({ right: "0%" }, 400);
    } else {
      $(".mobileScreenNav").animate({ right: "-58.333333%" }, 400);
    }
    $(window).on("click", function (e) {
      if (
        !$(e.target).hasClass("mobileScreenNavBg") &&
        !$(e.target).parent("li").length &&
        !$(e.target).hasClass("navItem") &&
        !$(e.target).hasClass("navText") &&
        !$(e.target).hasClass("navImg") &&
        isOpened
      ) {
        setisOpened(!isOpened);
      }
    });
  }, [isOpened]);

  return (
    <>
      <nav className="relative mx-auto mt-4 sm:mt-0 grid h-28 w-11/12 grid-cols-2 items-center justify-between bg-transparent sm:mx-0 sm:w-full sm:grid-cols-[15%,1fr]  lg:grid-cols-[1fr,1fr] xl:mt-12">
        <picture className="sm:mx-auto lg:mx-0 lg:px-8">
          <Image src={logo} alt="space-tourism" className="xl:ms-4"></Image>
        </picture>
        <div className="relative hidden h-full w-full items-center bg-slate-900 xl:bg-dark/30 sm:flex">
          <div className="absolute right-[96%] hidden h-[1px] w-[53%] bg-white/30 xl:flex xl:right-[94%] xl:w-[87%]"></div>
          <ul className="me-8 ms-auto flex h-full items-center gap-12 text-white justify-self-end px-6">
            <li className="h-full">{navItem("00", "home")}</li>
            <li className="h-full">{navItem("01", "destination")}</li>
            <li className="h-full">{navItem("02", "crew")}</li>
            <li className="h-full">{navItem("03", "technology")}</li>
          </ul>
        </div>
        {/* Nav items in mobile screen */}
        <Image
          src={isOpened ? closeIcon : hamburgerIcon}
          alt="hamburger icon"
          className="navImg z-50 cursor-pointer justify-self-end sm:hidden"
          onClick={() => setisOpened(!isOpened)}
        ></Image>
      </nav>
      <ul
        className={`mobileScreenNav absolute right-[-58.333333%] top-0 h-full w-7/12 flex-col justify-center gap-7 p-6 text-white sm:hidden z-40`}
      >
        <div className="mobileScreenNavBg absolute top-0 z-0 h-full w-full bg-dark/60 backdrop-blur-md"></div>
        <li className="mt-36 h-7 ps-4 sm:h-16">{navItem("00", "home")}</li>
        <li className="mt-7 h-7 ps-4 sm:h-16">
          {navItem("01", "destination")}
        </li>
        <li className="mt-7 h-7 ps-4 sm:h-16">{navItem("02", "crew")}</li>
        <li className="mt-7 h-7 ps-4 sm:h-16">{navItem("03", "technology")}</li>
      </ul>
    </>
  );
}
