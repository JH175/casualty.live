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
      className={`flex items-center justify-center rounded-md border  bg-red-700 p-2 text-white hover:bg-red-600 hover:text-white disabled:bg-black ${height} ${width}`}
    >
      {name}
    </button>
  );
};

export default Button;
