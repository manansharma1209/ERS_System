import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Briefcase, Coffee, Computer, HelpCircle } from 'lucide-react';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCategoryIcon(category) {
  switch (category) {
    case 'TRAVEL':
      return Briefcase;
    case 'FOOD':
      return Coffee;
    case 'EQUIPMENT':
      return Computer;
    default:
      return HelpCircle;
  }
}