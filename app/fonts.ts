import { Inter as Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const sans = Sans({
  weight: 'variable',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const serif = localFont({
  src: '../public/fonts/Stone Sans Semi Bold Regular.woff',
  style: 'normal',
  variable: '--font-serif',
});

export const local = localFont({
  src: '../public/fonts/albert-sans_normal_400.ttf',
  style: 'normal',
  variable: '--font-local',
});
