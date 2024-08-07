import { type FC } from 'react';

interface SubtitleProps {
  subtitle: string;
}

export const Subtitle: FC<SubtitleProps> = ({ subtitle }: SubtitleProps) => (
  <h1 className="my-8 text-4xl font-bold">{subtitle}</h1>
);
