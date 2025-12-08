import { create } from "zustand";
import { ROLES } from "@/lib/constants";

export type Role = (typeof ROLES)[number];

type RoleState = {
  role: Role;
  setRole: (role: Role) => void;
};

export const useRoleStore = create<RoleState>((set) => ({
  role: "viewer",
  setRole: (role) => set({ role })
}));
