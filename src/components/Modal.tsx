import { FaX } from 'react-icons/fa6';

const Modal = ({
  children,
  toggleExpanded,
}: {
  children: React.ReactNode;
  toggleExpanded: any;
}) => {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center bg-[#000000bb] p-5'>
      <div className='flex w-full justify-end'>
        <button
          onClick={() => toggleExpanded()}
          className='flex h-8 items-center justify-center rounded-md border border-zinc-500 p-2 hover:border-red-700'
        >
          <FaX />
        </button>
      </div>
      <div className='overflow-y-scroll rounded-md'>{children}</div>
    </div>
  );
};

export default Modal;
