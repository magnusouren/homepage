import { type FC, useState } from 'react';

interface ClickableImgProps {
  img: string;
  alt: string;
}

export const ClickableImg: FC<ClickableImgProps> = ({
  img,
  alt,
}: ClickableImgProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="justify-center mt-4 mb-4 w-full">
      <img
        src={img}
        alt={alt}
        className="w-full object-cover lg:cursor-pointer"
        onClick={() => {
          if (window.innerWidth > 1024) setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <div
          className="inset-0 bg-gray-900 bg-opacity-70 hidden justify-center z-50 lg:fixed lg:flex"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div className="p-4 rounded-lg h-[100vh]">
            <img
              src={img}
              alt={alt + ' in modal '}
              className="max-w-full max-h-full "
            />
            <button
              className="absolute top-0 right-0 bg-gray-100 w-8 h-8 m-2 pb-1 rounded-full text-black text-xl font-semibold hover:bg-gray-200"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
