import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function ImageCard({
    imageSrc,
    title,
    link = '#',
    description,
}: {
    imageSrc: StaticImageData | string;
    title: string;
    link?: string;
    description: string;
}) {
    return (
        <div className="flex flex-col gap-4 md:w-96 md:h-112 h-fit w-full rounded-lg border border-isd-primary-3">
            <Image
                src={imageSrc}
                alt={title}
                className="h-48 w-96 object-cover rounded-t-lg"
                width={500}
                height={300}
            />
            <div>
                <div className="p-element-gap flex flex-col gap-element-gap">
                    <Link
                        href={link}
                        className="flex items-center justify-between text-isd-primary"
                    >
                        <h2 className="md:text-h2 text-md font-bold">
                            {title}
                        </h2>
                        <ArrowRight size={20} strokeWidth={3} />
                    </Link>
                    <p className="md:text-sm text-xs text-isd-font-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
