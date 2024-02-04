'use client';
import { useState } from 'react';
import { VitalsAddForm } from '../vitals';
import { ClCaseDelete, ClCaseEdit, ClCaseSharing } from '.';
import Modal from '@/components/Modal';
import { FaBars } from 'react-icons/fa6';
import { FaPlusCircle } from 'react-icons/fa';

const ClCaseNav = ({ clCaseData }: { clCaseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const [addMode, setAddMode] = useState(false);
  const toggleAddMode = () => {
    setAddMode(!addMode);
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
      {addMode ? (
        <Modal toggleExpanded={toggleAddMode}>
          <div className='flex h-full w-full flex-col'>
            <VitalsAddForm clCaseId={clCaseData.id} />
          </div>
        </Modal>
      ) : null}
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

      {expanded || addMode ? null : (
        <div className='flex gap-2'>
          <button
            className='h-10 rounded-md border p-2 hover:border-teal-300'
            onClick={toggleAddMode}
          >
            <div className='flex items-center gap-2'>
              <FaPlusCircle /> Vitals
            </div>
          </button>
          <button
            className='flex h-10 w-10 items-center justify-center rounded-md border p-2  hover:border-teal-300'
            onClick={toggleExpanded}
          >
            <FaBars />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClCaseNav;
