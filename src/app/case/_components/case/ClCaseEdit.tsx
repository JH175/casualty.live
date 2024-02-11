'use client';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import FormTextArea from '@/components/FormTextArea';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ClCaseEdit = ({
  clCaseData,
  toggleExpanded,
}: {
  clCaseData: any;
  toggleExpanded: any;
}) => {
  const router = useRouter();
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/case/${clCaseData.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response error');
      }
      if (response.ok) {
        toast.success('Case Updated Successfully!');
        toggleExpanded();
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleSubmit(handleEditClCase)}
        className='flex flex-col gap-2'
      >
        <FormInput
          name='ptAge'
          type='number'
          label='Age'
          min={1}
          max={120}
          width='w-44'
          defaultValue={clCaseData.ptAge}
          validationSchema={{
            valueAsNumber: true,
            required: "Patient's age is required.",
          }}
          register={register}
        />
        {errors.ptAge ? (
          <p className='text-red-500'>{`${errors.ptAge.message}`}</p>
        ) : null}
        <FormSelect
          name='ptAgeUnit'
          width='w-44'
          defaultValue={clCaseData.ptAgeUnit}
          options={[
            { name: 'Years', value: 'Y/O' },
            { name: 'Months', value: 'MO' },
          ]}
          register={register}
        />

        <FormSelect
          name='ptGender'
          label='Gender'
          width='w-44'
          defaultValue={clCaseData.ptGender}
          options={[
            { name: 'Male', value: 'Male' },
            { name: 'Female', value: 'Female' },
          ]}
          validationSchema={{
            required: "Patient's gender is required.",
          }}
          register={register}
        />
        {errors.ptGender ? (
          <p className='text-red-500'>{`${errors.ptGender.message}`}</p>
        ) : null}
        <FormInput
          name='complaint'
          type='text'
          label='Complaint'
          width='w-44'
          defaultValue={clCaseData.complaint}
          register={register}
        />
        <FormTextArea
          name='note'
          label='Note'
          width='w-44'
          height='h-32'
          defaultValue={clCaseData.note}
          register={register}
        />
        <Button
          name='Save Case'
          width='w-44'
          height='h-8'
          type='submit'
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ClCaseEdit;
