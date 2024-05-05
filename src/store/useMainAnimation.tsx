import { create } from "zustand";

type MainStore = {
  currentBg: string;
  panel: number;
  setCurrentBg: (newColor: string) => void;
  setPanel: (num: number) => void;
};

const useMainAnimation = create<MainStore>((set) => ({
  currentBg: "#222",
  panel: 0,
  setCurrentBg: (newColor) => set({ currentBg: newColor }),
  setPanel: (num) => set({ panel: num }),
}));

export default useMainAnimation;
