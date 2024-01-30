const VitalsEntry = () => {
  return (
    <div className='flex rounded-md border border-teal-300'>
      <div className='flex flex-col items-center justify-center border p-2 text-center'>
        <div>0300</div>
        <div className='text-sm italic '>24JAN2024</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>GCS</div>
        <div>15</div>
        <div className='text-sm italic text-teal-300'>E3V4M5</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>RR</div>
        <div>19</div>
        <div className='text-sm italic text-teal-300'>/min</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>SPO2</div>
        <div>99</div>
        <div className='text-sm italic text-teal-300'>%</div>
      </div>
      <div className='border  p-2 text-center'>
        <div className='text-sm text-teal-300'>ETCO2</div>
        <div>40</div>
        <div className='text-sm italic text-teal-300'>mmHg</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>PR</div>
        <div>60</div>
        <div className='text-sm italic text-teal-300'>/min</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>BP</div>
        <div>120/80 (90)</div>
        <div className='text-sm italic text-teal-300'>mmHg</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>TEMP</div>
        <div>96.8</div>
        <div className='text-sm italic text-teal-300'>°F</div>
      </div>
      <div className='border  p-2 text-center'>
        <div className='text-sm text-teal-300'>BGL</div>
        <div>70</div>
        <div className='text-sm italic text-teal-300'>mg/dL</div>
      </div>
      <div className='border p-2 text-center'>
        <div className='text-sm text-teal-300'>Urine Out.</div>
        <div>300</div>
        <div className='text-sm italic text-teal-300'>mL/hr</div>
      </div>
      <div className='border  p-2 text-center'>
        <div className='text-sm text-teal-300'>ECG</div>
        <div>NSR</div>
        <div className='text-sm italic text-teal-300'>Rhyth.</div>
      </div>
      <div className='border  p-2 text-center'>
        <div className='text-sm text-teal-300'>ECG</div>
        <div>Unremark.</div>
        <div className='text-sm italic text-teal-300'>12-Lead</div>
      </div>
    </div>
  );
};

export default VitalsEntry;
