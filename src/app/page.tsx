import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5'>
      <Link href='/'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={logo} alt='' width={200} />
          <h1 className='text-2xl'>
            Casualty
            <span className='text-teal-300'>.</span>Live
          </h1>
          <p>Lightweight & Informed Telemedicine</p>
        </div>
      </Link>
      <Link href='/case'>
        <span className='rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'>
          Launch
        </span>
      </Link>
    </div>
  );
}
