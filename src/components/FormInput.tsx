const FormInput = ({
  type,
  name,
  label,
  width,
  step,
  min,
  max,
  register,
  placeholder,
  defaultValue,
  validationSchema,
}: {
  name: string;
  label?: string;
  width?: string;
  step?: number;
  type: string;
  min?: number;
  max?: number;
  register: any;
  placeholder?: string;
  defaultValue?: any;
  validationSchema?: any;
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label ? (
        <label className='text-[.9rem] italic text-blue-800' htmlFor={name}>
          {label}:{' '}
        </label>
      ) : null}
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        step={step}
        min={min}
        max={max}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`h-8 rounded-md border  border-zinc-500 bg-white text-center ${width}`}
      />
    </div>
  );
};

export default FormInput;
