"use client";
import React, { ReactElement, useEffect, useState } from "react";
import typography from "../_components/typography";
import $ from "jquery";
import Image from "next/image";
import {
  handleClick,
  NavBarProps,
  technologyData,
} from "../_interface/technology";

interface technologyProp {
  data: technologyData[];
}

export default function ClientTechnology({ data }: technologyProp) {
  // Handle data
  const [technology, settechnology] = useState<technologyData>(data[0]);

  const handleClick = function (name: string) {
    $(".myGridEle").fadeOut(200, function () {
      $(".myGridEle").fadeIn(200);
      settechnology(data.filter((technology) => technology.name == name)[0]);
    });
  };

  // Check is window width more than 1024px for image design

  const [isWidthMoreThanLg, setisWidthMoreThanLg] = useState(true);
  useEffect(() => {
    const width = $(window).width();
    if (width) {
      setisWidthMoreThanLg(width >= 1024);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[55%,1fr] gap-16">
        <div className="flex flex-col lg:flex-row gap-12 self-center">
          <NavBar
            handleClick={handleClick}
            technologyList={data}
            technologyName={technology.name}
          />

          <div className="flex flex-col gap-6 myGridEle">
            <typography.HeaderS style="text-gray-400">
              THE TERMINOLOGY…
            </typography.HeaderS>
            <typography.HeaderM style="w-full ">
              {technology.name}
            </typography.HeaderM>
            <p>{technology.description}</p>
          </div>
        </div>
        <picture className="myGridEle col-start-1 row-start-1 lg:col-start-2">
          <Image
            src={
              isWidthMoreThanLg
                ? technology.images.portrait
                : technology.images.landscape
            }
            alt={technology.name}
            width={500}
            height={500}
            className="w-full h-full block object-contain"
            placeholder="blur"
            blurDataURL={technology.images.portrait}
          />
        </picture>
      </div>
    </>
  );
}

//   re-use navigate bar
function NavBar({
  technologyList,
  handleClick,
  technologyName,
}: NavBarProps): ReactElement {
  const defaultClass =
    "size-16 transition-shadow duration-300 shadow-[0px_0px_0px_2px_#9ca3af] hover:shadow-[0px_0px_0px_2px_#fff] rounded-full flex justify-center items-center cursor-pointer";
  const activeClass =
    "size-16 transition-shadow duration-300 shadow-[0px_0px_0px_2px_#fff] bg-white rounded-full flex justify-center items-center cursor-pointer text-dark";

  return (
    <ul className="flex lg:flex-col justify-center flex-row gap-8">
      {technologyList.map((technology, i): ReactElement => {
        return (
          <li
            className={
              technologyName == technology.name ? activeClass : defaultClass
            }
            onClick={() => handleClick(technology.name)}
            key={i}
          >
            <typography.HeaderS style="leading-none">
              {1 + i}
            </typography.HeaderS>
          </li>
        );
      })}
    </ul>
  );
}
