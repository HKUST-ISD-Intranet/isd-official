import { ArrowRight, Link2, Mail, MapPin, Phone } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface FacultyCardProps {
    name: string;
    role: string;
    keywords?: string[];
    email?: string;
    photo?: StaticImageData | string;
    location?: string;
}

export default function FacultyCard({
    name,
    role,
    keywords = [],
    email,
    photo,
    location,
}: FacultyCardProps) {
    return (
        <div className="flex gap-component-gap-sm">
            {/* TODO add profile image here */}
            <div className="bg-red-500 border-l-3 border-isd-primary w-[211px] h-[288px]" />
            <div className="flex flex-col justify-between flex-1 text-justify">
                <div className="flex flex-col gap-footer-gap">
                    <div className="text-h2 text-isd-font-1">{name}</div>
                    <div className="text-md text-isd-secondary">{role}</div>
                    <div className="text-md text-isd-font-3 text">
                        {keywords.map((kw, index) => (
                            <span key={kw}>
                                {kw}
                                {index < keywords.length - 1 && ' · '}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-end gap-[6px] text-footer leading-[15px] text-isd-secondary">
                        <span>Read more</span>
                        <ArrowRight size={12} />
                    </div>
                </div>

                <div className="flex flex-col gap-[24px] before:content-[''] before:bg-isd-primary before:w-[111px] before:h-[3px]">
                    {/* TODO add hover effect with data */}
                    <div className="flex gap-element-gap">
                        <div className="p-[9px] rounded-full bg-isd-primary-2">
                            <Mail size={24} className="text-isd-primary" />
                        </div>
                        <div className="p-[9px] rounded-full bg-isd-primary-2">
                            <Phone size={24} className="text-isd-primary" />
                        </div>
                        <div className="p-[9px] rounded-full bg-isd-primary-2">
                            <MapPin size={24} className="text-isd-primary" />
                        </div>
                        {/* TODO */}
                        <Link
                            href="#"
                            className="p-[9px] rounded-full bg-isd-primary-2"
                        >
                            <Link2 size={24} className="text-isd-primary" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
