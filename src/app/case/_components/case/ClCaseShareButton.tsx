'use client';
import toast from 'react-hot-toast';
import { FaShare } from 'react-icons/fa6';

const ClCaseShareButton = ({ clCaseId }: { clCaseId: any }) => {
  const shareLink = `${process.env.NEXT_PUBLIC_BASE_URL}/case/${clCaseId}`;
  const copyShareLink = () => {
    try {
      navigator.clipboard.writeText(shareLink);
      toast.success('Share Link Copied!');
    } catch (err) {}
  };

  return (
    <button
      onClick={copyShareLink}
      className='flex h-8 items-center justify-center rounded-md border border-zinc-500 p-2 hover:border-red-700'
    >
      <FaShare />
    </button>
  );
};

export default ClCaseShareButton;
