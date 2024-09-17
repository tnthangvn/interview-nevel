import { FC } from 'react';
import { GameCategory } from '@/components/top/game-category';
import { OverviewSlider } from '@/components/top/games/overview-slider';
import { KV } from '@/components/top/kv';
import { TopSidebar } from '@/components/top/sidebar';
import { Label } from '@/components/ui/label';
import { Guest } from '@/layouts/guest';

const sliders = [
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
  { src: '/images/top/kv.png' },
];

const menuSidebar = [
  { name: 'Games Home', icon: 'i-home', link: '#', active: true },
  { name: 'Timeline', icon: 'i-time-line', link: '#' },
  { name: 'All Games', icon: 'i-square-all', link: '#' },
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
    <div className="container mb-3 flex flex-row gap-x-10 pb-16 pt-[100px]">
      <TopSidebar className="w-full max-w-[180px]" menus={menuSidebar} />
      <div className="w-[calc(100%-180px)]">
        <Label className="text-[28.36px] font-semibold">Hot game</Label>
        <OverviewSlider className="mt-7 pt-0.5" games={games} />
        <Label className="mt-[85px] inline-block text-[28.36px] font-semibold">
          Hottest Category
        </Label>
        <GameCategory apps={gameCate} className="mt-7 flex gap-5 pt-0.5" />
      </div>
    </div>
  </Guest>
);
