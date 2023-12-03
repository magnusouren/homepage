import { type FC } from 'react';

interface SubtitleProps {
  subtitle: string;
}

export const Subtitle: FC<SubtitleProps> = ({ subtitle }: SubtitleProps) => (
  <h1 className="text-4xl font-bold my-8">{subtitle}</h1>
);
