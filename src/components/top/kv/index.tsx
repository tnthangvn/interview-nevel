'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FC } from 'react';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface KVProps {
  className?: string;
  sliders: {
    src: string;
  }[];
}

export const KV: FC<KVProps> = (props) => (
  <Carousel
    className={cn('w-full [&>div]:w-full [&>div]:flex', props.className)}
    opts={{
      loop: true,
      align: 'start',
      slidesToScroll: 'auto',
    }}
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
  >
    <CarouselContent className={cn('ml-0 cursor-pointer pl-0')}>
      {props.sliders.map((slider, idx) => (
        <div key={Number(idx)} className="w-max">
          <Image alt="" height={576} src={slider.src} width={1920} />
        </div>
      ))}
    </CarouselContent>
  </Carousel>
);
