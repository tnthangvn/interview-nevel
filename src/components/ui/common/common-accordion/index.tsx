import { FC } from 'react';
import { Accordion } from '@/components/ui/accordion';
import {
  CommonAccordionItem,
  CommonAccordionItemProps,
} from '@/components/ui/common/common-accordion/common-accordion-item';
import { cn } from '@/lib/utils';

interface CommonAccordionProps {
  className?: string;
  collapsible?: boolean;
  defaultValue?: string;
  orientation?: 'vertical' | 'horizontal';
  items: Omit<CommonAccordionItemProps, 'value'>[];
}

export const CommonAccordion: FC<CommonAccordionProps> = (props) => (
  <Accordion
    className={cn('group w-full', props.className)}
    collapsible={props.collapsible ?? false}
    defaultValue={props.defaultValue ?? ''}
    orientation={props.orientation ?? 'vertical'}
    type="single"
  >
    {props.items.map((item, idx) => (
      <CommonAccordionItem
        key={Number(idx)}
        className={cn('mt-4')}
        name={item.name}
        value={`item-${idx}`}
      >
        {item.children}
      </CommonAccordionItem>
    ))}
  </Accordion>
);
