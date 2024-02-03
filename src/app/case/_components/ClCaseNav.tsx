'use client';

import ClCaseDelete from '@/components/ClCaseDelete';
import ClCaseEdit from '@/components/ClCaseEdit';
import ClCaseSharing from '@/components/ClCaseSharing';
import Modal from '@/components/Modal';
import Link from 'next/link';
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
        {expanded ? (
          <Modal toggleExpanded={toggleExpanded}>
            <div className='flex h-full w-full flex-col'>
              <div>
                <div
                  id='details'
                  className='flex flex-col items-center justify-center p-5'
                >
                  <ClCaseEdit
                    toggleModal={toggleExpanded}
                    clCaseData={clCaseData}
                  />
                </div>
                <div
                  id='details'
                  className='flex flex-col items-center justify-center p-5'
                >
                  <ClCaseSharing clCaseId={clCaseData.id} />
                </div>
                <div
                  id='delete'
                  className='flex flex-col items-center justify-center p-5'
                >
                  <ClCaseDelete clCaseId={clCaseData.id} />
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
        {expanded ? null : (
          <button
            className='rounded-md border p-2 hover:border-teal-300'
            onClick={toggleExpanded}
          >
            <FaBars />
          </button>
        )}
      </div>
    </div>
  );
};

export default ClCaseNav;
