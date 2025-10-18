'use client';

import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, Phone, MapPin, Link2, X } from 'lucide-react';

interface NewsCardProps {
    title: string;
    type: string;
    pictures: string[];
    evt_date?: string;
    evt_time?: string;
    evt_location?: string;
    date: string;
    details?: string;
    id?: number;
}

export default function NewsCard({
    title,
    type,
    pictures = [],
    evt_date,
    evt_time,
    evt_location,
    date,
    details,
    id,
}: NewsCardProps) {
    const router = useRouter();

    return (
        <div className="flex gap-component-gap-sm">
            <div className="relative w-[221px] h-[288px] flex-shrink-0 overflow-hidden border-l-3 border-isd-primary">
                {/* NOTE - photo always available either a valid image or a placeholder */}
                <Image
                    src={pictures[0]}
                    alt={`${title}`}
                    fill
                    className="object-cover"
                    sizes="221px"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 text-justify">
                <div className="flex flex-col gap-footer-gap">
                    <div className="text-md text-isd-secondary">{type}</div>
                    <div className="text-h2 text-isd-font-1">{title}</div>

                    {type != 'Events' && details && (
                        <div className="text-md text-isd-font-3 text">
                            {details.slice(0, 100)}
                        </div>
                    )}

                    <button
                        className="flex cursor-pointer relative items-end gap-[6px] text-footer leading-[15px] text-isd-secondary"
                        onClick={() =>
                            router.push(
                                `/news/read-more${id ? `?id=${id}` : ''}`
                            )
                        }
                    >
                        <span>Read more</span>

                        <ArrowRight size={12} />
                    </button>
                </div>

                <div>
                    {type === 'Event' && (
                        <div>
                            <div>{evt_date}</div>
                            <div>{evt_time}</div>
                            <div>{evt_location}</div>
                        </div>
                    )}
                </div>

                <div>{type != 'Event' && date}</div>
            </div>
        </div>
    );
}
