'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/pagination';

interface KVProps {
  className?: string;
  sliders: {
    src: string;
    name?: string;
    link?: string;
    mode?: {
      pc?: boolean;
      sp?: boolean;
    };
  }[];
}

export const KV: FC<KVProps> = (props) => (
  <Swiper
    navigation
    className={cn(
      'w-full',
      [
        '[&_div[class*=swiper-button-prev]]:!hidden',
        '[&_div[class*=swiper-button-next]]:!hidden',
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
        '[&_span[class*=swiper-pagination-bullet-active]]:!outline-2',
        '[&_span[class*=swiper-pagination-bullet-active]]:!outline-white',
        '[&_span[class*=swiper-pagination-bullet-active]]:!outline-offset-[3px]',
        '[&_span[class*=swiper-pagination-bullet-active]]:!outline',
        '[&_span[class*=swiper-pagination-bullet-active]]:!bg-white',
      ],
      props.className
    )}
    modules={[Pagination, A11y]}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    slidesPerView={1}
    spaceBetween={0}
  >
    {props.sliders.map((slider, idx) => (
      <SwiperSlide
        key={Number(idx)}
        className={cn(
          'relative',
          slider.mode?.pc ? 'max-md:!hidden' : '',
          slider.mode?.sp ? 'md:!hidden' : ''
        )}
      >
        <Image alt="" height={576} src={slider.src} width={1920} />
        <div className="absolute bottom-8 left-1/2 flex w-auto -translate-x-1/2 flex-col gap-y-5 text-center text-white md:bottom-20">
          {slider.name ? <Label className="text-[24.41px]">{slider.name}</Label> : null}
          {slider.link ? (
            <Link
              className="flex items-center justify-center gap-x-[5px] text-[13.78px] transition-all duration-300 ease-in-out hover:opacity-80"
              href={slider.link ?? '#'}
              target="_blank"
            >
              Game Details <span className="i-arrow-right-ward-alt" />
            </Link>
          ) : null}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
