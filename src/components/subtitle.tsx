type SubtitleProps = {
  subtitle: string;
};

export const Subtitle = ({ subtitle }: SubtitleProps) => <h2 className="text-4xl font-bold my-8">{subtitle}</h2>;
