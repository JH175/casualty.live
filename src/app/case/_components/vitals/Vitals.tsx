'use client';
import { useQuery } from '@tanstack/react-query';
import { VitalsEntry } from '.';
import { Vitals } from '@prisma/client';

const Vitals = ({ clCaseId }: { clCaseId: string }) => {
  const { data: vitalsSets, isLoading } = useQuery({
    queryKey: ['vitals'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vitals/${clCaseId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json()),
  });

  return (
    <div>
      {vitalsSets?.map((vitalsSet: Vitals) => (
        <VitalsEntry key={vitalsSet.id} vitalsSet={vitalsSet} />
      ))}
    </div>
  );
};

export default Vitals;
