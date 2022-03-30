import Image from 'next/image';
import bg from '../utils/guayaquil.jpg';

export const Login = () => {
  return (
    <div>
        <div className="w-full h-full overflow-y-hidden">
            <Image src={bg} alt="Guayaquil" layout="responsive"/>
        </div>
    </div>
  )
}
