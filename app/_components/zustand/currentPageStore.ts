import { create } from "zustand";

interface currentPageInterface {
  currentPage: string | null;
  setCurrentPage: (currentPage: string) => void;
}

export const useCurrentPage = create<currentPageInterface>()((set) => ({
  currentPage: null,
  setCurrentPage: (currentPage: string | null) => set(() => ({ currentPage })),
}));
