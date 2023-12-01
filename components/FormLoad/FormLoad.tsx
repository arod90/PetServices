import './FormLoad.css';
import dog from '../../public/dog-person-petting-svgrepo-com.svg';
import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="spinner-container animate-pulse duration-75">
      <h2>Estamos cargando tu publicacion...</h2>
      <Image src={dog} alt="loading icon of a dog" className="dog-load " />
    </div>
  );
}
