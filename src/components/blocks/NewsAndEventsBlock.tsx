'use client';

import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface NewsEvent {
    id: number;
    date: string;
    title: string;
    details: string;
    type: string;
    picture: string;
    evt_date: string;
    evt_time: string;
    evt_location: string;
}

export default function NewsAndEventsBlock() {
    const [fullNewsEvents, setFullNewsEvents] = useState<NewsEvent[]>([]);

    async function fetchNewsEvents(): Promise<NewsEvent[]> {
        const response = await fetch('/api/news'); // Utilisez le chemin relatif

        console.log('respose', response);

        if (!response.ok) {
            throw new Error('Failed to fetch people');
        }
        return response.json(); // Retourne la promesse
    }

    useEffect(() => {
        const loadNewsEvents = async () => {
            try {
                let fetchedNewsEvents: NewsEvent[] = await fetchNewsEvents();

                // order data by  date desc
                fetchedNewsEvents.sort((a: NewsEvent, b: NewsEvent) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                });

                // only the first 3 records
                fetchedNewsEvents = fetchedNewsEvents.slice(0, 3);

                setFullNewsEvents(fetchedNewsEvents);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        loadNewsEvents(); // Load people from DB
    }, []);

    const news = [
        {
            title: 'Event',
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
                    <a href="/news">
                        View all
                        <ArrowRight size={20} strokeWidth={3} />
                    </a>
                </span>

                <div className="flex md:flex-row flex-col gap-component-gap-sm">
                    {fullNewsEvents.map((news, i) => (
                        <div
                            className={
                                'flex flex-col text-black rounded-sm p-element-gap pt-component-gap-sm gap-[12px] ' +
                                (i % 2
                                    ? 'bg-isd-secondary-1 text-isd-secondary'
                                    : 'bg-isd-primary-2 text-isd-primary')
                            }
                            key={i}
                        >
                            <h2 className="text-h2 font-bold">{news.type}</h2>
                            <span className="text-lg">{news.date}</span>
                            <p className="text-md text-isd-font-3">
                                {news.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
