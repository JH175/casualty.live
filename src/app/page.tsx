import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import ClCaseCreateForm from '@/components/ClCaseCreateForm';

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-evenly'>
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
      <div className='flex flex-col gap-5'>
        <span className='text-center text-lg'>Create & Share A New Case:</span>
        <ClCaseCreateForm />
      </div>
    </div>
  );
}
