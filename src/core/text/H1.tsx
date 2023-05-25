"use client";
import React, { FC, PropsWithChildren, HTMLAttributes } from "react";

interface H1Prop extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
}

type H1Props = PropsWithChildren<H1Prop>;

export const H1: FC<H1Props> = ({ children, className }, props) => {
  return (
    <h1
      className={`font-montserrat font-extrabold text-white text-lg md:text-xl lg:text-2xl 
  desktop:text-5xl mb-4 phone:mt-0 tablet:mt-5 ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
