'use client';

import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { VitalsAddForm } from '.';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';

const VitalsAddButton = ({ clCaseData }: { clCaseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ToggleButton onClick={toggleExpanded}>
        <FaPlusCircle /> Vitals
      </ToggleButton>
      {expanded ? (
        <SideBar>
          <ToggleButton onClick={toggleExpanded}>
            <FaX />
          </ToggleButton>
          <span className='text-center'>Add Vitals:</span>
          <VitalsAddForm clCaseId={clCaseData.id} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default VitalsAddButton;
