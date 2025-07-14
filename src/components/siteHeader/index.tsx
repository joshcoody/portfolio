import { SiteLogo } from '@/components/siteLogo';
import './style.css';

export const SiteHeader = () => {
  return (
    <header className='flex flex-row justify-between mx-3 my-3 content-center items-center'>
      <div className="max-w-30 max-w- relative rounded-lg overflow-clip cursor-default pointer-events-none">
        <img src="/image.png" alt="Profile pic" />
        <SiteLogo className="absolute text-white bottom-0 left-0 opacity-55" />
      </div>
      <div className="contact-info text-right">
        <ul>
          <li className='text-2xl font-bold'>Josh Coody</li>
          <li><strong>Cell:</strong> <a href="tel:+19542574113">(954) 257-4113</a></li>
          <li><strong>Email:</strong> <a href="mailto:josh@code.rocks">josh@code.rocks</a></li>
        </ul>
      </div>
    </header>
  );
};
