export interface CVJobProps {
  jobTitle: string;
  company: string;
  duration: string;
  jobDescription: string;
  logo: string;
  location: string;
}

export const CVJob: React.FC<CVJobProps> = (props) => {
  return (
    <div className=" py-4">
      <div className="flex justify-between">
        <div className="pr-4">
          <h4 className="font-semibold my-2">
            {props.jobTitle} at {props.company}
          </h4>
          <span className="text-gray-600 my-2">
            {props.location} | {props.duration}
          </span>
          <p className="text-gray-800 my-2">{props.jobDescription}</p>
        </div>
        <img src={props.logo} alt="logo" className="w-36 mt-auto mb-auto m-2" />
      </div>
    </div>
  );
};
