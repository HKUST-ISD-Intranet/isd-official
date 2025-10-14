'use client';

import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/people.png';
import HeroImage from '@/components/HeroImage';
import PeopleBlock from '@/components/blocks/PeopleBlock';
import PeopleBlockStaff from '@/components/blocks/PeopleBlockStaff';

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

    const [fullPeople, setFullPeople] = useState<Person[]>([]);

    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedPosition, setSelectedPosition] = useState<string>('');
    const [selectedKeyword, setSelectedKeyword] = useState<string>('');

    const [roles, setRoles] = useState<string[]>([]);

    async function fetchPeople(): Promise<Person[]> {
        const response = await fetch('/api/people'); // Utilisez le chemin relatif
        if (!response.ok) {
            throw new Error('Failed to fetch people');
        }
        return response.json(); // Retourne la promesse
    }

    const handleFilterPosition = (position: string) => {
        setSelectedPosition(position);
        handleFilter(position, selectedType, selectedKeyword);
    };

    const handleFilterType = (type: string) => {
        setSelectedType(type);
        handleFilter(selectedPosition, type, selectedKeyword);
    };

    const handleFilterKeyword = (keyword: string) => {
        setSelectedKeyword(keyword);
        handleFilter(selectedPosition, selectedType, keyword);
    };

    const handleFilter = (position: string, type: string, keyword: string) => {
        let filteredPeople = fullPeople;

        // Filter by position
        if (position) {
            filteredPeople = filteredPeople.filter((p) => p.role === position);
        }

        // Filter by type
        if (type) {
            filteredPeople = filteredPeople.filter((p) => p.type === type);
        }

        if (keyword) {
            filteredPeople = filteredPeople.filter(
                (p) => p.keywords && p.keywords.includes(keyword)
            );
        }

        setPeople(filteredPeople);
    };

    useEffect(() => {
        const loadPeople = async () => {
            try {
                const fetchedPeople: Person[] = await fetchPeople();

                console.log('fetchedPeople', fetchedPeople);

                setFullPeople(fetchedPeople);
                setPeople(fetchedPeople);

                // Get list of roles
                // Take unique roles in data
                let rolesTemp = fetchedPeople
                    .map((p: Person) => p.role)
                    .filter(
                        (value: string, index: number, self: string[]) =>
                            self.indexOf(value) === index
                    );

                // order roles alphabetically
                rolesTemp = rolesTemp.sort((a: string, b: string) => {
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                    return 0;
                });

                setRoles(rolesTemp);

                return fetchedPeople;
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        loadPeople(); // Load people from DB

    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />

            <div className="menu-cat-container">
                <select
                    className="select-people"
                    value={selectedType}
                    onChange={(e) => handleFilterType(e.target.value)}
                >
                    <option value="">Sort by role</option>
                    <option value="ISD Faculty">ISD Faculty</option>
                    <option value="Affiliates">Affiliates</option>
                    <option value="ISD Staff">ISD Staff</option>
                </select>

                <select
                    className="select-people"
                    value={selectedPosition}
                    onChange={(e) => handleFilterPosition(e.target.value)}
                >
                    <option value="">Sort by position</option>
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>

                <input
                    placeholder="Enter keyword"
                    onChange={(e) => handleFilterKeyword(e.target.value)}
                ></input>
            </div>

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

                    <PeopleBlockStaff
                        people={people.filter((p) => p.type === 'ISD Staff')}
                    />
                </>
            ) : (
                <p>No people found.</p>
            )}
        </div>
    );
}
