import { Header } from '@/components/Header';
import VitalsChart from '../_components/VitalsChart';
import CaseNav from '../_components/CaseNav';
import prisma from '@/lib/db';
import VitalsTable from '../_components/VitalsTable';

const CasePage = async () => {
  const entriesData = await prisma.entry.findMany();
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5'>
      <Header />
      <CaseNav />
      <div>
        <VitalsTable data={entriesData} />
      </div>
    </div>
  );
};

export default CasePage;
