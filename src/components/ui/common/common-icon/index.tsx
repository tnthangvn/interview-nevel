import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from '@/lib/utils';

export interface CommonIconProps {
  className?: string;
  color?: 'black' | null | undefined;
  size?: 'sm' | 'md' | 'lg' | null | undefined;
}

const accIcon = cva([], {
  variants: {
    size: {
      sm: ['text-sm'],
      md: ['text-xl'],
      lg: ['text-2xl'],
    },
    color: {
      black: ['text-black'],
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'black',
  },
});

export const CommonIcon: FC<CommonIconProps> = (props) => (
  <span
    className={cn('icon', props.className, accIcon({ size: props.size, color: props.color }))}
  />
);
