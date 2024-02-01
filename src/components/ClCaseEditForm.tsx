'use client';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ClCaseEditForm = ({
  clCaseData,
  toggleModal,
}: {
  clCaseData: any;
  toggleModal: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleEditClCase = async (data: FieldValues) => {
    if (!data.ptGender || !data.ptAge) {
      return;
    }
    try {
      const response = await fetch(`/api/case/${clCaseData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response error');
      }
      if (response.ok) {
        toast.success('Case Updated Successfully!');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <span>Edit Case:</span>
      <form
        onSubmit={handleSubmit(handleEditClCase)}
        className='flex flex-col gap-2'
      >
        <label htmlFor='ptGender'>Gender:</label>
        <select
          {...register('ptGender', {
            required: "Patient's gender is required.",
          })}
          defaultValue={clCaseData.ptGender}
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
          defaultValue={clCaseData.ptAge}
          className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
        />
        {errors.ptAge && (
          <p className='text-red-300'>{`${errors.ptAge.message}`}</p>
        )}
        <select
          {...register('ptAgeUnit')}
          defaultValue={clCaseData.ptAgeUnit}
          className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
        >
          <option value='Y/O'>Years</option>
          <option value='MO'>Months</option>
        </select>
        <label htmlFor='complaint'>Complaint:</label>
        <input
          {...register('complaint')}
          type='text'
          defaultValue={clCaseData.complaint}
          className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
        />
        <label htmlFor='note'>Note:</label>
        <textarea
          {...register('note')}
          defaultValue={clCaseData.note}
          className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
        />

        <button
          disabled={isSubmitting}
          type='submit'
          className='rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'
        >
          Save
        </button>
        <button
          onClick={() => {
            toggleModal();
          }}
          type='submit'
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ClCaseEditForm;
