import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <Link href='/'>
        <h1 className='text-2xl'>
          Casualty
          <span className='text-red-700'>.</span>Live
        </h1>
      </Link>
    </div>
  );
};
