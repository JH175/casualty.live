'use client';

import { Vitals } from '@prisma/client';
import { useReactTable, ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

type VitalsTableProps = {
  data: any;
};

const VitalsTable = (props: VitalsTableProps) => {
  const [data, setData] = useState<Vitals[]>([]);

  return <div>VitalsTable</div>;
};

export default VitalsTable;
