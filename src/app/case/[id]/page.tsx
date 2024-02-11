import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { ClCaseNav } from '../_components/case';
import Vitals from '../_components/vitals/Vitals';
import Webcam from 'react-webcam';
import WebCam from '@/components/WebCam';

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

  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <ClCaseNav clCaseData={clCaseData} />
      <Vitals clCaseId={clCaseId} />
      <WebCam />
    </div>
  );
};

export default ClCasePage;
