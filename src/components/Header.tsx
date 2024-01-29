import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export const Header = () => {
  return (
    <div className='p-5'>
      <Link href='/'>
        <h1 className='text-2xl'>
          Casualty
          <span className='text-teal-300'>.</span>Live
        </h1>
      </Link>
    </div>
  );
};
