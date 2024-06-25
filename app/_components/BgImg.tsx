"use client";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Image, { StaticImageData } from "next/image";
import { useCurrentPage } from "./zustand/currentPageStore";
import homeDesktop from "../../public/assets/home/background-home-desktop.jpg";
import homeTablet from "../../public/assets/home/background-home-tablet.jpg";
import homeMobile from "../../public/assets/home/background-home-mobile.jpg";

import destinationDesktop from "../../public/assets/destination/background-destination-desktop.jpg";
import destinationTablet from "../../public/assets/destination/background-destination-tablet.jpg";
import destinationMobile from "../../public/assets/destination/background-destination-mobile.jpg";

import crewDesktop from "../../public/assets/crew/background-crew-desktop.jpg";
import crewTablet from "../../public/assets/crew/background-crew-tablet.jpg";
import crewMobile from "../../public/assets/crew/background-crew-mobile.jpg";

import technologyDesktop from "../../public/assets/technology/background-technology-desktop.jpg";
import technologyTablet from "../../public/assets/technology/background-technology-tablet.jpg";
import technologyMobile from "../../public/assets/technology/background-technology-mobile.jpg";

export default function BgImg() {
  // Get current page imgs

  const { currentPage } = useCurrentPage();

  interface PageImgs {
    name: string;
    desktop: StaticImageData;
    tablet: StaticImageData;
    mobile: StaticImageData;
  }

  const pagesImgs: PageImgs[] = [
    {
      name: "home",
      desktop: homeDesktop,
      mobile: homeMobile,
      tablet: homeTablet,
    },
    {
      name: "destination",
      desktop: destinationDesktop,
      mobile: destinationMobile,
      tablet: destinationTablet,
    },
    {
      name: "crew",
      desktop: crewDesktop,
      mobile: crewMobile,
      tablet: crewTablet,
    },
    {
      name: "technology",
      desktop: technologyDesktop,
      mobile: technologyMobile,
      tablet: technologyTablet,
    },
  ];

  const [currentPageImgs, setcurrentPageImgs] = useState<PageImgs>(
    pagesImgs[0]
  );

  useEffect(() => {
    if (currentPage) {
      setcurrentPageImgs(
        pagesImgs.filter((pageImg) => pageImg.name == currentPage)[0]
      );
    }
  }, [currentPage]);
  const [src, setSrc] = useState<StaticImageData>(destinationDesktop);

  const responsiveImg = function () {
    const width = $(window).width();
    if (width) {
      if (width >= 640 && width <= 1024) {
        setSrc(currentPageImgs.tablet);
      } else if (width >= 1024) {
        setSrc(currentPageImgs.desktop);
      } else {
        setSrc(currentPageImgs.mobile);
      }
    }
  };

  useEffect(() => {
    $(window).on("resize", responsiveImg);
    responsiveImg();
  }, [currentPageImgs]);

  return (
    <Image
      src={src}
      alt="space"
      fill
      className="-z-10 mb-28 object-cover object-top"
      placeholder="blur"
    ></Image>
  );
}

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
