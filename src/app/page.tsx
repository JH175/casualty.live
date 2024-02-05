import Image from 'next/image';
import logo from '../../public/logo.png';
import { ClCaseCreate } from './case/_components/case';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='p-5'>
            <Image src={logo} alt='' width={200} />
          </div>
          <h1 className='text-2xl'>
            Casualty
            <span className='text-teal-300'>.</span>Live
          </h1>
          <p>Lightweight & Informed Telemedicine</p>
          <ul className='p-5'>
            <li>- Share critical patient information with a link.</li>
            <li>- Non-attributional (No PHI or PPI required).</li>
            <li>- Trend and update vitals in real-time.</li>
          </ul>
        </div>
        <Link href='#newCase'>
          <span className='flex h-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white hover:bg-teal-300 hover:text-black disabled:bg-zinc-900'>
            Launch New Case
          </span>
        </Link>
      </div>
      <div
        id='newCase'
        className='flex h-screen flex-col items-center justify-center gap-5'
      >
        <span className='text-lg'>Launch New Case</span>
        <ClCaseCreate />
      </div>
    </div>
  );
}
