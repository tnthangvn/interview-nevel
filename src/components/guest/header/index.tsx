import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface GuestHeaderProps {
  className?: string;
  menus: {
    name: string;
    link?: string;
    active?: boolean;
  }[];
}

const link = cva(
  [
    'h-full border-b-[3px] border-b-white/0 text-base uppercase leading-[87px] text-white/50 transition-all duration-300 ease-in-out',
    'hover:border-b-white/100 hover:text-white',
  ],
  {
    variants: {
      type: {
        active: ['text-white'],
      },
    },
    defaultVariants: {
      type: null,
    },
  }
);

export const GuestHeader: FC<GuestHeaderProps> = (props) => (
  <div className={cn('fixed left-0 top-0 w-full bg-black/60 z-header', props.className)}>
    <div className="container flex items-center justify-between">
      <span className="i-logo py-[13px] text-logo text-white" />
      <ul className="flex h-full flex-row gap-[42px]">
        {props.menus.map((menu, idx) => (
          <li key={Number(idx)} className={cn(link({ type: menu.active ? 'active' : null }))}>
            <Link href={menu.link ?? '#'}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
