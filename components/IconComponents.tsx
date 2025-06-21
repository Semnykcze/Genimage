
import React from 'react';

interface IconProps {
  className?: string;
}

export const ImageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3.105 3.105a1.5 1.5 0 012.046-.223l12.75 6.5a1.5 1.5 0 010 2.836l-12.75 6.5a1.5 1.5 0 01-2.046-.223A1.5 1.5 0 013 17.622V4.378a1.5 1.5 0 01.105-1.273z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.869-.013-1.708-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.527 2.341 1.085 2.91.83.091-.645.349-1.085.635-1.334-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.252-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.375.203 2.393.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.734 0 .268.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);
