import { FC, ReactNode } from 'react';
import { AccordionItem, AccordionContent } from '@/components/ui/accordion';
import { CommonAccordionTrigger } from '@/components/ui/common/common-accordion/common-accordion-trigger';
import { cn } from '@/lib/utils';

export interface CommonAccordionItemProps {
  className?: string;
  value: string;
  name: string;
  children: ReactNode;
}

export const CommonAccordionItem: FC<CommonAccordionItemProps> = (props) => (
  <AccordionItem className={cn(props.className)} value={props.value}>
    <CommonAccordionTrigger name={props.name} />
    <AccordionContent className={cn('w-full after:absolute')}>{props.children}</AccordionContent>
  </AccordionItem>
);
