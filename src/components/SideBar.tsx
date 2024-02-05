import React from 'react';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed right-0 top-0 z-50 flex  h-screen w-full flex-col gap-2 overflow-y-scroll border-l border-zinc-700 bg-zinc-900 p-5 md:w-[25vw]'>
      {children}
    </div>
  );
};

export default SideBar;
