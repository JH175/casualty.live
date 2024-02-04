import { FaBrain, FaHeart, FaLungs, FaPerson } from 'react-icons/fa6';
import VitalsSection from './VitalsSection';
import { VitalsEditButton } from '.';

const VitalsEntry = ({ vitalsSet }: { vitalsSet: any }) => {
  return (
    <div className='flex w-36 flex-col items-center justify-center rounded-md border border-zinc-700 p-2 text-sm'>
      <div className='text-center'>{vitalsSet.entryDateTime}</div>
      <VitalsSection>
        <FaBrain className='text-teal-300' />
        GCS: {vitalsSet.gcsTotal ? vitalsSet.gcsTotal : ' -- '}
        {vitalsSet.gcsTotal ? (
          <div>
            E{vitalsSet.gcsE}/ V{vitalsSet.gcsV}/ M{vitalsSet.gcsM}
          </div>
        ) : null}
      </VitalsSection>
      <VitalsSection>
        <FaHeart className='text-teal-300' />
        <div>PR: {vitalsSet.pr ? `${vitalsSet.pr}/min` : ' -- '}</div>
        <div>
          BP:{' '}
          {vitalsSet.sbp ? (
            <>
              {vitalsSet.sbp}
              {vitalsSet.dbp ? `/${vitalsSet.dbp}` : '/P'}
              {vitalsSet.sbp && vitalsSet.dbp ? `(${vitalsSet.map})` : null}
            </>
          ) : (
            ' -- '
          )}
        </div>
      </VitalsSection>
      <VitalsSection>
        <FaLungs className='text-teal-300' />
        <div>RR: {vitalsSet.rr ? `${vitalsSet.rr}/min` : ' -- '}</div>
        <div>SPO2: {vitalsSet.spo2 ? `${vitalsSet.spo2}%` : ' -- '}</div>
        <div>ETCO2: {vitalsSet.etco2 ? `${vitalsSet.etco2}mmHg` : ' -- '}</div>
      </VitalsSection>
      <VitalsSection>
        <FaPerson className='text-teal-300' />
        <div>
          Temp: {vitalsSet.temp ? vitalsSet.temp : ' -- '}
          {vitalsSet.temp ? vitalsSet.tempUnit : null}
        </div>
        <div>
          BGL: {vitalsSet.bgl ? vitalsSet.bgl : ' -- '}
          {vitalsSet.bgl ? vitalsSet.bglUnit : null}
        </div>
        <div>Pain: {vitalsSet.pain ? `${vitalsSet.pain}/10` : ' -- '}</div>
        <div className='pt-2'>
          <VitalsEditButton vitalsSet={vitalsSet} />
        </div>
      </VitalsSection>
    </div>
  );
};

export default VitalsEntry;
