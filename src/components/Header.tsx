import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <Link href='/'>
        <h1 className='text-2xl'>
          Casualty
          <span className='text-teal-300'>.</span>Live
        </h1>
      </Link>
    </div>
  );
};
