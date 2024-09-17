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
}

export const OverviewSliderItem: FC<OverviewSliderItemProps> = (props) => (
  <div className={cn(props.className)}>
    <Image
      alt={props.alt ?? ''}
      className="h-auto w-full"
      height={221}
      src={props.banner}
      width={490}
    />
    <div className="mt-7 flex items-center justify-between pt-0.5">
      <div className="flex items-center">
        <Image alt={props.alt ?? ''} height={90} src={props.thumbnail} width={90} />
        <div className="ml-5">
          <Label className="text-[19.22px] font-semibold">{props.name}</Label>
          <p className="whitespace-break-spaces text-[13.67px] text-black/70">
            {props.description}
          </p>
        </div>
      </div>
      <CommonButton asChild={true} className="px-5 py-2 text-[13.78px]" color="black" type="light">
        <Link href={props.link}>View</Link>
      </CommonButton>
    </div>
  </div>
);
