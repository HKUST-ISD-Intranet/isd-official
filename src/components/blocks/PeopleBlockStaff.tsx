import React, { useState } from 'react';

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
}

export default function PeopleBlockStaff({ people }: { people: Person[] }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {people.map((person) => (
                    <div
                        className="person w-200 rounded-lg overflow-hidden shadow-lg flex p-4"
                        key={person.id}
                    >
                        <div className="person-info flex-1 p-4">
                            <div className="person-name font-bold text-lg">
                                {person.name}
                            </div>
                            <div className="text-orange-400">{person.role}</div>

                            <div className="person-email text-sm">
                                {person.email}
                            </div>
                            <div className="person-phone text-sm">
                                {person.phone}
                            </div>
                            <div className="person-location text-sm">
                                {person.location}
                            </div>
                            <div className="person-link text-sm text-blue-600 hover:underline">
                                {person.link}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
