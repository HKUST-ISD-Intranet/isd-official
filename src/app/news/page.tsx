'use client';

import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/academics-hero.jpg';

import HeroImage from '@/components/HeroImage';
import NewsAndEventsMainBlock from '@/components/blocks/NewsAndEventsMainBlock';

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

export default function NewsEventPage() {
    const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);

    const [fullNewsEvents, setFullNewsEvents] = useState<NewsEvent[]>([]);

    const [selectedType, setSelectedType] = useState<string>('');

    async function fetchNewsEvents(): Promise<NewsEvent[]> {
        const response = await fetch('/api/news'); // Utilisez le chemin relatif

        console.log('respose', response);

        if (!response.ok) {
            throw new Error('Failed to fetch people');
        }
        return response.json(); // Retourne la promesse
    }

    const handleFilterType = (type: string) => {
        setSelectedType(type);
        handleFilter(type);
    };

    const handleFilter = (type: string) => {
        let filteredNews = fullNewsEvents;

        // Filter by type
        if (type) {
            filteredNews = filteredNews.filter((p) => p.type === type);
        }

        setNewsEvents(filteredNews);
    };

    useEffect(() => {
        const loadNewsEvents = async () => {
            try {
                const fetchedNewsEvents: NewsEvent[] = await fetchNewsEvents();

                console.log('fetchedNewsEvents', fetchedNewsEvents);

                // order data by  date desc
                fetchedNewsEvents.sort((a: NewsEvent, b: NewsEvent) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                });

                setFullNewsEvents(fetchedNewsEvents);
                setNewsEvents(fetchedNewsEvents);

                return fetchedNewsEvents;
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        loadNewsEvents(); // Load people from DB
    }, []);

    return (
        <div className="min-h-screen flex flex-col ">
            <HeroImage image={HeroImageFile} />

            <div className="menu-cat-container">
                <select
                    className="select-people"
                    value={selectedType}
                    onChange={(e) => handleFilterType(e.target.value)}
                >
                    <option value="">Sort by type</option>
                    <option value="News">News</option>
                    <option value="Events">Events</option>
                    <option value="Achievements">Achievements</option>
                </select>
            </div>

            {newsEvents.length > 0 ? (
                newsEvents.map((newsEvent) => (
                    <div key={newsEvent.id}>
                        <NewsAndEventsMainBlock newsEvent={newsEvent} />
                    </div>
                ))
            ) : (
                <p>No news found.</p>
            )}
        </div>
    );
}
