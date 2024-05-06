import { create } from "zustand";

type MainStore = {
  currentColor: string;
  panel: number;
  setCurrentColor: (newColor: string) => void;
  setPanel: (num: number) => void;
};

const useMainAnimation = create<MainStore>((set) => ({
  currentColor: "#222",
  panel: 0,
  setCurrentColor: (newColor) => set({ currentColor: newColor }),
  setPanel: (num) => set({ panel: num }),
}));

export default useMainAnimation;
