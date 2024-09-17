'use client';

import Autoplay from 'embla-carousel-autoplay';
import { FC, useRef } from 'react';
import {
  OverviewSliderItem,
  OverviewSliderItemProps,
} from '@/components/top/games/overview-slider-item';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface OverviewSliderProps {
  className?: string;
  games: Omit<OverviewSliderItemProps, 'className'>[];
}

export const OverviewSlider: FC<OverviewSliderProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Carousel
      ref={ref}
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
      <CarouselContent className={cn('-ml-5 cursor-pointer pl-0 flex-row')}>
        {props.games.map((game, i) => (
          <CarouselItem key={Number(i)} className={cn('pl-5 basis-1/2')}>
            <OverviewSliderItem
              banner={game.banner}
              description={game.description}
              link={game.link}
              name={game.name}
              thumbnail={game.thumbnail}
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
  );
};
