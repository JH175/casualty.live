'use client';

import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Vitals } from '@prisma/client';
import VitalsInput from './VitalsInput';
import VitalsInputSelect from './VitalsInputSelect';
import { useState } from 'react';
import { calculateGcs } from '@/lib/math';
import { FaBrain, FaHeart, FaLungs, FaPerson } from 'react-icons/fa6';

const AddVitals = ({ clCaseId }: { clCaseId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<Vitals>();

  const [gcsTotal, setGcsTotal] = useState<number | null>(null);

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

  const handleAddVitals = async ({ ...data }: FieldValues) => {
    const entryData = {
      clCaseId,
      ...data,
    };
    try {
      const response = await fetch('/api/vitals/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entryData),
      });
      console.log(entryData);
      if (!response.ok) {
        throw new Error('Network response error');
      }
      if (response.ok) {
        toast.success('Vitals added!');
      }
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='flex flex-col p-5'>
        <form
          onSubmit={handleSubmit(handleAddVitals)}
          className='flex flex-col items-center justify-center gap-2'
        >
          <div className='flex flex-col items-center gap-2'>
            <FaBrain className='text-teal-300' size={25} />
            <span>GCS: {gcsTotal ? gcsTotal : '--'}</span>{' '}
          </div>
          <VitalsInputSelect
            name='gcsE'
            label='Eye Response'
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
          <VitalsInputSelect
            name='gcsV'
            label='Verbal Response'
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
          <VitalsInputSelect
            name='gcsM'
            label='Motor Response'
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
          <div className='flex flex-col items-center gap-2  border-teal-300'>
            <FaHeart className='text-teal-300' size={25} />
          </div>
          <VitalsInput
            name='pr'
            type='number'
            label='PR'
            placeholder='/min'
            validationSchema={{ valueAsNumber: true }}
            register={register}
          />
          <div className='flex items-center gap-1'>
            <span>BP: </span>
            <VitalsInput
              name='sbp'
              type='number'
              placeholder='SBP'
              validationSchema={{ valueAsNumber: true }}
              register={register}
            />
            /
            <VitalsInput
              name='dbp'
              type='number'
              placeholder='DBP'
              validationSchema={{ valueAsNumber: true }}
              register={register}
            />
          </div>
          <div className='flex flex-col items-center gap-2'>
            <FaLungs className='text-teal-300' size={25} />
          </div>
          <VitalsInput
            name='rr'
            label='RR'
            type='number'
            placeholder='/min'
            validationSchema={{ valueAsNumber: true }}
            register={register}
          />
          <VitalsInput
            name='spo2'
            label='SPO2'
            type='number'
            placeholder='%'
            validationSchema={{ valueAsNumber: true }}
            register={register}
          />
          <VitalsInput
            name='etco2'
            label='ETCO2'
            type='number'
            placeholder='mmHg'
            validationSchema={{ valueAsNumber: true }}
            register={register}
          />
          <div className='flex flex-col items-center gap-2'>
            <FaPerson className='text-teal-300' size={25} />
          </div>
          <div className='flex items-center gap-1'>
            <VitalsInput
              name='temp'
              label='TEMP'
              type='number'
              step={0.01}
              validationSchema={{ valueAsNumber: true }}
              register={register}
            />
            <VitalsInputSelect
              name='tempUnit'
              options={[
                { name: '°F', value: 'F' },
                { name: '°C', value: 'C' },
              ]}
              register={register}
              defaultValue={'F'}
              validationSchema={{ valueAsNumber: true }}
            />
          </div>
          <div className='flex items-center gap-1'>
            <VitalsInput
              name='bgl'
              label='BGL'
              type='number'
              validationSchema={{ valueAsNumber: true }}
              register={register}
            />
            <VitalsInputSelect
              name='bglUnit'
              options={[
                { name: 'mg/dL', value: 'mg/dL' },
                { name: 'mmol/l', value: 'mmol/l' },
              ]}
              defaultValue={'mg/dL'}
              register={register}
            />
          </div>
          <div className='flex items-center gap-1'>
            <label htmlFor='pain'>Pain Scale: </label>
            <VitalsInputSelect
              name='pain'
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
          <button
            disabled={isSubmitting}
            type='submit'
            className='rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'
          >
            Add Entry
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVitals;
