import ClCaseNav from '../_components/ClCaseNav';
import prisma from '@/lib/db';
import VitalsTable from '../_components/VitalsTable';
import { redirect } from 'next/navigation';

const ClCasePage = async ({ params }: { params: { id: string } }) => {
  const clCaseId = params.id;
  const clCaseData = await prisma.clCase.findUnique({
    where: {
      id: clCaseId,
    },
  });

  if (!clCaseData) {
    redirect('/');
  }

  const entriesData = await prisma.entry.findMany({
    where: {
      clCaseId: clCaseId,
    },
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      <ClCaseNav clCaseData={clCaseData} />
      <div>
        <VitalsTable data={entriesData} />
      </div>
    </div>
  );
};

export default ClCasePage;
