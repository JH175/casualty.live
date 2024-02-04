'use client';

import { useState } from 'react';
import { FaBars, FaGear, FaGears, FaHandDots, FaX } from 'react-icons/fa6';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import { VitalsEditForm } from '.';

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
          <ToggleButton onClick={toggleExpanded}>
            <FaX />
          </ToggleButton>
          <span className='text-center'>Edit Vitals:</span>
          <VitalsEditForm vitalsSet={vitalsSet} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default VitalsEditButton;
