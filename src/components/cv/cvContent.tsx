export type CvContentProps = {
  description?: string | JSX.Element;
  endMonth?: string;
  endYear?: number;
  header: string;
  href?: string;
  logo?: string;
  location: string;
  startMonth?: string;
  startYear: number;
};

export const CvContent = ({
  description = '',
  endMonth = '',
  endYear = 0,
  header,
  href = '',
  logo = '',
  location,
  startMonth = '',
  startYear,
}: CvContentProps) => {
  const handleOnClick = () => {
    if (href) window.open(href, '_blank');
  };
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="font-semibold my-2">{header}</h4>
        <p className="text-gray-500 my-2">
          {location} | {startMonth ? startMonth : ''} {startYear} - {endMonth ? endMonth + ' ' : ''}
          {endYear ? endYear : 'Present'}
        </p>
        {description}
      </div>
      {logo && (
        <img
          src={logo}
          alt="education"
          onClick={handleOnClick}
          className={`w-24 h-24 mx-2 ${href && 'cursor-pointer'}`}
        />
      )}
    </div>
  );
};
