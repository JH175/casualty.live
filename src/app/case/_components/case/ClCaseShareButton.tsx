'use client';
import toast from 'react-hot-toast';
import { FaShare } from 'react-icons/fa6';

const ClCaseShareButton = ({ clCaseId }: { clCaseId: any }) => {
  const shareLink = `http://localhost:3000/case/${clCaseId}`;
  const copyShareLink = () => {
    try {
      navigator.clipboard.writeText(shareLink);
      toast.success('Share Link Copied!');
    } catch (err) {}
  };

  return (
    <button
      onClick={copyShareLink}
      className='flex h-8 items-center justify-center rounded-md border border-zinc-700 p-2 hover:border-teal-300'
    >
      <FaShare />
    </button>
  );
};

export default ClCaseShareButton;
