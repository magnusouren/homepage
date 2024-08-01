import { CloudDownload } from '@material-ui/icons';
import React from 'react';

interface DownloadButtonProps {
  fileUrl: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl }) => {
  const handleDownload = (): void => {
    fetch(fileUrl)
      .then(async (response) => await response.blob())
      .then((blob) => {
        // Create a temporary anchor element
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = fileUrl;

        // Trigger the download by simulating a click
        document.body.appendChild(a);
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error('Error downloading the file:', error);
        // Handle errors
      });
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-8 flex border-2 border-solid border-black bg-black px-4 py-2 font-bold text-white hover:bg-white hover:text-black"
    >
      Download as PDF <CloudDownload className="ml-2" />
    </button>
  );
};
