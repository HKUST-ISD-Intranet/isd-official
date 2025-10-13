"use client";

import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/early-admission.jpg';
import HeroImage from '@/components/HeroImage';

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
                const fetchedPeople = await fetchPeople();
                setPeople(fetchedPeople);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        loadPeople(); // Appelle la fonction pour charger les données
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />

            {people.length > 0 ? (
                people.map((p) => (
                    <div key={p.id} className="p-2">
                        {p.name}
                    </div>
                ))
            ) : (
                <p>No people found.</p>
            )}
        </div>
    );
}
