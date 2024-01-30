import { Header } from '@/components/Header';
import CaseNav from '../_components/CaseNav';
import prisma from '@/lib/db';
import VitalsTable from '../_components/VitalsTable';
import { redirect } from 'next/navigation';

const CasePage = async ({ params }: { params: { id: string } }) => {
  const caseId = params.id;
  const caseData = await prisma.case.findUnique({
    where: {
      id: caseId,
    },
  });
  if (!caseData) {
    redirect('/');
  }
  const entriesData = await prisma.entry.findMany();
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5'>
      <Header />
      <CaseNav caseData={caseData} />
      <div>
        <VitalsTable data={entriesData} />
      </div>
    </div>
  );
};

export default CasePage;
