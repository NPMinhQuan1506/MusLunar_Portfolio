import { create } from "zustand";

type StoryState = {
  progress: number;
  setProgress: (value: number) => void;
};

export const useStoryStore = create<StoryState>((set) => ({
  progress: 0,
  setProgress: (value) => set({ progress: value })
}));
