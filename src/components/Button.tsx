const Button = ({
  onClick,
  width,
  height,
  name,
  type,
  disabled,
}: {
  onClick?: any;
  width?: string;
  height?: string;
  name: string;
  type: any;
  disabled?: any;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900 ${height} ${width}`}
    >
      {name}
    </button>
  );
};

export default Button;
