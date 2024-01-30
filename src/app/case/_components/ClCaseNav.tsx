'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

const ClCaseNav = ({ clCaseData }: { clCaseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const clCaseDate = clCaseData.createdAt;
  const clCaseDateIso = clCaseDate.toUTCString();
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-col uppercase'>
        <span>Case Id: {clCaseData.id}</span>
        <span>{`Initiated: ${clCaseDateIso}`}</span>
        <div className='text-sm text-teal-300'>
          <div>
            Patient: {clCaseData.ptAge} {clCaseData.ptAgeUnit},{' '}
            {clCaseData.ptGender}
          </div>
          <div>
            Complaint: {clCaseData.complaint ? clCaseData.complaint : '--'}
          </div>
          <div>Note: {clCaseData.note ? clCaseData.note : '--'}</div>
        </div>
      </div>
      <div>
        <button className='rounded-md border p-2' onClick={toggleExpanded}>
          <FaBars />
        </button>
        {expanded ? (
          <div className='absolute right-0 flex w-[10rem] flex-col'>
            <button>Share Case</button>
            <button>Export Case</button>
            <button>Delete Case</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ClCaseNav;
