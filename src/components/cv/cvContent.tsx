export type CvContentProps = {
  header: string;
  location: string;
  startMonth?: string;
  endMonth?: string;
  startYear: number;
  endYear?: number;
  logo?: string;
  description?: string;
  href?: string;
};

export const CvContent = ({
  startMonth = '',
  startYear,
  endMonth = '',
  endYear = 0,
  location,
  header,
  logo = '',
  description = '',
  href = '',
}: CvContentProps) => {
  const handleOnClick = () => {
    if (href) window.open(href, '_blank');
  };
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="font-semibold text-l">{header}</h4>
        <span className="text-gray-600 my-2">
          {location} | {startMonth ? startMonth : ''} {startYear} - {endMonth ? endMonth + ' ' : ''}
          {endYear ? endYear : 'Present'}
        </span>
        {description && <p className="">{description}</p>}
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
