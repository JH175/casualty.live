import CaseForm from '@/components/CaseForm';
import { Header } from '@/components/Header';

const CreateCase = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5'>
      <CaseForm />
    </div>
  );
};

export default CreateCase;
