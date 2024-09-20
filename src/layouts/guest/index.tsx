import { FC, ReactNode } from 'react';
import { GuestFooter } from '@/components/guest/footer';
import { GuestHeader } from '@/components/guest/header';
import { SidebarToggleProvider } from '@/hooks/SidebarToggle.context';

interface GuestProps {
  children: ReactNode;
}

const menus = [
  { name: 'Home', link: '#' },
  { name: 'Games', link: '#' },
  { name: 'News', link: '#' },
  { name: 'Math', link: '#' },
  { name: 'Company', link: '#' },
  { name: 'Events', link: '#' },
  { name: 'Partners', link: '#' },
];

export const Guest: FC<GuestProps> = (props) => (
  <SidebarToggleProvider>
    <div className="h-screen bg-wild-sand">
      <GuestHeader menus={menus} />
      <main>{props.children}</main>
      <GuestFooter className="container pb-[101px]" />
    </div>
  </SidebarToggleProvider>
);
