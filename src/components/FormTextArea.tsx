const FormTextArea = ({
  name,
  label,
  width,
  height,
  register,
  placeholder,
  defaultValue,
  validationSchema,
}: {
  name: string;
  label?: string;
  width?: string;
  height?: string;
  register: any;
  placeholder?: string;
  defaultValue?: any;
  validationSchema?: any;
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label ? (
        <label className='text-[.9rem] italic ' htmlFor={name}>
          {label}:{' '}
        </label>
      ) : null}
      <textarea
        {...register(name, validationSchema)}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`rounded-md border border-zinc-500 bg-white p-2 ${width} ${height}`}
      />
    </div>
  );
};

export default FormTextArea;
