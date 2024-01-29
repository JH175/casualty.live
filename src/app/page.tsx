import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Link href='/case'>
          <span className='p-2 border border-teal-300'>Launch New Case</span>
        </Link>
      </div>
    </div>
  );
}
