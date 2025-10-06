import DotPattern from '@/assets/hero-dot-pattern.svg';
import Carousel1 from '@/assets/carousel-1.png';
import Image from 'next/image';

export default function HeroCarouselBlock() {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute -z-1 w-full h-full">
                <Image
                    src={Carousel1}
                    alt="Carousel Image 1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute -z-1 w-full h-full bg-gradient-to-b via-transparent to-black"></div>
            <div className="container text-white flex flex-col justify-end py-[64px] h-[612px]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-h1 text-[36px]">Welcome to</h1>
                        <h1 className="text-h1">
                            Division of Integrative Systems and Design
                        </h1>
                    </div>
                    <Image src={DotPattern} alt="Dot Pattern" />
                </div>
            </div>
        </div>
    );
}
