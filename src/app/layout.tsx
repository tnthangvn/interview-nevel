import type { Metadata } from 'next';
import '@/app/globals.css';
import { FC, ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'Interview Nevel',
  description: 'Interview',
};

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => (
  <html lang="en">
    <body>
      {props.children}
    </body>
  </html>
);
export default RootLayout;
