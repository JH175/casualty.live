'use client';

import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

const ClCaseForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCreateClCase = async (data: FieldValues) => {
    if (!data.ptGender || !data.ptAge) {
      return;
    }
    try {
      const response = await fetch('/api/case/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response error');
      }
      const newClCase = await response.json();
      router.replace(`/case/${newClCase.id}`);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className='rounded-md border bg-gradient-to-b from-zinc-900 to-zinc-800 p-5 shadow-md shadow-teal-300'>
        <form
          onSubmit={handleSubmit(handleCreateClCase)}
          className='flex flex-col gap-2'
        >
          <label htmlFor='ptGender'>Gender:</label>
          <select
            {...register('ptGender', {
              required: "Patient's gender is required.",
            })}
            className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
          >
            <option value=''>--</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          {errors.ptGender && (
            <p className='text-red-300'>{`${errors.ptGender.message}`}</p>
          )}
          <label htmlFor='ptAge'>Age:</label>
          <input
            {...register('ptAge', {
              required: "Patient's age is required.",
              valueAsNumber: true,
            })}
            type='number'
            className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
          />
          {errors.ptAge && (
            <p className='text-red-300'>{`${errors.ptAge.message}`}</p>
          )}
          <select
            {...register('ptAgeUnit')}
            defaultValue={'Y/O'}
            className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
          >
            <option value='Y/O'>Years</option>
            <option value='MO'>Months</option>
          </select>
          <label htmlFor='complaint'>Complaint:</label>
          <input
            {...register('complaint')}
            type='text'
            className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
          />
          <label htmlFor='note'>Note:</label>
          <textarea
            {...register('note')}
            className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
          />

          <button
            disabled={isSubmitting}
            type='submit'
            className='rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'
          >
            Create Case
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClCaseForm;
