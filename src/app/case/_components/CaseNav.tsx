'use client';

import { useState } from 'react';
import { FaBars, FaShare } from 'react-icons/fa6';

const CaseNav = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='flex w-full justify-evenly'>
      <div className='flex flex-col uppercase'>
        <span>Case ID: 134-098134</span>
        <span>Initiated: 0231 2024JAN20</span>
        <span>Patient: 20 y/o, Male</span>
      </div>
      <div>
        <button>
          <FaShare className='text-teal-300' />
        </button>
        <button onClick={toggleExpanded}>
          <FaBars className='text-teal-300' />
        </button>
        {expanded ? (
          <div className='absolute flex flex-col'>
            <button>Share Case</button>
            <button>Export Case</button>
            <button>Delete Case</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CaseNav;
