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
    active?: boolean;
  }[];
}

export const TopSidebar: FC<TopSidebarProps> = (props) => {
  const { form } = useTopPageSearchForm();
  return (
    <div className={cn(props.className)}>
      <Form {...form}>
        <form className="w-full">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="relative flex gap-[5px]">
                <FormControl>
                  <>
                    <span className="i-search absolute left-0 top-0 flex items-center text-sm text-black/10" />
                    <Input
                      className="!mt-0 border-x-0 border-b border-t-0 border-b-black/10 bg-transparent px-6 pb-5 pt-1 text-[15.5px] font-semibold text-black/10"
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
      {props.menus.length ? (
        <ul className="mt-4 flex w-full flex-col gap-y-4">
          {props.menus.map((menu, idx) => (
            <li key={Number(idx)}>
              <Link
                className={cn(link({ type: menu.active ? 'active' : null }))}
                href={menu.link ?? '#'}
              >
                {menu.icon ? <span className={cn('mr-1', menu.icon)} /> : null}
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
