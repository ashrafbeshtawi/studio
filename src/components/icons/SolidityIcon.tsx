import type React from 'react';

export const SolidityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="24"
    height="24"
    fill="#363636"
    {...props}
  >
    <path d="M50 0l40 20v60L50 100 10 80V20L50 0zm28.3 26.6L50 13.2 21.7 26.6v46.8L50 86.8l28.3-13.4V26.6zM35 40l15 8 15-8v-8l-15-8-15 8v8zm30 32l-15-8-15 8v8l15 8 15-8v-8z" />
  </svg>
);
