'use client';

import { FC } from 'react';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  OverviewSliderItem,
  OverviewSliderItemProps,
} from '@/components/top/games/overview-slider-item';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/navigation';

interface OverviewSliderProps {
  className?: string;
  games: Omit<OverviewSliderItemProps, 'className'>[];
}

export const OverviewSlider: FC<OverviewSliderProps> = (props) => (
  <Swiper
    navigation
    breakpoints={{
      1: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }}
    className={cn(
      'w-full -mt-5',
      [
        '[&_div[class*=swiper-wrapper]]:!pt-10',
        '[&_div[class*=swiper-pagination]]:!container',
        '[&_div[class*=swiper-pagination]]:!left-1/2',
        '[&_div[class*=swiper-pagination]]:!bottom-11',
        '[&_div[class*=swiper-pagination]]:!-translate-x-1/2',
        '[&_div[class*=swiper-pagination]]:!flex',
        '[&_div[class*=swiper-pagination]]:!gap-x-4',
        'max-md:[&_div[class*=swiper-pagination]]:!bottom-1/3',
        'max-md:[&_div[class*=swiper-pagination]]:!justify-center',
      ],
      [
        'max-md:[&_div[class*=swiper-button]]:!hidden',
        '[&_div[class*=swiper-button]]:!top-5',
        '[&_div[class*=swiper-button]]:!text-black',
        '[&_div[class*=swiper-button]]:!scale-[0.25]',
        '[&_div[class*=swiper-button-prev]]:!left-auto',
        '[&_div[class*=swiper-button-prev]]:!right-7',
      ],
      props.className
    )}
    modules={[Navigation, A11y]}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    slidesPerView={2}
    spaceBetween={20}
  >
    {props.games.map((game, i) => (
      <SwiperSlide key={Number(i)} className={cn('relative')}>
        <OverviewSliderItem
          banner={game.banner}
          bg={game.bg}
          className={cn(game.mode?.pc ? 'max-md:hidden' : '', game.mode?.sp ? 'md:hidden' : '')}
          description={game.description}
          level={game.level}
          link={game.link}
          name={game.name}
          ratting={game.ratting}
          thumbnail={game.thumbnail}
          totalWin={game.totalWin}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
