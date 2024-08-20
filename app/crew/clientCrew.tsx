"use client";
import React, { ReactElement, useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import "../crew/crew.scss";
import typography from "../_components/typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import { membersDataProps } from "../_interface/crew";

export default function ClientCrew({ membersData }: membersDataProps) {
  return (
    <>
      <Swiper
        modules={[Pagination, Keyboard]}
        pagination={{ clickable: true }}
        loop
        keyboard
      >
        {membersData.map((crewMember, i): ReactElement => {
          return (
            <SwiperSlide key={i}>
              <div className="h-[100vh] sm:h-[80vh] grid md:grid-cols-[50%,1fr] md:pb-12 gap-12 xl:gap-0">
                <figure className="flex flex-col justify-center relative gap-12 md:gap-0">
                  <div className="flex flex-col gap-6 myGridEle">
                    <typography.HeaderS style="text-gray-400">
                      {crewMember.role}
                    </typography.HeaderS>
                    <typography.HeaderM>{crewMember.name}</typography.HeaderM>
                    <p>{crewMember.bio}</p>
                  </div>
                </figure>

                <picture className="justify-self-end self-start myGridEle mx-auto w-[80%] sm:w-auto contentDescription mt-14">
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
