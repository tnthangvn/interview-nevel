/* eslint-disable react/jsx-props-no-spreading */
'use client';

import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTopPageSearchForm } from '@/hooks/top-page-search';
import { cn, link } from '@/lib/utils';

interface TopSidebarProps {
  className?: string;
  menus: {
    link: string;
    icon?: string;
    name: string;
    nameSP?: string;
    active?: boolean;
  }[];
}

const li =
  'max-md:relative max-md:flex max-md:flex-col max-md:pb-4 max-md:pt-10 max-md:text-[10px] max-md:text-black/10 max-md:uppercase max-md:items-center max-md:text-center max-md:gap-y-1';
const icon = 'max-md:absolute max-md:top-6 max-md:left-1/2 max-md:-translate-x-1/2 max-md:mr-0';

export const TopSidebar: FC<TopSidebarProps> = (props) => {
  const { form } = useTopPageSearchForm();
  return (
    <div className={cn(props.className)}>
      {props.menus.length ? (
        <ul className="flex w-full flex-row gap-y-4 max-md:border-b max-md:border-b-black/10 md:flex-col">
          <li className={cn('mb-4 max-md:!hidden', li)}>
            <Form {...form}>
              <form className="w-full">
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem className="relative flex gap-[5px] max-md:flex-col max-md:items-center max-md:justify-center">
                      <FormControl>
                        <>
                          <span className="i-search left-0 top-0 flex items-center text-xl text-black/10 md:absolute md:text-sm" />
                          <Input
                            className="!mt-0 bg-transparent px-0 pb-5 pt-1 text-[15.5px] font-semibold text-black/10 max-md:border-0 md:border-x-0 md:border-b md:border-t-0 md:border-b-black/10 md:px-6"
                            placeholder="Search"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </li>
          {props.menus.map((menu, idx) => (
            <li key={Number(idx)} className={cn('w-full')}>
              <Link
                className={cn(link({ type: menu.active ? 'active' : null }), li)}
                data-active={menu.active ? 'active' : ''}
                href={menu.link ?? '#'}
              >
                {menu.icon ? <span className={cn('mr-1', menu.icon, icon)} /> : null}
                <span className="md:hidden">{menu.nameSP ?? menu.name}</span>
                <span className="max-md:hidden">{menu.name}</span>
              </Link>
            </li>
          ))}
          <li className={cn('w-full md:hidden border-r border-r-black/10')}>
            <Link className={cn(li)} href="#">
              <span className={cn('mr-1 i-filter', icon)} />
              Search
            </Link>
          </li>
          <li className={cn('w-full md:hidden')}>
            <Link className={cn(li)} href="#">
              <span className={cn('mr-1 i-filter', icon)} />
              Filter
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
