import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind-friendly class merge helper.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
