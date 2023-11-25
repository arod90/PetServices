'use client';
import { useRouter } from 'next/navigation';
import { LuArrowLeftCircle } from 'react-icons/lu';
import './GoBack.css';

export default function Page() {
  const router = useRouter();

  return (
    <div className="button-container" onClick={() => router.back()}>
      <LuArrowLeftCircle size={30} />
      <span>regresar</span>
    </div>
  );
}
