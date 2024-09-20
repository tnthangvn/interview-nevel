/* eslint-disable react/jsx-props-no-spreading */
'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface GameDetailProps {
  className?: string;
  col: number;
  cards?: {
    bg?: string;
    icon?: string;
    description: string;
    name: string;
  }[];
  games?: {
    size: number;
    url: string;
    src: string;
  }[];
}

export const GameDetail: FC<GameDetailProps> = (props) => (
  <div className={cn(props.className)}>
    <div className={cn(`grid grid-cols-4 grid-cols-${props.col} gap-y-5 gap-x-7`)}>
      <Carousel
        className={cn('relative [&>div]:gap-x-5 col-span-2 row-span-2 h-max')}
        opts={{
          loop: true,
          slidesToScroll: 'auto',
          axis: 'y',
        }}
        orientation="vertical"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className={cn('mt-0 cursor-pointer pl-0 w-full')}>
          {(props.cards ?? []).map((card, i) => (
            <div
              key={Number(i)}
              className={cn(
                'flex flex-col rounded-[20px] w-full p-4 md:p-5',
                `${card.bg ?? 'bg-[#5C6EFF]'}`
              )}
            >
              {card.icon ? <span className={cn('text-white text-xl', card.icon)} /> : null}
              <Label className="mt-3 inline-block text-[17.27px] font-medium text-white md:mt-4 md:text-[21.66px]">
                {card.name}
              </Label>
              <p className="mt-3 text-[10.99px] text-white/60 md:mt-[18px] md:whitespace-break-spaces md:text-[13.78px]">
                {card.description}
              </p>
            </div>
          ))}
        </CarouselContent>
      </Carousel>

      {(props.games ?? []).map((game, i) => (
        <div
          key={Number(i)}
          className={cn(
            `rounded-[20px] overflow-hidden col-span-${game.size} row-span-${game.size}`
          )}
        >
          <Link
            className={cn('block overflow-hidden', `rounded-[${game.size === 1 ? 4 : 20}px]`)}
            href={game.url ?? '#'}
          >
            <Image alt="game" className="w-full" height={95} src={game.src} width={95} />
          </Link>
        </div>
      ))}
    </div>
  </div>
);
