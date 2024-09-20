/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CommonButton } from '@/components/ui/common/common-button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface OverviewSliderItemProps {
  className?: string;
  alt?: string;
  banner: string;
  description: string;
  thumbnail: string;
  name: string;
  link: string;
  level: string;
  ratting: number;
  totalWin: number;
  bg?: string;
  mode?: {
    pc?: boolean;
    sp?: boolean;
  };
}

export const OverviewSliderItem: FC<OverviewSliderItemProps> = (props) => (
  <div
    className={cn(
      'rounded-[14px] overflow-hidden md:bg-transparent',
      props.className,
      props.bg ?? 'max-md:bg-black/50'
    )}
  >
    <Image
      alt={props.alt ?? ''}
      className="h-auto w-full"
      height={221}
      src={props.banner}
      width={490}
    />
    <div
      className={cn(
        'pt-7 flex pt-0.5 max-md:flex-col max-md:p-5 md:items-center md:justify-between'
      )}
    >
      <div className="flex items-center">
        <Image
          alt={props.alt ?? ''}
          className="overflow-hidden rounded-[14px]"
          height={90}
          src={props.thumbnail}
          width={90}
        />
        <div className="ml-5">
          <Label className="text-[19.22px] font-semibold text-white md:text-black">
            {props.name}
          </Label>
          <p className="whitespace-break-spaces text-[13.67px] text-white/50 md:text-black/70">
            {props.description}
          </p>
        </div>
      </div>
      <CommonButton
        asChild={true}
        className="px-5 py-2 text-[13.78px] max-md:hidden"
        color="black"
        type="light"
      >
        <Link href={props.link}>View</Link>
      </CommonButton>
      <div className="mt-8 flex justify-between md:hidden">
        <p className="whitespace-break-spaces text-[14px] text-white">
          {props.level}
          {'\n'}
          <span className="text-sm text-white/50">Volatility</span>
        </p>
        <p className="whitespace-break-spaces text-[14px] text-white">
          {props.ratting}
          {'\n'}
          <span className="text-sm text-white/50">RPT</span>
        </p>
        <p className="whitespace-break-spaces text-[14px] text-white">
          {props.totalWin}
          {'\n'}
          <span className="text-sm text-white/50">Maximum Win</span>
        </p>
      </div>
    </div>
  </div>
);
