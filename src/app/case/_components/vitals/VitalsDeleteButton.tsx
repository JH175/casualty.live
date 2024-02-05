'use client';

import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { VitalsDelete } from '.';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';

const VitalsDeleteButton = ({ vitalsId }: { vitalsId: string }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ToggleButton onClick={toggleExpanded}>
        <FaTrash />
      </ToggleButton>
      {expanded ? (
        <SideBar>
          <ToggleButton onClick={toggleExpanded}>
            <FaX />
          </ToggleButton>
          <span className='text-center'>Add Vitals:</span>
          <VitalsDelete vitalsId={vitalsId} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default VitalsDeleteButton;
