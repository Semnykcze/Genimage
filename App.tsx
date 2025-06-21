
import React, { useState, useCallback } from 'react';
import { generateImageFromPrompt } from './services/geminiService';
import { PromptInput } from './components/PromptInput';
import { ImageDisplayArea } from './components/ImageDisplayArea';
import { GithubIcon } from './components/IconComponents';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [lastSuccessfulPrompt, setLastSuccessfulPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Prompt cannot be empty.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl(null); // Clear previous image

    try {
      // Basic prompt sanitization or enhancement can be added here
      const sanitizedPrompt = prompt.trim();
      const generatedImageUrl = await generateImageFromPrompt(sanitizedPrompt);
      setImageUrl(generatedImageUrl);
      setLastSuccessfulPrompt(sanitizedPrompt);
    } catch (err) {
      console.error('Error generating image:', err);
      if (err instanceof Error) {
        setError(`Failed to generate image: ${err.message}. Please check your API key and network connection.`);
      } else {
        setError('An unknown error occurred while generating the image.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-gray-200 to-neutral-light text-neutral-dark flex flex-col items-center p-4 sm:p-6 md:p-8 selection:bg-primary-light selection:text-white">
      <header className="w-full max-w-3xl mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600 pb-2">
          Imagen4 Image Generator
        </h1>
        <p className="text-neutral-DEFAULT text-lg mt-2">
          Craft stunning visuals from your textual descriptions.
        </p>
      </header>

      <main className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-2xl ">
        <PromptInput
          prompt={prompt}
          onPromptChange={setPrompt}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <ImageDisplayArea
          imageUrl={imageUrl}
          isLoading={isLoading}
          error={error}
          prompt={lastSuccessfulPrompt || "Generated image"}
        />
      </main>

      <footer className="w-full max-w-3xl mt-12 text-center text-neutral-DEFAULT text-sm">
        <p>Powered by Google Gemini API & Imagen 3 Model.</p>
        <a 
          href="https://github.com/google/generative-ai-docs/tree/main/site/en/ai_studio/docs/tool-use" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary-dark hover:text-primary-light transition-colors mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View Gemini Docs
        </a>
         <p className="mt-2 text-xs text-gray-400">
           Note: An API key for Gemini API must be configured in the environment as `process.env.API_KEY`.
        </p>
      </footer>
    </div>
  );
};

export default App;
