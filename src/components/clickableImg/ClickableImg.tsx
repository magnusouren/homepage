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
    <div className="my-4 w-full justify-center">
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
          className="inset-0 z-50 hidden justify-center bg-gray-900 opacity-70 lg:fixed lg:flex"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div className="h-screen rounded-lg p-4">
            <img
              src={img}
              alt={alt + ' in modal '}
              className="max-h-full max-w-full "
            />
            <button
              className="absolute right-0 top-0 m-2 size-8 rounded-full bg-gray-100 pb-1 text-xl font-semibold text-black hover:bg-gray-200"
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
