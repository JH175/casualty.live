import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-10'>
      <Link href='/'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={logo} alt='' width={200} />
          <h1 className='text-2xl'>
            Casualty
            <span className='text-teal-300'>.</span>Live
          </h1>
          <p>Send & Trend Vitals</p>
        </div>
      </Link>
      <Link href='/case'>
        <span className='rounded-md border border-teal-300 p-2 hover:bg-teal-300 hover:text-black'>
          Launch New Case
        </span>
      </Link>
    </div>
  );
}
