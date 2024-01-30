'use client';

import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

const CaseForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();
  const handleCreateCase = async (data: FieldValues) => {
    try {
      await fetch('/api/case/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ptGender: data.ptGender,
          ptAge: data.ptAge,
          ptAgeUnit: data.ptAgeUnit,
          note: data.note,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          let newCase = json;
          router.replace(`/case/${newCase.id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {isSubmitting || isSubmitted ? (
        <Loading />
      ) : (
        <div className='rounded-md border border-zinc-700 p-5 text-teal-300 '>
          <form
            onSubmit={handleSubmit(handleCreateCase)}
            className='flex flex-col gap-2'
          >
            <label htmlFor='ptGender'>Gender:</label>
            <select
              {...register('ptGender')}
              className='rounded-md border border-teal-300 bg-zinc-900 p-1'
            >
              <option value='null' disabled>
                --
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            <label htmlFor='ptAge'>Age:</label>
            <input
              {...register('ptAge')}
              type='number'
              className='rounded-md border border-teal-300 bg-zinc-900 p-1'
            />
            <select
              {...register('ptAgeUnit')}
              className='rounded-md border border-teal-300 bg-zinc-900 p-1'
            >
              <option value='null' disabled>
                --
              </option>
              <option value='years'>Years</option>
              <option value='months'>Months</option>
            </select>

            <label htmlFor='note'>Note:</label>
            <textarea
              {...register('note')}
              className='rounded-md border border-teal-300 bg-zinc-900 p-1'
            />

            <button
              type='submit'
              className='rounded-md border border-teal-300 bg-zinc-900 p-1 text-white hover:bg-teal-300 hover:text-black'
            >
              Create Case
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CaseForm;
