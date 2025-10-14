import { Mail, MapPin, Phone } from 'lucide-react';

export default function StaffCard({ className }: { className?: string }) {
    return (
        <div
            className={`flex justify-between flex-1 border-l-3 items-center h-[96px] px-[24px] text-justify ${className}`}
        >
            <div className="flex flex-col gap-footer-gap">
                <div className="text-h2 text-isd-font-1">Kandi Ho</div>
                <div className="text-md">Senior Manager</div>
            </div>

            <div className="flex gap-element-gap">
                <Mail size={24} />
                <Phone size={24} />
                <MapPin size={24} />
            </div>
        </div>
    );
}
