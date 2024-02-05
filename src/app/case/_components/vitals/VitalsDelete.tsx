'use client';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const VitalsDelete = ({ vitalsId }: { vitalsId: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleDeleteVitals = async () => {
    try {
      await fetch(`/api/vitals/${vitalsId}`, {
        method: 'DELETE',
      });
      toast.success('Case Deleted!');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-2'>
      <span>Delete Vitals:</span>
      <span className='text-sm italic'>Type {'"DELETE"'} to confirm. </span>
      <form
        onSubmit={handleSubmit(handleDeleteVitals)}
        className='flex flex-col gap-1'
      >
        <FormInput
          name='confirmation'
          type='text'
          width='w-44'
          validationSchema={{
            required: 'Confirmation text is required.',
            validate: {
              confirmationEqual: (value: string) =>
                value === 'DELETE' || 'Text must match "DELETE".',
            },
          }}
          register={register}
        />
        <Button
          width='w-44'
          height='h-8'
          disabled={isSubmitting}
          type='submit'
          name='Delete'
        />
      </form>
      {errors.confirmation && (
        <p className='text-sm italic text-red-300'>{`${errors.confirmation.message}`}</p>
      )}
    </div>
  );
};

export default VitalsDelete;
