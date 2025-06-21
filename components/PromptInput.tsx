
import React from 'react';
import { SendIcon } from './IconComponents';

interface PromptInputProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, onPromptChange, onSubmit, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !isLoading) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <label htmlFor="prompt-input" className="block text-sm font-medium text-neutral-DEFAULT mb-2">
        Enter your image prompt:
      </label>
      <div className="relative">
        <textarea
          id="prompt-input"
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., A futuristic cityscape at sunset with flying cars"
          className="w-full p-4 pr-28 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow resize-none bg-white text-neutral-dark placeholder-gray-400"
          rows={3}
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center px-4 py-2 h-10 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                      ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all transform hover:scale-105 active:scale-95'} 
                      disabled:opacity-70`}
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <SendIcon className="w-5 h-5 mr-2" />
          )}
          Generate
        </button>
      </div>
    </div>
  );
};
