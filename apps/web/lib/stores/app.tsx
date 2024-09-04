import { create } from "zustand";

interface MobileMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
