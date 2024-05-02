import { create } from "zustand";

type MainStore = {
  currentBg: string;
  setCurrentBg: (newColor: string) => void;
};

const useMainAnimation = create<MainStore>((set) => ({
  currentBg: "#222",
  setCurrentBg: (newColor: string) => set({ currentBg: newColor }),
}));

export default useMainAnimation;
