import type React from 'react';

export const AgenticAiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
    <path d="M6 10l-2 6h16l-2-6" />
    <circle cx="8" cy="20" r="2" />
    <circle cx="16" cy="20" r="2" />
    <path d="M9 6.5L6 3M15 6.5L18 3" />
  </svg>
);
