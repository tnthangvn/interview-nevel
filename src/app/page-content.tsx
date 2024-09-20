import { FC } from 'react';
import { TopHotGameForm } from '@/components/top/form-filter';
import { GameCategory } from '@/components/top/game-category';
import { OverviewSlider } from '@/components/top/games/overview-slider';
import { KV } from '@/components/top/kv';
import { TopSidebar } from '@/components/top/sidebar';
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
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
  },
  {
    name: 'Wild Bandito',
    banner: '/images/top/games/wild-bandito.png',
    thumbnail: '/images/top/games/wild-bandito-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
  },
  {
    name: 'Mahjong Ways',
    banner: '/images/top/games/mahjong-ways.png',
    thumbnail: '/images/top/games/mahjong-ways-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
  },
  {
    name: 'Wild Bandito',
    banner: '/images/top/games/wild-bandito.png',
    thumbnail: '/images/top/games/wild-bandito-thumbnail.png',
    link: '#',
    description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
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
    <div className="container mb-3 flex flex-col gap-x-10 pb-16 md:flex-row md:pt-[100px]">
      <TopSidebar className="w-full max-md:hidden md:max-w-[180px]" menus={menuSidebar} />
      <div className="w-full md:w-[calc(100%-180px)]">
        <div className="w-full">
          <div className="flex w-full items-center justify-between max-md:pt-5">
            <Label className="text-[18px] font-semibold md:text-[28.36px]">Hot game</Label>
            <TopHotGameForm className="md:hidden" />
          </div>
          <OverviewSlider className="pt-0.5" games={games} />
          <Label className="mt-[85px] inline-block w-full text-[28.36px] font-semibold">
            Hottest Category
          </Label>
          <GameCategory apps={gameCate} className="flex gap-5 pt-0.5" />
        </div>
      </div>
    </div>
  </Guest>
);
