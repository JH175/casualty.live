import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { ClCaseNav } from '../_components/case';
import { VitalsAddButton, VitalsEntry } from '../_components/vitals';

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
    orderBy: {
      entryDateTime: 'asc',
    },
  });

  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <ClCaseNav clCaseData={clCaseData} />
      <div className='flex flex-col  gap-2'>
        {vitalsSets.length >= 1 ? (
          <>
            {vitalsSets?.map((vitalsSet) => (
              <VitalsEntry key={vitalsSet.id} vitalsSet={vitalsSet} />
            ))}
          </>
        ) : (
          <div className='flex flex-col items-center justify-center gap-5'>
            <p>Add vitals to get started...</p>
            <VitalsAddButton clCaseData={clCaseData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClCasePage;
