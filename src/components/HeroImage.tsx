import HeroImg from '@/assets/academics-hero.jpg';
import Image from 'next/image';

export default function BannerImage() {
    return (
        <div className="w-full relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
                src={HeroImg}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full`}
            />
        </div>
    );
}
