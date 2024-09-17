import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { CommonIcon } from '@/components/ui/common/common-icon';
import { cn } from '@/lib/utils';

export interface CommonAccordionTriggerProps {
  className?: string;
  name: string;
  separator?: 'full' | 'half' | 'none' | null | undefined;
}

const accTrigger = cva(
  [
    'relative flex w-full flex-col items-center p-6',
    '[&[data-state=closed]&:after]:hidden',
    "after:content-['']",
    'after:absolute',
    'after:block',
    'after:h-px',
    `after:bg-[#bfbfbf]`,
    'after:left-0',
    'after:bottom-0',
  ],
  {
    variants: {
      separator: {
        none: ['after:hidden'],
        full: ['after:w-full'],
        half: ['px-8 py-6 after:left-8 after:w-[calc(100%-30px)]'],
      },
    },
    defaultVariants: {
      separator: 'full',
    },
  }
);

export const CommonAccordionTrigger: FC<CommonAccordionTriggerProps> = (props) => (
  <AccordionPrimitive.Trigger
    className={cn('group', accTrigger({ separator: props.separator }), props.className)}
  >
    <div className="w-full text-left">
      <h3 className="relative w-full text-[13.23px] font-semibold text-black/80">{props.name}</h3>
    </div>
    <CommonIcon
      className={cn(
        `absolute top-1/2 -translate-y-1/2 right-6 i- group-data-[state=open]:i-minus group-data-[state=closed]:i-plus md:hidden`
      )}
      size="md"
    />
  </AccordionPrimitive.Trigger>
);
