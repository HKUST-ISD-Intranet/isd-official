'use client';

import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/early-admission.jpg';
import HeroImage from '@/components/HeroImage';
import PeopleBlock from '@/components/blocks/PeopleBlock';

interface Person {
    id: number;
    type: string;
    role: string;
    name: string;
    keywords: string;
    email: string;
    phone: string;
    location: string;
    link: string;
    details: string;
    photo: string;
    traits: string;
}

export default function AcademicsPage() {
    const [people, setPeople] = useState<Person[]>([]);

    async function fetchPeople(): Promise<Person[]> {
        const response = await fetch('/api/people'); // Utilisez le chemin relatif
        if (!response.ok) {
            throw new Error('Failed to fetch people');
        }
        return response.json(); // Retourne la promesse
    }

    useEffect(() => {
        const loadPeople = async () => {
            try {
                const fetchedPeople: Person[] = await fetchPeople();

                console.log('fetchedPeople', fetchedPeople);

                setPeople(fetchedPeople);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        loadPeople(); // Load people from DB
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />

            {people.length > 0 ? (
                <>
                    <div id="isd-factuly" className="title">
                        <h1 className="text-h1 offset-text-background uppercase">
                            ISD Faculty
                        </h1>
                    </div>

                    <PeopleBlock
                        people={people.filter((p) => p.type === 'ISD Faculty')}
                    />

                    <div id="affiliates" className="title">
                        <h1 className="text-h1 offset-text-background uppercase">
                            Affiliates
                        </h1>
                    </div>

                    <PeopleBlock
                        people={people.filter((p) => p.type === 'Affiliates')}
                    />

                    <div id="isd-staff" className="title">
                        <h1 className="text-h1 offset-text-background uppercase">
                            ISD Staff
                        </h1>
                    </div>

                    <PeopleBlock
                        people={people.filter((p) => p.type === 'ISD Staff')}
                    />
                </>
            ) : (
                <p>No people found.</p>
            )}
        </div>
    );
}
