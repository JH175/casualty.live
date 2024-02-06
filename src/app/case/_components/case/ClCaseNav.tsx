'use client';

import { ClCaseEditButton, ClCaseShareButton } from '.';
import VitalsAddButton from '../vitals/VitalsAddButton';

const ClCaseNav = ({ clCaseData }: { clCaseData: any }) => {
  const clCaseDate = clCaseData.createdAt;
  const clCaseDateIso = clCaseDate.toUTCString();
  return (
    <div className=' flex w-full justify-between'>
      <div className='flex flex-col uppercase'>
        <span className='text-sm'>Case Id: {clCaseData.id}</span>
        <span className='text-sm'>{`Initiated: ${clCaseDateIso}`}</span>
        <div className='text-sm text-red-700'>
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

      <div className='flex gap-2'>
        <VitalsAddButton clCaseData={clCaseData} />
        <ClCaseEditButton clCaseData={clCaseData} />
        <ClCaseShareButton clCaseId={clCaseData.id} />
      </div>
    </div>
  );
};

export default ClCaseNav;
