import ClCaseForm from '@/components/ClCaseForm';
import Link from 'next/link';

const CreateClCase = () => {
  return (
    <div className='flex h-screen  items-center justify-evenly gap-5'>
      <div>
        <Link href='/'>
          <h1 className='text-2xl'>
            Casualty
            <span className='text-teal-300'>.</span>Live
          </h1>
        </Link>
      </div>
      <div className='flex flex-col gap-5'>
        <span className='text-center text-lg'>Create & Share A New Case:</span>
        <ClCaseForm />
      </div>
    </div>
  );
};

export default CreateClCase;
