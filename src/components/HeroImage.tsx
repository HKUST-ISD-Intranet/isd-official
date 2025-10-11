import Image, { StaticImageData } from 'next/image';

export default function HeroImage({ image }: { image: StaticImageData }) {
    return (
        <div className="w-full relative overflow-hidden h-[300px] md:h-[400px] lg:h-[612px]">
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full`}
            />
        </div>
    );
}
