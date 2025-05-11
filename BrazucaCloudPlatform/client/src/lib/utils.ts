import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: (element as HTMLElement).offsetTop - 80,
      behavior: "smooth",
    });
  }
}
