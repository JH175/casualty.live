const VitalsSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-20 flex-col items-center justify-center p-2'>
      {children}
    </div>
  );
};

export default VitalsSection;
