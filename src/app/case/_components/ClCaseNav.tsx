'use client';

import Modal from '@/components/Modal';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

const ClCaseNav = ({ clCaseData }: { clCaseData: any }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const clCaseDate = clCaseData.createdAt;
  const clCaseDateIso = clCaseDate.toUTCString();
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-col uppercase'>
        <span>Case Id: {clCaseData.id}</span>
        <span>{`Initiated: ${clCaseDateIso}`}</span>
        <div className='text-sm text-teal-300'>
          <div>
            Patient: {clCaseData.ptAge} {clCaseData.ptAgeUnit},{' '}
            {clCaseData.ptGender}
          </div>
          <div>
            Complaint: {clCaseData.complaint ? clCaseData.complaint : '--'}
          </div>
          <div>Note: {clCaseData.note ? clCaseData.note : '--'}</div>
        </div>
      </div>
      <div>
        {expanded ? (
          <Modal toggleExpanded={toggleExpanded}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            maiores modi laudantium veritatis error rerum numquam commodi quos,
            suscipit corrupti officiis quasi non soluta blanditiis esse eum,
            ipsa odit molestias. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis iusto tempore voluptatibus dignissimos
            quas, maiores provident voluptas aliquam repudiandae! Pariatur
            soluta eveniet officia! Placeat ex accusamus aliquid porro, non
            doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore maiores modi laudantium veritatis error rerum numquam
            commodi quos, suscipit corrupti officiis quasi non soluta blanditiis
            esse eum, ipsa odit molestias. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corporis iusto tempore voluptatibus
            dignissimos quas, maiores provident voluptas aliquam repudiandae!
            Pariatur soluta eveniet officia! Placeat ex accusamus aliquid porro,
            non doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore maiores modi laudantium veritatis error rerum
            numquam commodi quos, suscipit corrupti officiis quasi non soluta
            blanditiis esse eum, ipsa odit molestias. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Corporis iusto tempore
            voluptatibus dignissimos quas, maiores provident voluptas aliquam
            repudiandae! Pariatur soluta eveniet officia! Placeat ex accusamus
            aliquid porro, non doloremque? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore maiores modi laudantium
            veritatis error rerum numquam commodi quos, suscipit corrupti
            officiis quasi non soluta blanditiis esse eum, ipsa odit molestias.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            iusto tempore voluptatibus dignissimos quas, maiores provident
            voluptas aliquam repudiandae! Pariatur soluta eveniet officia!
            Placeat ex accusamus aliquid porro, non doloremque? aliquid porro,
            non doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore maiores modi laudantium veritatis error rerum
            numquam commodi quos, suscipit corrupti officiis quasi non soluta
            blanditiis esse eum, ipsa odit molestias. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Corporis iusto tempore
            voluptatibus dignissimos quas, maiores provident voluptas aliquam
            repudiandae! Pariatur soluta eveniet officia! Placeat ex accusamus
            aliquid porro, non doloremque? aliquid porro, non doloremque? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores
            modi laudantium veritatis error rerum numquam commodi quos, suscipit
            corrupti officiis quasi non soluta blanditiis esse eum, ipsa odit
            molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis iusto tempore voluptatibus dignissimos quas, maiores
            provident voluptas aliquam repudiandae! Pariatur soluta eveniet
            officia! Placeat ex accusamus aliquid porro, non doloremque? aliquid
            porro, non doloremque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore maiores modi laudantium veritatis error
            rerum numquam commodi quos, suscipit corrupti officiis quasi non
            soluta blanditiis esse eum, ipsa odit molestias. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Corporis iusto tempore
            voluptatibus dignissimos quas, maiores provident voluptas aliquam
            repudiandae! Pariatur soluta eveniet officia! Placeat ex accusamus
            aliquid porro, non doloremque? aliquid porro, non doloremque? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores
            modi laudantium veritatis error rerum numquam commodi quos, suscipit
            corrupti officiis quasi non soluta blanditiis esse eum, ipsa odit
            molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis iusto tempore voluptatibus dignissimos quas, maiores
            provident voluptas aliquam repudiandae! Pariatur soluta eveniet
            officia! Placeat ex accusamus aliquid porro, non doloremque? aliquid
            porro, non doloremque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore maiores modi laudantium veritatis error
            rerum numquam commodi quos, suscipit corrupti officiis quasi non
            soluta blanditiis esse eum, ipsa odit molestias. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Corporis iusto tempore
            voluptatibus dignissimos quas, maiores provident voluptas aliquam
            repudiandae! Pariatur soluta eveniet officia! Placeat ex accusamus
            aliquid porro, non doloremque? aliquid porro, non doloremque? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores
            modi laudantium veritatis error rerum numquam commodi quos, suscipit
            corrupti officiis quasi non soluta blanditiis esse eum, ipsa odit
            molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis iusto tempore voluptatibus dignissimos quas, maiores
            provident voluptas aliquam repudiandae! Pariatur soluta eveniet
            officia! Placeat ex accusamus aliquid porro, non doloremque? aliquid
            porro, non doloremque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore maiores modi laudantium veritatis error
            rerum numquam commodi quos, suscipit corrupti officiis quasi non
            soluta blanditiis esse eum, ipsa odit molestias. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Corporis iusto tempore
            voluptatibus dignissimos quas, maiores provident voluptas aliquam
            repudiandae! Pariatur soluta eveniet officia! Placeat ex accusamus
            aliquid porro, non doloremque?
          </Modal>
        ) : null}
        {expanded ? null : (
          <button
            className='rounded-md border p-2 hover:border-teal-300'
            onClick={toggleExpanded}
          >
            <FaBars />
          </button>
        )}
      </div>
    </div>
  );
};

export default ClCaseNav;
