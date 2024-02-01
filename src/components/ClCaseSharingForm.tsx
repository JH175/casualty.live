'use client';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaCopy } from 'react-icons/fa6';

const ClCaseSharingForm = ({ clCaseId }: { clCaseId: any }) => {
  const shareLink = `http://localhost:3000/case/${clCaseId}`;
  const copyShareLink = () => {
    try {
      navigator.clipboard.writeText(shareLink);
      toast.success('Share Link Copied!');
    } catch (err) {}
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <span>Case Sharing:</span>
      <div className='flex items-center gap-2'>
        <div className='rounded-md bg-zinc-950 p-2'>{shareLink}</div>
        <button onClick={copyShareLink} className='hover:text-teal-300'>
          <FaCopy />
        </button>
      </div>
    </div>
  );
};

export default ClCaseSharingForm;
