const FormSelect = ({
  name,
  label,
  width,
  register,
  options,
  validationSchema,
  defaultValue,
}: {
  name: string;
  label?: string;
  width?: string;
  register: any;
  options: { name: string; value: number | string }[];
  validationSchema?: any;
  defaultValue?: any;
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label ? (
        <label className='text-[.9rem] italic text-zinc-300' htmlFor={name}>
          {label}:{' '}
        </label>
      ) : null}
      <select
        {...register(name, validationSchema)}
        id={name}
        defaultValue={defaultValue}
        className={`h-8 rounded-md border border-zinc-700 bg-zinc-900 text-center ${width}`}
      >
        <option value=''>--</option>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
