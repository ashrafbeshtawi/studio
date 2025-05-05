import type React from 'react';

export const PhpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 78"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <ellipse cx="31" cy="39" rx="31" ry="39" fill="#8892BF" />
    <ellipse cx="97" cy="39" rx="31" ry="39" fill="#8892BF" />
    <ellipse cx="64" cy="39" rx="31" ry="39" fill="#8892BF" />
    <text
      x="32"
      y="52"
      fill="#FFFFFF"
      fontFamily="Arial-BoldMT, Arial"
      fontSize="40"
      fontWeight="bold"
      textAnchor="middle"
    >
      P
    </text>
    <text
      x="64"
      y="52"
      fill="#FFFFFF"
      fontFamily="Arial-BoldMT, Arial"
      fontSize="40"
      fontWeight="bold"
      textAnchor="middle"
    >
      H
    </text>
    <text
      x="96"
      y="52"
      fill="#FFFFFF"
      fontFamily="Arial-BoldMT, Arial"
      fontSize="40"
      fontWeight="bold"
      textAnchor="middle"
    >
      P
    </text>
  </svg>
);
