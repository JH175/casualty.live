import { Header } from '@/components/Header';
import VitalsEntry from '../_components/VitalsEntry';
import VitalsChart from '../_components/VitalsChart';
import CaseNav from '../_components/CaseNav';

const CasePage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5'>
      <Header />
      <CaseNav />
      <div>
        <VitalsChart />
      </div>
      <div className='flex flex-col gap-2'>
        <VitalsEntry />
        <VitalsEntry />
        <VitalsEntry />
      </div>
    </div>
  );
};

export default CasePage;
