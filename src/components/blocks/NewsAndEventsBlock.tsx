import { ArrowRight } from 'lucide-react';

export default function NewsAndEventsBlock() {
    const news = [
        {
            title: 'HKUST InnoBay Bootcamp',
            date: '2025-07-02',
            description:
                'One of the unique strengths of the Integrative Systems and Design program is the integration of design and technology to solve real-world problems.',
        },
        {
            title: 'HKUST InnoBay Bootcamp',
            date: '2025-07-02',
            description:
                'One of the unique strengths of the Integrative Systems and Design program is the integration of design and technology to solve real-world problems.',
        },
        {
            title: 'HKUST InnoBay Bootcamp',
            date: '2025-07-02',
            description:
                'One of the unique strengths of the Integrative Systems and Design program is the integration of design and technology to solve real-world problems.',
        },
    ];

    return (
        <div className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
            <h1 className="text-h1 offset-text-background uppercase">
                NEWS & EVENTS
            </h1>

            <div className="flex flex-col gap-[12px]">
                <span className="text-sm text-isd-primary font-bold self-end flex gap-[6px]">
                    View all
                    <ArrowRight size={20} strokeWidth={3} />
                </span>

                <div className="flex flex-row gap-component-gap-sm">
                    {news.map((news, i) => (
                        <div
                            className={
                                'flex flex-col text-black rounded-sm p-element-gap pt-component-gap-sm gap-[12px] ' +
                                (i % 2
                                    ? 'bg-isd-secondary-1 text-isd-secondary'
                                    : 'bg-isd-primary-2 text-isd-primary')
                            }
                            key={i}
                        >
                            <h2 className="text-h2 font-bold">{news.title}</h2>
                            <span className="text-lg">{news.date}</span>
                            <p className="text-md text-isd-font-3">
                                {news.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
