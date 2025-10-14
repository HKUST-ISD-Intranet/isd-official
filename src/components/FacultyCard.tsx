import { ArrowRight, Link2, Mail, MapPin, Phone } from 'lucide-react';

export default function FacultyCard() {
    return (
        <div className="flex gap-component-gap-sm">
            <div className="bg-red-500 border-l-3 border-isd-primary w-[211px] h-[288px]" />
            <div className="flex flex-col justify-between flex-1 text-justify">
                <div className="flex flex-col gap-footer-gap">
                    <div className="text-h2 text-isd-font-1">Qian ZHANG</div>
                    <div className="text-md text-isd-secondary">
                        Head of ISD / Tencent Professor of Engineering and Chair
                        Professor of CSE
                    </div>
                    <div className="text-md text-isd-font-3 text">
                        Internet of Things (IoT), Smart Health, Mobile Computing
                        and Sensing, Wireless Networking, Cyber Security
                    </div>
                    <div className="flex items-end gap-[6px] text-footer leading-[15px] text-isd-secondary">
                        <span>Read more</span>
                        <ArrowRight size={12} />
                    </div>
                </div>

                <div className="flex flex-col gap-[24px] before:content-[''] before:bg-isd-primary before:w-[111px] before:h-[3px]">
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
                        <div className="p-[9px] rounded-full bg-isd-primary-2">
                            <Link2 size={24} className="text-isd-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
