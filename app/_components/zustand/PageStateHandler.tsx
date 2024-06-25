"use client";
import React, { useEffect } from "react";
import { useCurrentPage } from "./currentPageStore";

interface pageState {
  children: string;
}
export default function PageStateHandler({ children }: pageState) {
  const { setCurrentPage, currentPage } = useCurrentPage();
  useEffect(() => {
    setCurrentPage(children);
  }, [children]);
  return null;
}
