'use client';

import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Vitals } from '@prisma/client';
import { useState } from 'react';
import { calculateGcs, calculateMap } from '@/lib/math';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const VitalsEditForm = ({ vitalsSet }: { vitalsSet: any }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<Vitals>();

  const [gcsTotal, setGcsTotal] = useState<number | null>(vitalsSet.gcsTotal);
  const handleGcs = () => {
    const gcsValues = watch(['gcsE', 'gcsV', 'gcsM']);
    const [gcsE, gcsV, gcsM] = gcsValues;
    if (gcsE && gcsV && gcsM) {
      const total = calculateGcs(gcsE, gcsV, gcsM);
      if (total) {
        setGcsTotal(total);
      }
    }
  };
  const [map, setMap] = useState<number | null>(vitalsSet.map);
  const handleMap = () => {
    const mapValues = watch(['sbp', 'dbp']);
    const [sbp, dbp] = mapValues;
    if (sbp && dbp) {
      const total = calculateMap(sbp, dbp);
      if (total) {
        setMap(total);
      }
    }
  };
  const handleEditVitals = async ({ ...data }: FieldValues) => {
    const entryData = {
      ...data,
      gcsTotal,
      map,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/vitals/${vitalsSet.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entryData),
        }
      );
      if (!response.ok) {
        throw new Error('Network response error');
      }
      if (response.ok) {
        toast.success('Vitals Updated Successfully!');
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleEditVitals)}
      className='flex flex-col items-center justify-center gap-2'
    >
      <FormInput
        name='entryDateTime'
        type='datetime-local'
        width='w-52'
        defaultValue={vitalsSet.entryDateTime}
        register={register}
      />
      <span>GCS: {gcsTotal ? gcsTotal : '--'}</span>{' '}
      <FormSelect
        name='gcsE'
        label='Eye Response'
        width='w-52'
        defaultValue={vitalsSet.gcsE}
        options={[
          { name: 'Alert (4)', value: 4 },
          { name: 'Verbal (3)', value: 3 },
          { name: 'Pain (2)', value: 2 },
          { name: 'Unresponsive (1)', value: 1 },
        ]}
        validationSchema={{
          valueAsNumber: true,
          onChange() {
            handleGcs();
          },
        }}
        register={register}
      />
      <FormSelect
        name='gcsV'
        label='Verbal Response'
        width='w-52'
        defaultValue={vitalsSet.gcsV}
        options={[
          { name: 'Oriented (5)', value: 5 },
          { name: 'Confused (4)', value: 4 },
          { name: 'Inappropriate Words (3)', value: 3 },
          { name: 'Incomprehensible Sounds (2)', value: 2 },
          { name: 'Unresponsive (1)', value: 1 },
        ]}
        validationSchema={{
          valueAsNumber: true,
          onChange() {
            handleGcs();
          },
        }}
        register={register}
      />
      <FormSelect
        name='gcsM'
        width='w-52'
        label='Motor Response'
        defaultValue={vitalsSet.gcsM}
        options={[
          { name: 'Obeys Commands (6)', value: 6 },
          { name: 'Localizes to Pain (5)', value: 5 },
          { name: 'Flexion / Withdrawal from Pain (4)', value: 4 },
          { name: 'Abnormal Flexion / Decorticate (3)', value: 3 },
          { name: 'Extension / Decerebrate (2)', value: 2 },
          { name: 'Unresponsive (1)', value: 1 },
        ]}
        validationSchema={{
          valueAsNumber: true,
          onChange() {
            handleGcs();
          },
        }}
        register={register}
      />
      <FormInput
        name='pr'
        type='number'
        label='PR'
        width='w-52'
        defaultValue={vitalsSet.pr}
        placeholder='/min'
        validationSchema={{
          valueAsNumber: true,
        }}
        register={register}
      />
      <FormInput
        name='sbp'
        label='BP'
        type='number'
        width='w-52'
        placeholder='SBP'
        defaultValue={vitalsSet.sbp}
        validationSchema={{
          valueAsNumber: true,
          onChange() {
            handleMap();
          },
        }}
        register={register}
      />
      <FormInput
        name='dbp'
        width='w-52'
        type='number'
        placeholder='DBP'
        defaultValue={vitalsSet.dbp}
        validationSchema={{
          valueAsNumber: true,
          onChange() {
            handleMap();
          },
        }}
        register={register}
      />
      <FormInput
        name='rr'
        label='RR'
        width='w-52'
        type='number'
        placeholder='/min'
        defaultValue={vitalsSet.rr}
        validationSchema={{ valueAsNumber: true }}
        register={register}
      />
      <FormInput
        name='spo2'
        label='SPO2'
        width='w-52'
        type='number'
        placeholder='%'
        defaultValue={vitalsSet.spo2}
        validationSchema={{ valueAsNumber: true }}
        register={register}
      />
      <FormInput
        name='etco2'
        label='ETCO2'
        width='w-52'
        type='number'
        placeholder='mmHg'
        defaultValue={vitalsSet.etco2}
        validationSchema={{ valueAsNumber: true }}
        register={register}
      />
      <FormInput
        name='temp'
        label='TEMP'
        width='w-52'
        type='number'
        step={0.01}
        defaultValue={vitalsSet.temp}
        validationSchema={{ valueAsNumber: true }}
        register={register}
      />
      <FormSelect
        name='tempUnit'
        width='w-52'
        defaultValue={vitalsSet.tempUnit}
        options={[
          { name: '°F', value: '°F' },
          { name: '°C', value: '°C' },
        ]}
        register={register}
      />
      <FormInput
        name='bgl'
        label='BGL'
        width='w-52'
        type='number'
        defaultValue={vitalsSet.bgl}
        validationSchema={{ valueAsNumber: true }}
        register={register}
      />
      <FormSelect
        name='bglUnit'
        width='w-52'
        options={[
          { name: 'mg/dL', value: 'mg/dL' },
          { name: 'mmol/l', value: 'mmol/l' },
        ]}
        defaultValue={vitalsSet.bglUnit}
        register={register}
      />
      <div className='flex items-center gap-1'>
        <FormSelect
          name='pain'
          label='Pain Scale'
          width='w-52'
          defaultValue={vitalsSet.pain}
          options={[
            { name: '0', value: 0 },
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
            { name: '5', value: 5 },
            { name: '6', value: 6 },
            { name: '7', value: 7 },
            { name: '8', value: 8 },
            { name: '9', value: 9 },
            { name: '10', value: 10 },
          ]}
          validationSchema={{ valueAsNumber: true }}
          register={register}
        />
      </div>
      <Button
        disabled={isSubmitting}
        type='submit'
        width='w-52'
        height='h-8'
        name='Add Entry'
      />
    </form>
  );
};

export default VitalsEditForm;
