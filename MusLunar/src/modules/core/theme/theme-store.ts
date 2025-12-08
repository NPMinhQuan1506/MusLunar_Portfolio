import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  toggle: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "dark",
  toggle: () => set({ theme: get().theme === "dark" ? "light" : "dark" })
}));
