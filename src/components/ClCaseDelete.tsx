'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ClCaseDelete = ({ clCaseId }: { clCaseId: string }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleDeleteClCase = async () => {
    try {
      await fetch(`/api/case/${clCaseId}`, {
        method: 'DELETE',
      });
      toast.success('Case Deleted!');
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <span>Delete Case:</span>
      <span>
        Deleting this case is permanent, please type DELETE CASE to confirm.
      </span>

      <form
        onSubmit={handleSubmit(handleDeleteClCase)}
        className='flex flex-col gap-2'
      >
        <input
          {...register('confirmation', {
            required: 'Confirmation text is required.',
            validate: {
              confirmationEqual: (value) =>
                value === 'DELETE CASE' ||
                'Confirmation text must match "DELETE CASE".',
            },
          })}
          type='text'
          className='rounded-md border border-zinc-700 bg-zinc-900 p-1'
        />
        {errors.confirmation && (
          <p className='text-red-300'>{`${errors.confirmation.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          type='submit'
          className='rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default ClCaseDelete;
