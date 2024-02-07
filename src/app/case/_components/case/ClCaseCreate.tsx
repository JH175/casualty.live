'use client';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import FormTextArea from '@/components/FormTextArea';
import Button from '@/components/Button';

const ClCaseCreate = () => {
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/case/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response error');
      }
      if (response.ok) {
        toast.success('New Case Created!');
      }
      const newClCase = await response.json();
      router.replace(`/case/${newClCase.id}`);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex justify-center rounded-md bg-white p-5 drop-shadow-md'>
      <form
        onSubmit={handleSubmit(handleCreateClCase)}
        className='flex flex-col gap-2'
      >
        <FormInput
          name='ptAge'
          type='number'
          label='Age'
          min={1}
          max={120}
          width='w-44'
          validationSchema={{
            valueAsNumber: true,
            required: "Patient's age is required.",
          }}
          register={register}
        />
        <FormSelect
          name='ptAgeUnit'
          width='w-44'
          options={[
            { name: 'Years', value: 'Y/O' },
            { name: 'Months', value: 'MO' },
          ]}
          defaultValue={'Y/O'}
          register={register}
        />

        <FormSelect
          name='ptGender'
          label='Gender'
          width='w-44'
          options={[
            { name: 'Male', value: 'Male' },
            { name: 'Female', value: 'Female' },
          ]}
          validationSchema={{
            required: "Patient's gender is required.",
          }}
          register={register}
        />
        <FormInput
          name='complaint'
          type='text'
          label='Complaint'
          width='w-44'
          register={register}
        />

        <FormTextArea
          name='note'
          label='Note'
          width='w-44'
          height='h-32'
          register={register}
        />
        <Button
          name='Create Case'
          width='w-44'
          height='h-8'
          type='submit'
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ClCaseCreate;
