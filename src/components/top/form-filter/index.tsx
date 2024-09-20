/* eslint-disable react/jsx-props-no-spreading */
'use client';

import { FC } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useHotGameForm } from '@/hooks/top-page-hot-game';
import { cn } from '@/lib/utils';

interface TopHotGameFormProps {
  className?: string;
}

export const TopHotGameForm: FC<TopHotGameFormProps> = (props) => {
  const { form } = useHotGameForm();
  return (
    <div className={cn(props.className)}>
      <Form {...form}>
        <form className="w-full">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="relative flex gap-[5px] max-md:flex-col max-md:items-center max-md:justify-center">
                <FormControl>
                  <div>
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        {!!field.value ? null : (
                          <p className="text-sm font-semibold text-black">Release Date</p>
                        )}{' '}
                        <SelectValue placeholder="AZ " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AZ">AZ</SelectItem>
                        <SelectItem value="Public date">Public date</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
