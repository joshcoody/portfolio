import type { SiteLogoProps } from './types';

export const SiteLogo: React.FC<SiteLogoProps> = ({ className }) => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="42px"
      height="42px"
      viewBox="0 0 56.8 62.1"
      className={`my-3 mx-3 ${className}`}
    >
      <path
        fill="currentColor"
        d="M16.5,0H8.2v8.3h8.3V0z M16.5,10.5v37.2c0,6.1-3.6,14.3-16.5,14.3v-8.3c4.1,0,8.3-1.1,8.3-7.5l0-27.6H0 v-8.3H16.5z"
      ></path>
      <path
        fill="currentColor"
        d="M55.2,18.8c0,0-18.9,0-18.9,0c-4.5,2.3-7.5,6.9-7.5,12.2c0,7.6,6.1,13.7,13.7,13.7c3.4,0,7.1-1.7,9.5-3.8 l4.8,6.3c-3.8,3.3-8.8,5.7-14.3,5.7C30.4,53,20.6,43.1,20.6,31c0-9.3,5.9-17.3,14.1-20.5l0,0l12.9,0l0,0h7.6L55.2,18.8z"
      ></path>
    </svg>
  );
};
