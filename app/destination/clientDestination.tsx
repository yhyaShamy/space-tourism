"use client";

import React, { useState } from "react";
import typography from "../_components/typography";
import Image from "next/image";
import $ from "jquery";
import {
  destinationObj,
  destinationProps,
  handleDestination,
  NavBarProps,
} from "../_interface/destination";

export default function ClientDestination({
  destinationsData,
}: destinationProps) {
  // Handle data comes from destination

  const [destination, setdestination] = useState<destinationObj>(
    destinationsData[0]
  );

  function handleDestination(name: string) {
    setdestination(
      destinationsData.filter((destination) => destination.name == name)[0]
    );
  }

  return (
    <div className="grid md:grid-cols-[50%,1fr] xl:grid-cols-[58%,1fr] gap-12 xl:gap-0 ">
      <picture className="mx-auto sm:mx-0 xl:w-[70%] w-[50%] sm:w-auto myGridElemt">
        <Image
          src={destination.images.webp}
          alt={destination.name}
          width={500}
          height={500}
          className="w-full h-full"
          placeholder="blur"
          blurDataURL={destination.images.webp}
        />
      </picture>
      <div className="text-lightBlue">
        <NavBar
          currentDestination={destination.name}
          destinationData={destinationsData}
          handleDestination={handleDestination}
        />
        <div className="myGridElemt">
          <typography.HeaderL style="mb-14 text-white">
            {destination.name}
          </typography.HeaderL>
          <p>{destination.description}</p>
          <div className="pt-12 mt-12 border-t border-slate-500/80 flex md:justify-between flex-col md:flex-row justify-center gap-8 md:gap-0">
            <div className="flex flex-col gap-2">
              <typography.SubHeaderS>avg. distance</typography.SubHeaderS>
              <typography.SubHeaderL style="text-white">
                {destination.distance}
              </typography.SubHeaderL>
            </div>
            <div className="flex flex-col gap-2">
              <typography.SubHeaderS>Est. travel time</typography.SubHeaderS>
              <typography.SubHeaderL style="text-white">
                {destination.travel}
              </typography.SubHeaderL>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar({
  destinationData,
  handleDestination,
  currentDestination,
}: NavBarProps) {
  const defaultClassName =
    "cursor-pointer uppercase transition-colors sm:z-0 duration-300 hover:text-white pb-1 relative after:bg-white/0 after:right-[54%] hover:after:bg-gray-400 after:transition-colors after:duration-300 after:w-full after:h-1 after:absolute after:bottom-0 after:translate-x-1/2";

  const activeClassName =
    "cursor-pointer uppercase  relative after:absolute after:bg-white after:right-[54%] after:translate-x-1/2 after:transition-colors after:duration-300 after:w-[100%] after:h-1 after:bottom-0 text-white  navItem pb-1 supNavItem";

  // Re-use nav bar
  return (
    <ul className="flex gap-4 mb-20 justify-center md:justify-start">
      {destinationData.map((destination, i) => {
        return (
          <li
            id={destination.name}
            key={i}
            className={
              currentDestination == destination.name
                ? activeClassName
                : defaultClassName
            }
            onClick={(e) => {
              $(".myGridElemt").fadeOut(200, () => {
                $(".myGridElemt").fadeIn(200);
                handleDestination(destination.name);
              });
            }}
          >
            <typography.SubHeaderS>{destination.name}</typography.SubHeaderS>
          </li>
        );
      })}
    </ul>
  );
}
