import React from "react";
import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
// Deal with coming props
interface MyComponentProps {
  children: string | number;
  style?: string;
}

const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const barlowCondensedBold = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const HeaderXL: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[9rem] leading-[-171.9%] tracking-normal ${style} ${bellefair.className} uppercase`;
  return <h1 className={className}>{children}</h1>;
};

export const HeaderL: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[6.25rem] leading-[-114.6%] tracking-normal ${style} ${bellefair.className} uppercase`;
  return <h2 className={className}>{children}</h2>;
};

export const HeaderM: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[2rem] sm:text-[2.6rem] md:text-[2.8rem] xl:text-[3.5rem] leading-[-64.2%] tracking-normal ${style} ${bellefair.className} uppercase`;
  return <h2 className={className}>{children}</h2>;
};

export const HeaderS: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[1.8rem] leading-[-36.7%] tracking-normal ${style} ${bellefair.className} uppercase`;
  return <h2 className={className}>{children}</h2>;
};

export const HeaderXS: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[1.75rem] leading-[-33.6%] tracking-[4px] ${style} ${barlowCondensed.className} uppercase`;
  return <h3 className={className}>{children}</h3>;
};

export const SubHeaderL: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[1.75rem] leading-[-32.1%] tracking-[4px] ${style} ${bellefair.className} uppercase`;
  return <h4 className={className}>{children}</h4>;
};

export const SubHeaderS: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[0.875rem] leading-[-16.8%] tracking-[4px] ${style} ${barlowCondensed.className} uppercase`;
  return <h4 className={className}>{children}</h4>;
};

export const NavText: React.FC<MyComponentProps> = ({ children, style }) => {
  const className = `text-[1rem] leading-[-19.2%] tracking-[4px] ${style} ${
    style ? barlowCondensedBold.className : barlowCondensed.className
  } uppercase navText`;
  return <h4 className={className}>{children}</h4>;
};

const typography = {
  HeaderXL,
  HeaderL,
  HeaderM,
  HeaderS,
  HeaderXS,
  SubHeaderL,
  SubHeaderS,
  NavText,
};

export default typography;
