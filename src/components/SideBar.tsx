import React from 'react';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed right-0 top-0 flex h-screen  w-[25vw] flex-col gap-2 overflow-y-scroll border-l border-zinc-700 bg-zinc-900 p-5'>
      {children}
    </div>
  );
};

export default SideBar;
