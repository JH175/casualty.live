'use client';

import { useState } from 'react';
import { FaBars, FaGear, FaShare } from 'react-icons/fa6';

const CaseNav = ({ caseData }: { caseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const caseDate = caseData.createdAt;
  const caseDateIso = caseDate.toUTCString();
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-col uppercase'>
        <span>Case Id: {caseData.id}</span>
        <span>{`Initiated: ${caseDateIso}`}</span>
        <div className='text-sm text-teal-300'>
          <div>
            Patient: {caseData.ptAge} {caseData.ptAgeUnit}, {caseData.ptGender}
          </div>
          <div>Complaint: {caseData.complaint ? caseData.complaint : '--'}</div>
          <div>Note: {caseData.note ? caseData.note : '--'}</div>
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

export default CaseNav;
