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
      {label ? <label htmlFor={name}>{label}: </label> : null}
      <textarea
        {...register(name, validationSchema)}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`rounded-md border border-zinc-700 bg-zinc-900 text-center ${width} ${height}`}
      />
    </div>
  );
};

export default FormTextArea;