
import React from 'react';
import { Spinner } from './Spinner'; 
import { ImageIcon, AlertTriangleIcon } from './IconComponents';

interface ImageDisplayAreaProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

export const ImageDisplayArea: React.FC<ImageDisplayAreaProps> = ({ imageUrl, isLoading, error, prompt }) => {
  if (isLoading) {
    return (
      <div className="w-full aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center text-neutral-DEFAULT border-2 border-dashed border-gray-300 transition-all duration-300 ease-in-out">
        <Spinner />
        <p className="mt-4 text-lg font-medium">Generating your masterpiece...</p>
        <p className="text-sm text-gray-500">This might take a few moments.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full aspect-square bg-red-50 border border-red-200 rounded-lg flex flex-col items-center justify-center p-6 text-red-700 transition-all duration-300 ease-in-out">
        <AlertTriangleIcon className="w-16 h-16 text-red-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h3>
        <p className="text-center text-sm">{error}</p>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-200 group transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
        <img 
          src={imageUrl} 
          alt={prompt || 'Generated image'} 
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:opacity-90"
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center text-neutral-DEFAULT border-2 border-dashed border-gray-300 hover:border-primary-light transition-all duration-300 ease-in-out">
      <ImageIcon className="w-24 h-24 text-gray-300 mb-4" />
      <p className="text-lg font-medium">Your generated image will appear here.</p>
      <p className="text-sm text-gray-500">Enter a prompt above and click "Generate".</p>
    </div>
  );
};
