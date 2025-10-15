import { Mail, MapPin, Phone } from 'lucide-react';

export default function StaffCard({
    className,
    name,
    role,
    email,
    phone,
    location,
}: {
    className?: string;
    name: string;
    role?: string;
    email?: string;
    phone?: string;
    location?: string;
}) {
    return (
        <div
            className={`flex justify-between flex-1 border-l-3 items-center h-[96px] px-[24px] text-justify ${className}`}
        >
            <div className="flex flex-col gap-footer-gap">
                <div className="text-h2 text-isd-font-1">{name}</div>
                <div className="text-md">{role}</div>
            </div>

            <div className="flex gap-element-gap">
                {email && (
                    <a href={`mailto:${email}`} data-tooltip={email}>
                        <Mail size={24} />
                    </a>
                )}
                {phone && (
                    <a href={`tel:${phone}`} data-tooltip={phone}>
                        <Phone size={24} />
                    </a>
                )}
                {location && (
                    <>
                        <MapPin size={24} />
                    </>
                )}
            </div>
        </div>
    );
}
