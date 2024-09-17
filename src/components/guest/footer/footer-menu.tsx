import Link from 'next/link';
import { FC } from 'react';
import { cn, link } from '@/lib/utils';

export interface FooterMenuProps {
  className?: string;
  menus: {
    name: string;
    link?: string;
    active?: boolean;
  }[];
}

export const FooterMenu: FC<FooterMenuProps> = (props) => (
  <ul className={cn('flex flex-col list-none gap-y-[10px] pt-10', props.className)}>
    {props.menus.map((menu, idx) => (
      <li key={Number(idx)}>
        <Link className={cn(link({ type: menu.active ? 'active' : null }))} href={menu.link ?? '#'}>
          {menu.name}
        </Link>
      </li>
    ))}
  </ul>
);
