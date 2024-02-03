const VitalsInput = ({
  type,
  name,
  label,
  step,
  register,
  placeholder,
  validationSchema,
}: {
  name: string;
  label?: string;
  step?: number;
  type: string;
  register: any;
  placeholder?: string;
  validationSchema: any;
}) => {
  return (
    <div>
      {label ? <label htmlFor={name}>{label}: </label> : null}
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        step={step}
        placeholder={placeholder}
        className='w-20 rounded-md border border-zinc-700 bg-zinc-900 p-1 text-center'
      />
    </div>
  );
};

export default VitalsInput;
