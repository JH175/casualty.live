'use client';

const CaseForm = () => {
  const handleCreateCase = () => {};
  return (
    <div className='rounded-md border border-teal-300 p-5 text-teal-300'>
      <form className='flex flex-col gap-2'>
        <label htmlFor='gender'>Gender:</label>
        <select className='rounded-md border border-teal-300 bg-zinc-900 p-1'>
          <option value='null' disabled selected>
            --
          </option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <label htmlFor='age'>Age:</label>
        <input
          type='text'
          className='rounded-md border border-teal-300 bg-zinc-900 p-1'
        />
        <select className='rounded-md border border-teal-300 bg-zinc-900 p-1'>
          <option value='null' disabled selected>
            --
          </option>
          <option value='years' selected>
            Years
          </option>
          <option value='months'>Months</option>
        </select>

        <label htmlFor='note'>Note:</label>
        <textarea className='rounded-md border border-teal-300 bg-zinc-900 p-1' />
        <label htmlFor='expires'>Delete Case After:</label>
        <select className='rounded-md border border-teal-300 bg-zinc-900 p-1'>
          <option value='null' disabled selected>
            --
          </option>
          <option value='24'>1 Day</option>
          <option value='48'>2 Days</option>
          <option value='72'>3 Days</option>
          <option value='1week'>1 Week</option>
          <option value='1month'>1 Month</option>
          <option value='1year'>1 Year</option>
        </select>
        <button className='rounded-md border border-teal-300 bg-zinc-900 p-1 text-white hover:bg-teal-300 hover:text-black'>
          Create Case
        </button>
      </form>
    </div>
  );
};

export default CaseForm;
