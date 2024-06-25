"use client";
import React, { ReactElement, useState } from "react";
import typography from "../_components/typography";
import Image from "next/image";
import { Crew } from "./page";
import $ from "jquery";

interface membersDataProps {
  membersData: Crew[];
}

export default function ClientCrew({ membersData }: membersDataProps) {
  // Handle data comes from crew
  const [crewMember, setCrewMember] = useState<Crew>(membersData[0]);

  //  Re use Dots
  const defaultClass =
    "size-4 bg-gray-400 transition-colors cursor-pointer duration-300 hover:bg-gray-300 rounded-full";

  const activeClass =
    "size-4 bg-white transition-colors cursor-pointer duration-300 rounded-full";
  function dotsItem(name: string, i: number): ReactElement {
    // Handle click on dots
    const handleOnClick = function () {
      $(".myGridEle").fadeOut(200, function () {
        setCrewMember(membersData.filter((member) => member.name == name)[0]);
        $(".myGridEle").fadeIn(200);
      });
    };
    return (
      <li
        className={crewMember.name == name ? activeClass : defaultClass}
        key={i}
        onClick={handleOnClick}
      ></li>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-[50%,1fr] md:pb-12 gap-12 xl:gap-0 md:h-[84dvh]">
        <div className="flex flex-col justify-center relative gap-12 md:gap-0">
          <div className="flex flex-col gap-6 myGridEle">
            <typography.HeaderS style="text-gray-400">
              {crewMember.role}
            </typography.HeaderS>
            <typography.HeaderM>{crewMember.name}</typography.HeaderM>
            <p>{crewMember.bio}</p>
          </div>
          {/* DOTES */}
          <ul className=" flex gap-6 justify-center md:justify-start mt-16">
            {membersData.map((memberData, i) => dotsItem(memberData.name, i))}
          </ul>
        </div>

        <picture className="justify-self-end self-start myGridEle mx-auto">
          <Image
            src={crewMember.images.webp}
            alt={crewMember.name}
            width={500}
            height={400}
            className="object-cover"
            placeholder="blur"
            blurDataURL={crewMember.images.webp}
          />
        </picture>
      </div>
    </>
  );
}
