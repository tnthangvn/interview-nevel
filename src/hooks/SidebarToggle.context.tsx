'use client';

import { noop } from 'lodash';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface SidebarToggleContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export type SidebarToggleProps = {
  children: ReactNode;
};

export const sidebarToggleContext = createContext<SidebarToggleContext>({
  isOpen: false,
  setIsOpen: noop,
});
export const SidebarToggleProvider: FC<SidebarToggleProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return (
    <sidebarToggleContext.Provider value={value}>{props.children}</sidebarToggleContext.Provider>
  );
};
