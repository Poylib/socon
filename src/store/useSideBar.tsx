import { create } from "zustand";

type CartStore = {
  isOpen: boolean;
  setOpenSide: () => void;
};

const useSidebar = create<CartStore>((set) => ({
  isOpen: false,
  setOpenSide: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
