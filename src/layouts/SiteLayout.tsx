
import React from 'react';

import { ReactNode } from 'react';
import NavigationBar from '../components/NavigationBar';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({children, ...props}) => {
  return (
    <div className="flex flex-col h-full justify-between w-full bg-gradient-to-b from-violet-500 to-violet-200">
      <NavigationBar />
      <div className="h-full w-full flex flex-grow flex-col justify-center items-center">
        {children}
        asdasdas
      </div>
      <div className="static bottom-0 w-full h-20 py-10 flex flex-row items-center justify-center bg-violet-500 shadow-md bg-opacity-80 backdrop-blur-lg">
        Footer
      </div>
    </div>
  );
};

export default SiteLayout;