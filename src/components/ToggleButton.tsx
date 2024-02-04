const ToggleButton = ({
  onClick,
  children,
}: {
  onClick: any;
  children: React.ReactNode;
}) => {
  return (
    <button
      className='flex h-8 w-fit items-center justify-center gap-2 rounded-md border border-zinc-700 p-2 hover:border-teal-300'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
