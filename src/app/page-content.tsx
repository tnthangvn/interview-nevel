import { FC } from 'react';
import { TopHotGameForm } from '@/components/top/form-filter';
import { GameCategory } from '@/components/top/game-category';
import { OverviewSlider } from '@/components/top/games/overview-slider';
import { KV } from '@/components/top/kv';
import { TopSidebar } from '@/components/top/sidebar';
import { CommonButton } from '@/components/ui/common/common-button';
import { Label } from '@/components/ui/label';
import { Guest } from '@/layouts/guest';

const sliders = [
  { src: '/images/top/kv/kv.png', mode: { pc: true } },
  { src: '/images/top/kv/kv.png', mode: { pc: true } },
  { src: '/images/top/kv/kv.png', mode: { pc: true } },
  { src: '/images/top/kv/kv.png', mode: { pc: true } },
  { src: '/images/top/kv/kv.png', mode: { pc: true } },
  { src: '/images/top/kv/kv-2.png', name: 'Chicky Run', link: '#', mode: { sp: true } },
  { src: '/images/top/kv/kv-2.png', name: 'Chicky Run', link: '#', mode: { sp: true } },
  { src: '/images/top/kv/kv-2.png', name: 'Chicky Run', link: '#', mode: { sp: true } },
  { src: '/images/top/kv/kv-2.png', name: 'Chicky Run', link: '#', mode: { sp: true } },
  { src: '/images/top/kv/kv-2.png', name: 'Chicky Run', link: '#', mode: { sp: true } },
];

const menuSidebar = [
  { name: 'Games Home', nameSP: 'Games', icon: 'i-home', link: '#', active: true },
  { name: 'Timeline', icon: 'i-time-line', link: '#' },
  { name: 'All Games', nameSP: 'All\nGames', icon: 'i-square-all', link: '#' },
];

const games = [
  {
    name: 'Mahjong Ways',
    banner: '/images/top/games/mahjong-ways.png',
    thumbnail: '/images/top/games/mahjong-ways-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#0C4405]',
  },
  {
    name: 'Wild Bandito',
    banner: '/images/top/games/wild-bandito.png',
    thumbnail: '/images/top/games/wild-bandito-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#430540]',
  },
  {
    name: 'Mahjong Ways',
    banner: '/images/top/games/mahjong-ways.png',
    thumbnail: '/images/top/games/mahjong-ways-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#0C4405]',
  },
  {
    name: 'Wild Bandito',
    banner: '/images/top/games/wild-bandito.png',
    thumbnail: '/images/top/games/wild-bandito-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#430540]',
  },
  {
    name: 'Tree Of Fortune',
    banner: '/images/top/games/tree-of-fortune.png',
    thumbnail: '/images/top/games/tree-of-fortune-thumb.png',
    link: '#',
    description: 'Legend has it that a farmer was granted a seed from a deity.',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#C48F03]',
  },
  {
    name: 'Tree Of Fortune',
    banner: '/images/top/games/tree-of-fortune.png',
    thumbnail: '/images/top/games/tree-of-fortune-thumb.png',
    link: '#',
    description: 'Legend has it that a farmer was granted a seed from a deity.',
    level: 'MEDIUM',
    totalWin: 5000,
    ratting: 95.01,
    bg: 'bg-[#C48F03]',
  },
];

const gameCate = [
  {
    col: 4,
    cards: [
      {
        name: 'Music',
        icon: 'i-music',
        description: 'Music makes everything\nbetter, and these games\nwill grove to it!',
      },
    ],
    games: [
      { src: '/images/top/category/thumb-game-1.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-2.png', size: 1, url: '#' },
      { src: '/images/top/category/panda.png', size: 2, url: '#' },
      { src: '/images/top/category/thumb-game-3.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-4.png', size: 1, url: '#' },
    ],
  },
  {
    col: 4,
    cards: [
      {
        name: 'Table Games',
        icon: 'i-music',
        description: 'The classic table games\nfor the gentlemen and\nladies.',
        bg: 'bg-[#19796A]',
      },
    ],
    games: [
      { src: '/images/top/category/thumb-game-1.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-2.png', size: 1, url: '#' },
      { src: '/images/top/category/poker.png', size: 2, url: '#' },
      { src: '/images/top/category/thumb-game-3.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-4.png', size: 1, url: '#' },
    ],
  },
  {
    col: 4,
    cards: [
      {
        name: 'Music',
        icon: 'i-music',
        description: 'Music makes everything\nbetter, and these games\nwill grove to it!',
      },
    ],
    games: [
      { src: '/images/top/category/thumb-game-1.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-2.png', size: 1, url: '#' },
      { src: '/images/top/category/panda.png', size: 2, url: '#' },
      { src: '/images/top/category/thumb-game-3.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-4.png', size: 1, url: '#' },
    ],
  },
  {
    col: 4,
    cards: [
      {
        name: 'Table Games',
        icon: 'i-music',
        description: 'The classic table games\nfor the gentlemen and\nladies.',
        bg: 'bg-[#19796A]',
      },
    ],
    games: [
      { src: '/images/top/category/thumb-game-1.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-2.png', size: 1, url: '#' },
      { src: '/images/top/category/poker.png', size: 2, url: '#' },
      { src: '/images/top/category/thumb-game-3.png', size: 1, url: '#' },
      { src: '/images/top/category/thumb-game-4.png', size: 1, url: '#' },
    ],
  },
];

export const Home: FC = () => (
  <Guest>
    <KV className="w-full" sliders={sliders} />
    <TopSidebar className="w-full md:hidden" menus={menuSidebar} />
    <div className="container mb-3 flex flex-col gap-x-10 pb-16 max-md:px-0 md:flex-row md:pt-[100px]">
      <TopSidebar className="w-full max-md:hidden md:max-w-[180px]" menus={menuSidebar} />
      <div className="w-full md:w-[calc(100%-180px)]">
        <div className="w-full max-md:px-[25px]">
          <div className="flex w-full items-center justify-between max-md:pt-5">
            <Label className="text-[18px] font-semibold max-md:uppercase md:text-[28.36px]">
              Hot game
            </Label>
            <TopHotGameForm className="md:hidden" />
          </div>
          <OverviewSlider className="pt-0.5" games={games} />
        </div>
        <div className="w-full">
          <Label className="mt-[85px] inline-block text-[18px] font-semibold max-md:px-[25px] max-md:uppercase md:text-[28.36px]">
            Hottest Category
          </Label>
          <GameCategory apps={gameCate} className="flex gap-5 pt-0.5" />
          <CommonButton
            className="mt-5 w-full border-black/[0.2] bg-black/[.02] text-[15px] text-black hover:border-black hover:text-white md:hidden"
            color="black"
          >
            Load More <span className="i-plus ml-2" />
          </CommonButton>
        </div>
      </div>
    </div>
  </Guest>
);
