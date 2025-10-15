'use client';

import { ArrowRight, Mail, Phone, MapPin, Link2, X } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

interface FacultyCardProps {
    name: string;
    role: string;
    keywords?: string[];
    photo: StaticImageData | string;
    email?: string;
    phone?: string;
    location?: string;
    link?: string;
    details?: string;
}

export default function ReadMoreButton({
    name,
    role,
    keywords,
    photo,
    email,
    phone,
    location,
    link,
    details,
}: FacultyCardProps) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    function format(input: string) {
        const ESC = '\u0000_ESC_BOLD_\u0000';
        // protect escaped \** so they don't become bold markers
        const protectedText = input.replace(/\\\*\*/g, ESC);

        // split on whole **...** tokens (one capturing group only)
        const parts = protectedText.split(/(\*\*(?:[\s\S]+?)\*\*)/g);

        return parts.map((part, idx) => {
            const m = part.match(/^\*\*([\s\S]+?)\*\*$/);
            if (m) {
                return (
                    <strong className="text-isd-secondary" key={idx}>
                        {m[1]}
                    </strong>
                );
            }
            // restore escaped ** placeholders
            const restored = part.replace(new RegExp(ESC, 'g'), '**');
            return <Fragment key={idx}>{restored}</Fragment>;
        });
    }

    return (
        <>
            <button
                className="flex cursor-pointer relative items-end gap-[6px] text-footer leading-[15px] text-isd-secondary"
                onClick={() => setDetailsOpen(true)}
            >
                <span>Read more</span>
                <ArrowRight size={12} />
            </button>

            {detailsOpen && (
                <div
                    className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#1e1e1e]/50 flex flex-col items-center z-50 overflow-auto"
                    onClick={() => setDetailsOpen(false)}
                >
                    <div className="flex flex-col bg-white m-[198px] p-component-gap gap-section-title-gap items-center">
                        <div className="flex items-center gap-component-gap-sm">
                            <div className="relative w-[221px] h-[288px] flex-shrink-0 overflow-hidden">
                                <Image
                                    src={photo}
                                    alt={`${name}'s photo`}
                                    fill
                                    sizes="221px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-[24px]">
                                <div className="text-h2 text-isd-font-1">
                                    {name}
                                </div>

                                <div className="flex flex-col gap-footer-gap">
                                    <div className="text-md text-isd-secondary">
                                        {role}
                                    </div>
                                    <div className="text-md text-isd-font-3 text">
                                        {keywords?.join(', ')}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-x-section-title-gap gap-y-[12px]">
                                    {email && (
                                        <a
                                            href={`mailto:${email}`}
                                            className="flex gap-[12px] items-center"
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <Mail
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary text-md">
                                                {email}
                                            </span>
                                        </a>
                                    )}
                                    {phone && (
                                        <a
                                            href={`tel:${phone}`}
                                            className="flex gap-[12px] items-center"
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <Phone
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary text-md">
                                                {phone}
                                            </span>
                                        </a>
                                    )}
                                    {location && (
                                        <div className="flex gap-[12px] items-center">
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <MapPin
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary text-md">
                                                {location}
                                            </span>
                                        </div>
                                    )}
                                    {link && (
                                        <Link
                                            href={link}
                                            className="flex gap-[12px] items-center"
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2 flex gap-[12px]">
                                                <Link2
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary text-md">
                                                {link}
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {details && (
                            <div className="flex flex-col gap-[24px]">
                                <div className="flex items-center h-section-title-gap border-b border-b-isd-font-2">
                                    <h2 className="text-h2 text-isd-primary">
                                        Details
                                    </h2>
                                </div>

                                <div className="text-md text-isd-font-3 text-start">
                                    <div className="whitespace-pre-wrap">
                                        <span>{format(details)}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center">
                            <X
                                size={24}
                                onClick={() => setDetailsOpen(false)}
                            />
                            <span className="text-sm">Close</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
