import React from 'react';

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

export default function PeopleBlock({ people }: { people: Person[] }) {
    console.log('peopleBlock people', people);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {people.map((person) => (
                <div
                    className="person border rounded-lg overflow-hidden shadow-lg w-100"
                    key={person.id}
                >
                    <div className="person-photo h-[20vh] w-full flex items-center justify-center bg-gray-200">
                        {person.photo === '' || person.photo === null ? (
                            <img
                                src="/people/default.png"
                                className="h-full w-full object-contain"
                                alt="Default"
                            />
                        ) : (
                            <img
                                src={person.photo}
                                className="h-full w-full object-contain"
                                alt={person.name}
                            />
                        )}
                    </div>
                    <div className="person-info p-4">
                        <div className="person-name font-bold text-lg">
                            {person.name}
                        </div>
                        <div className="person-role text-gray-600">
                            {person.role}
                        </div>
                        <div className="person-keywords text-sm text-gray-500">
                            {person.keywords}
                        </div>

                        Read More 

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
    );
}
