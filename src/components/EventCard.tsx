import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard() {
    return (
        <a className="flex gap-component-gap h-[360px] items-center" href="lol">
            <div className="w-[396px] h-[240px] bg-isd-font-2/10" />
            <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-h2 text-secondary">Event</p>
                <h2 className="text-h2 text-primary">
                    Nine ISD Faculty Members Recognized Among the World’s Top 2%
                    of Most-Cited Scientists for 2025
                </h2>
                <div className="flex flex-col gap-[4px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                            <Calendar size={22} />
                        </div>

                        <p className="text-md text-isd-font-3">
                            January 1, 2024
                        </p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                            <Clock size={22} />
                        </div>

                        <p className="text-md text-isd-font-3">11:00 - 12:00</p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                            <MapPin size={22} />
                        </div>

                        <p className="text-md text-isd-font-3">
                            LT-F (Lifts 25-26), Academic Building, HKUST
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}
