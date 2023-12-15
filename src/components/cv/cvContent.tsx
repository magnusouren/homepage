import { type CvContentProps } from '../../types';

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
}: CvContentProps): JSX.Element => {
  const handleOnClick = (): void => {
    if (href !== '') window.open(href, '_blank');
  };
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="font-semibold my-2">{header}</h4>
        <p className="text-gray-500 my-2">
          {location} | {startMonth || ''} {startYear} - {endMonth ?? ''}
          {endYear || 'Present'}
        </p>
        {description}
      </div>
      {logo && (
        <img
          src={logo}
          alt="education"
          onClick={handleOnClick}
          className={`w-24 h-24 mx-2 ${href ? 'cursor-pointer' : ''}`}
        />
      )}
    </div>
  );
};
