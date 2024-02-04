'use client';

import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import SideBar from '@/components/SideBar';
import { ClCaseDelete, ClCaseEdit } from '.';
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
          <ToggleButton onClick={toggleExpanded}>
            <FaX />
          </ToggleButton>
          <span className='text-center'>Case Settings:</span>
          <ClCaseEdit clCaseData={clCaseData} />
          <ClCaseDelete clCaseId={clCaseData.id} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default ClCaseEditButton;
