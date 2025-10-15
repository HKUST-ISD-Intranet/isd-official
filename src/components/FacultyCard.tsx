import { ArrowRight, Link2, Mail, MapPin, Phone } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

interface FacultyCardProps {
    name: string;
    role: string;
    keywords?: string[];
    photo: StaticImageData | string;
    email?: string;
    phone?: string;
    location?: string;
    link?: string;
}

export default function FacultyCard({
    name,
    role,
    keywords = [],
    photo,
    email,
    phone,
    location,
    link,
}: FacultyCardProps) {
    return (
        <div className="flex gap-component-gap-sm">
            <div className="relative w-[221px] h-[288px] flex-shrink-0 overflow-hidden border-l-3 border-isd-primary">
                {/* NOTE - photo always available either a valid image or a placeholder */}
                <Image
                    src={photo}
                    alt={`${name}'s photo`}
                    fill
                    className="object-cover"
                    sizes="221px"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 text-justify">
                <div className="flex flex-col gap-footer-gap">
                    <div className="text-h2 text-isd-font-1">{name}</div>
                    <div className="text-md text-isd-secondary">{role}</div>
                    <div className="text-md text-isd-font-3 text">
                        {keywords.map((kw, index) => (
                            <span key={kw}>
                                {kw}
                                {index < keywords.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-end gap-[6px] text-footer leading-[15px] text-isd-secondary">
                        <span>Read more</span>
                        <ArrowRight size={12} />
                    </div>
                </div>

                <div className="flex flex-col gap-[24px] before:content-[''] before:bg-isd-primary before:w-[111px] before:h-[3px]">
                    <div className="flex gap-element-gap">
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                className="p-[9px] rounded-full bg-isd-primary-2"
                                data-tooltip={email}
                            >
                                <Mail size={24} className="text-isd-primary" />
                            </a>
                        )}
                        {phone && (
                            <a
                                href={`tel:${phone}`}
                                className="p-[9px] rounded-full bg-isd-primary-2"
                                data-tooltip={phone}
                            >
                                <Phone size={24} className="text-isd-primary" />
                            </a>
                        )}
                        {location && (
                            <div
                                className="p-[9px] rounded-full bg-isd-primary-2"
                                data-tooltip={location}
                            >
                                <MapPin
                                    size={24}
                                    className="text-isd-primary"
                                />
                            </div>
                        )}
                        {link && (
                            <Link
                                href={link}
                                className="p-[9px] rounded-full bg-isd-primary-2"
                            >
                                <Link2 size={24} className="text-isd-primary" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
