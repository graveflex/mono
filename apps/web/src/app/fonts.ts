import { Libre_Caslon_Text, Manrope } from 'next/font/google';

export const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-libre-caslon'
});

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});
