'use client';

import { FC } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GameDetail, GameDetailProps } from '@/components/top/game-category/game-detail';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface GameCategoryProps {
  className?: string;
  apps: Omit<GameDetailProps, 'className'>[];
}

export const GameCategory: FC<GameCategoryProps> = (props) => (
  <div className={cn(props.className)}>
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
          'md:[&_div[class*=swiper-pagination]]:!hidden',
          'max-md:[&_div[class*=swiper-wrapper]]:!pb-10',
        ],
        [
          '[&_div[class*=swiper-pagination]]:!container',
          '[&_div[class*=swiper-pagination]]:!left-1/2',
          '[&_div[class*=swiper-pagination]]:!-translate-x-1/2',
          '[&_div[class*=swiper-pagination]]:!flex',
          '[&_div[class*=swiper-pagination]]:!gap-x-4',
          'max-md:[&_div[class*=swiper-pagination]]:!bottom-2',
          'max-md:[&_div[class*=swiper-pagination]]:!justify-center',
          '[&_div[class*=swiper-pagination]]:!-translate-x-1/2',
        ],
        [
          '[&_span[class*=swiper-pagination-bullet-active]]:!outline-2',
          '[&_span[class*=swiper-pagination-bullet-active]]:!outline-[#9B9B9B]',
          '[&_span[class*=swiper-pagination-bullet-active]]:!bg-[#9B9B9B]',
          '[&_span[class*=swiper-pagination-bullet-active]]:!outline-offset-[3px]',
          '[&_span[class*=swiper-pagination-bullet-active]]:!outline',
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
      modules={[Navigation, A11y, Pagination]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={2}
      spaceBetween={20}
    >
      {props.apps.map((app, i) => (
        <SwiperSlide key={Number(i)} className={cn('relative')}>
          <GameDetail
            cards={app.cards}
            className="rounded-[20px] bg-black/10 p-5"
            col={4}
            games={app.games}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
