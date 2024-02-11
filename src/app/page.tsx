import Image from 'next/image';
import logo from '../../public/logo.png';
import { ClCaseCreate } from './case/_components/case';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='p-5'>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='p-5'>
            <Image src={logo} alt='' width={200} />
          </div>
          <h1 className='text-2xl'>
            Casualty
            <span className='text-red-700'>.</span>Live
          </h1>
          <p>Lightweight & Informed Telemedicine</p>
          <ul className='p-5'>
            <li>- Share critical patient information with a link.</li>
            <li>- Non-attributional (No PHI or PPI required).</li>
            <li>- Trend and update vitals in real-time.</li>
          </ul>
        </div>
        <Link href='#newCase'>
          <span className='flex h-8 items-center justify-center rounded-md border border-red-700 bg-red-700 p-2 text-white  hover:bg-red-600   disabled:bg-white'>
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
