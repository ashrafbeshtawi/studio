import type React from 'react';

export const JsonSchemaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M8 16H5V6h3" />
    <path d="M16 16h3V6h-3" />
    <path d="M12 20v-4" />
    <path d="M12 8V4" />
    <rect x="9" y="10" width="6" height="6" rx="1" />
  </svg>
);
