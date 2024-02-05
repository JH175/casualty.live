'use client';

import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import { ClCaseDelete } from '.';

const ClCaseDeleteButton = ({ clCaseId }: { clCaseId: string }) => {
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
          <ClCaseDelete clCaseId={clCaseId} />
        </SideBar>
      ) : null}
    </div>
  );
};

export default ClCaseDeleteButton;
