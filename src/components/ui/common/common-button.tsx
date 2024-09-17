import { cva } from 'class-variance-authority';
import { FC, ReactNode, SyntheticEvent } from 'react';
import { Button as ShaButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CommonButtonProps {
  asChild?: boolean;
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
  className?: string;
  type?: 'light' | 'gradient' | null | undefined;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | null | undefined;
  shadow?: 'bottom' | null | undefined;
  color?: 'primary' | 'black' | 'text' | null | undefined;
}

export const CommonButton: FC<CommonButtonProps> = (props) => {
  const isLight = props.type === 'light';
  const button = cva(
    [
      'rounded-sm',
      'transition-all',
      'duration-300',
      'hover:opacity-85',
      'text-white',
      'font-semibold',
      'h-auto',
    ],
    {
      variants: {
        type: {
          light: ['border border-solid', isLight ? 'bg-transparent' : ''],
          gradient: ['bg-gradient-to-br'],
        },
        size: {
          xs: ['text-xs'],
          sm: ['text-sm'],
          base: ['text-base'],
          lg: ['text-sm md:text-lg'],
          xl: ['text-xl md:text-2xl'],
        },
        shadow: {
          bottom: ['shadow-bottom-sm'],
        },
        color: {
          primary: [
            isLight ? 'text-primary hover:text-white hover:opacity-100' : 'bg-primary',
            'border-primary',
            'hover:bg-primary',
            'from-primary',
            'to-[#FFBA54]',
          ],
          black: [
            isLight ? 'text-black hover:text-white hover:opacity-100' : 'bg-black hover:bg-black',
            'border-black/20',
            'hover:bg-black',
            'hover:border-black',
            'from-black',
            'to-black/80',
          ],
          text: [
            isLight ? 'text-text hover:text-white hover:opacity-100' : 'bg-text hover:bg-text',
            'border-text',
            'hover:bg-text',
            'from-text',
            'to-[#3d3f3e]',
          ],
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          shadow: null,
          size: 'sm',
          type: null,
        },
      ],
    }
  );

  return (
    <ShaButton
      asChild={props.asChild}
      className={cn(
        button({ size: props.size, color: props.color, shadow: props.shadow, type: props.type }),
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </ShaButton>
  );
};
