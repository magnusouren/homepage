interface ReadMoreProps {
  longDescription: string;
  secondaryImages?: string[];
}

export const ReadMore = ({ longDescription, secondaryImages = [] }: ReadMoreProps) => (
  <div className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">
    <p>{longDescription}</p>
    {secondaryImages && (
      <div className="flex flex-wrap justify-center">
        {secondaryImages.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="alt text
                "
            className="my-2 max-h-96 max-w-full"
          />
        ))}
      </div>
    )}
  </div>
);
