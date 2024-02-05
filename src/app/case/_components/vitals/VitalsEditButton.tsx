'use client';

import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import { VitalsDeleteButton, VitalsEditForm } from '.';

const VitalsEditButton = ({ vitalsSet }: { vitalsSet: any }) => {
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
            <VitalsDeleteButton vitalsId={vitalsSet.id} />
          </div>

          <span className='text-center'>Edit Vitals:</span>
          <VitalsEditForm vitalsSet={vitalsSet} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default VitalsEditButton;
