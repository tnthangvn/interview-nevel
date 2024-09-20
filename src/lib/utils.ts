import { cva } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const link = cva(
  [
    'h-full whitespace-break-spaces border-b-[3px] border-b-white/0 text-sm text-black/40 transition-all duration-300 ease-in-out',
    'hover:text-black',
  ],
  {
    variants: {
      type: {
        active: ['text-black'],
      },
    },
    defaultVariants: {
      type: null,
    },
  }
);
