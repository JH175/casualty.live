'use client';

import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import SideBar from '@/components/SideBar';
import { ClCaseDeleteButton, ClCaseEdit } from '.';
import ToggleButton from '@/components/ToggleButton';

const ClCaseEditButton = ({ clCaseData }: { clCaseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ToggleButton onClick={toggleExpanded}>
        <FaBars />
      </ToggleButton>
      {expanded ? (
        <SideBar>
          <div className='flex justify-between'>
            <ToggleButton onClick={toggleExpanded}>
              <FaX />
            </ToggleButton>
            <ClCaseDeleteButton clCaseId={clCaseData.id} />
          </div>
          <span className='text-center'>Case Settings:</span>
          <ClCaseEdit clCaseData={clCaseData} toggleExpanded={toggleExpanded} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default ClCaseEditButton;
