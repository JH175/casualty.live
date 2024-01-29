import CaseForm from '@/components/CaseForm';
import { Header } from '@/components/Header';

const CreateCase = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5'>
      <Header />
      <CaseForm />
    </div>
  );
};

export default CreateCase;
