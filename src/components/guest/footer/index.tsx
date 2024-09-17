import Link from 'next/link';
import { FC } from 'react';
import { FooterMenu, FooterMenuProps } from '@/components/guest/footer/footer-menu';
import { CommonAccordion } from '@/components/ui/common/common-accordion';
import { cn } from '@/lib/utils';

interface GuestFooterProps {
  className?: string;
}
interface FooterMenus {
  name: string;
  menus: FooterMenuProps['menus'];
}

const footerMenu: FooterMenus[] = [
  {
    name: 'WEB MAP',
    menus: [
      { name: 'Home', link: '#', active: true },
      { name: 'Game', link: '#' },
      { name: 'News', link: '#' },
      { name: 'Math', link: '#' },
      { name: 'Company', link: '#' },
      { name: 'Events', link: '#' },
      { name: 'Partners', link: '#' },
    ],
  },
  {
    name: 'ABOUT US',
    menus: [
      { name: 'Licensing', link: '#' },
      { name: 'Certification', link: '#' },
      { name: 'Responsible Gaming', link: '#' },
      { name: 'Exhibitions', link: '#' },
      { name: 'Copyright Protection', link: '#' },
      { name: 'Privacy Policy', link: '#' },
    ],
  },
  {
    name: 'EVENTS',
    menus: [
      { name: 'PG ICE 2017', link: '#' },
      { name: 'PG ICE 2018', link: '#' },
      { name: 'PG ICE 2019', link: '#' },
      { name: 'About ICE', link: '#' },
    ],
  },
  {
    name: 'OUR PARTNERS',
    menus: [
      { name: 'Relax Gaming', link: '#' },
      { name: 'Leander Games', link: '#' },
    ],
  },
];

const accordionMenu = footerMenu.map((item) => ({
  name: item.name,
  children: <FooterMenu className="mt-1 pt-4" menus={item.menus} />,
}));

const socials: { icon: string; link?: string; color?: string }[] = [
  { icon: 'i-twitter', link: '#', color: 'text-[#1EA1F1]' },
  { icon: 'i-yt', link: '#', color: 'text-[#FF2500]' },
  { icon: 'i-in', link: '#', color: 'text-[#0273B0]' },
];

export const GuestFooter: FC<GuestFooterProps> = (props) => (
  <footer className={cn(props.className)}>
    <div className="flex flex-wrap justify-between gap-y-5 border-t border-t-black/10 pt-[101px] max-xl:flex-col max-md:flex-col-reverse max-md:pt-11">
      <div className="w-full pr-0 md:w-auto">
        <span className="i-logo py-[13px] text-[30px] text-[#A59E9E] max-md:hidden" />
        <p className="mt-3 whitespace-break-spaces pt-0.5 text-[11.63px] leading-4 text-black/40">
          Valletta Buildings, South Street,{'\n'}Valletta - VLT 1103 Malta
        </p>
        <ul className="flex list-none gap-4 pt-10">
          {socials.map((social, idx) => (
            <li
              key={Number(idx)}
              className={cn(
                'text-base',
                `hover:opacity-80 transition-all duration-300 ease-in-out`,
                social?.color ?? ''
              )}
            >
              <Link href={social.link ?? '#'}>
                <span className={social.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-8">
        <div className="flex h-full flex-row flex-wrap gap-[100px] max-xl:gap-[14px] max-md:w-full">
          {footerMenu.map((item, i) => (
            <div key={Number(i)} className="max-xl:w-1/2 max-md:hidden">
              <h3 className="text-[13.23px] font-semibold">{item.name}</h3>
              <FooterMenu className="mt-1 pt-4" menus={item.menus} />
            </div>
          ))}
          <CommonAccordion
            className="flex w-full flex-col gap-x-8 md:hidden"
            collapsible={false}
            items={accordionMenu}
            orientation="horizontal"
          />
        </div>
      </div>
    </div>
    <div className="mt-[50px] border-t border-t-black/10 pt-10">
      <p>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);
