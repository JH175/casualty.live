import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { ClCaseNav } from '../_components/case';
import { VitalsEntry } from '../_components/vitals';

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

  const vitalsSets = await prisma.vitals.findMany({
    where: {
      clCaseId: clCaseId,
    },
  });

  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <ClCaseNav clCaseData={clCaseData} />
      <div className='flex gap-2'>
        {vitalsSets?.map((vitalsSet) => (
          <VitalsEntry key={vitalsSet.id} vitalsSet={vitalsSet} />
        ))}
      </div>
    </div>
  );
};

export default ClCasePage;
