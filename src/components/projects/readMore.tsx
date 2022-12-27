interface ReadMoreProps {
  longDescription: string;
  secondaryImages?: string[];
}

export const ReadMore = ({ longDescription, secondaryImages = [] }: ReadMoreProps) => {
  console.log(secondaryImages);
  return (
    <div className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">
      <p>{longDescription}</p>
      {secondaryImages && (
        <div className="flex flex-wrap justify-center">
          {secondaryImages.map((image) => (
            <img
              src={image}
              alt="alt text
                "
              className="w-1/2 my-2 "
            />
          ))}
        </div>
      )}
    </div>
  );
};
