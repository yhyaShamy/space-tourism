import React from "react";
import Home from "./home/page";
import PageStateHandler from "./_components/zustand/PageStateHandler";

export default function page() {
  return (
    <>
      <PageStateHandler>home</PageStateHandler>
      <Home />
    </>
  );
}
