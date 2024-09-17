/* eslint-disable react/jsx-props-no-spreading */
'use client';

import Autoplay from 'embla-carousel-autoplay';
import { FC } from 'react';
import { GameDetail, GameDetailProps } from '@/components/top/game-category/game-detail';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export interface GameCategoryProps {
  className?: string;
  apps: Omit<GameDetailProps, 'className'>[];
}

export const GameCategory: FC<GameCategoryProps> = (props) => (
  <div className={cn(props.className)}>
    <Carousel
      className={cn('relative [&>div]:flex [&>div]:gap-x-5', props.className)}
      opts={{
        loop: true,
        align: 'start',
        slidesToScroll: 'auto',
      }}
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className={cn('cursor-pointer -ml-5')}>
        {props.apps.map((app, i) => (
          <CarouselItem key={Number(i)} className={cn('pl-5 basis-1/2')}>
            <GameDetail
              cards={app.cards}
              className="rounded-[20px] bg-black/10 p-5"
              col={4}
              games={app.games}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute right-0 top-0 flex h-8 -translate-y-full flex-row items-center justify-end gap-0">
        <CarouselPrevious className="static border-none bg-transparent text-[10px]">
          <span className="i-chevron-left" />
        </CarouselPrevious>
        <CarouselNext className="static border-none bg-transparent text-[10px]">
          <span className="i-chevron-right" />
        </CarouselNext>
      </div>
    </Carousel>
  </div>
);
