import { type FC } from 'react';

interface WallpaperProps {
  src: string;
  alt: string;
}

export const Wallpaper: FC<WallpaperProps> = ({ src, alt }) => (
  <img alt={alt} src={src} className="w-full" />
);
