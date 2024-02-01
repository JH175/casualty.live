import { FaX } from 'react-icons/fa6';

const Modal = ({
  children,
  toggleExpanded,
}: {
  children: React.ReactNode;
  toggleExpanded: any;
}) => {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center bg-[#000000bb]'>
      <div className='flex w-full justify-end'>
        <button
          onClick={() => toggleExpanded()}
          className='rounded-md border p-2 hover:border-teal-300'
        >
          <FaX />
        </button>
      </div>
      <div className='h-[90vh] w-[90vw] overflow-y-scroll rounded-md bg-zinc-900 p-5 md:w-[60vw]'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
