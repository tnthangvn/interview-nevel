'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { sidebarToggleContext } from '@/hooks/SidebarToggle.context';
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

export const GuestHeader: FC<GuestHeaderProps> = (props) => {
  const { isOpen, setIsOpen } = useContext(sidebarToggleContext);
  return (
    <div className={cn('fixed left-0 top-0 w-full md:bg-black/60 z-header', props.className)}>
      <div className="container flex items-center justify-between">
        <span className="i-logo py-[13px] text-logo text-white" />
        <span
          className="i-hamburger cursor-pointer py-[13px] text-xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={cn('group transition-all duration-300 ease-in-out relative', [
            'max-md:fixed',
            'max-md:fixed',
            'max-md:top-0',
            'max-md:-left-full',
            'max-md:size-full',
            'max-md:z-[100]',
            'max-md:bg-white/80',
            'max-md:data-[state=open]:left-0',
            'max-md:p-20',
          ])}
          data-state={isOpen ? 'open' : 'closed'}
        >
          <span
            className="i-plus absolute right-10 top-10 rotate-45 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul
            className={cn(
              ['max-md:flex-col', 'max-md:flex-start', 'max-md:h-auto', 'max-md:'],
              'flex h-full flex-row gap-5 lg:gap-[42px]'
            )}
          >
            {props.menus.map((menu, idx) => (
              <li
                key={Number(idx)}
                className={cn(
                  ['max-md:text-black', 'max-md:leading-[1]'],
                  link({ type: menu.active ? 'active' : null })
                )}
              >
                <Link href={menu.link ?? '#'}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
