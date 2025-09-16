import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeEmptyFilters(filters?: Record<string, any>) {
  if (!filters) return {};
  return Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== "" && v !== undefined)
  );
}
