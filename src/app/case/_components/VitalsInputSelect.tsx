const VitalsInputSelect = ({
  name,
  label,
  step,
  register,
  placeholder,
  options,
  validationSchema,
  defaultValue,
}: {
  name: string;
  label?: string;
  step?: number;
  register: any;
  placeholder?: string;
  options: { name: string; value: number | string }[];
  validationSchema?: any;
  defaultValue?: any;
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label ? <label htmlFor={name}>{label}: </label> : null}
      <select
        {...register(name, validationSchema)}
        id={name}
        step={step}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='w-full rounded-md border border-zinc-700 bg-zinc-900 p-1 text-center'
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

export default VitalsInputSelect;
