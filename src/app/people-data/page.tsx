import React from 'react';
import faculty from '@/data/faculty.json';
import affiliates from '@/data/affiliates.json';
import staff from '@/data/staff.json';
import Image from 'next/image';
import { resolvePersonPhoto } from '@/lib/peopleImages';

export default function PeopleDataPage() {
    return (
        <div className="p-20 gap-10 flex flex-col">
            <h1 className="text-3xl mb-2">Faculty</h1>
            {faculty.map((person) => (
                <div key={person.name}>
                    <h2 className="text-xl font-semibold">{person.name}</h2>
                    <p>Role: {person.role}</p>
                    <p>Email: {person.email}</p>

                    <div>
                        {person.keywords.length > 0 && (
                            <>
                                <p>Keywords:</p>
                                {person.keywords.map((kw, index) => (
                                    <span key={kw}>
                                        {kw}
                                        {index < person.keywords.length - 1 &&
                                            ' · '}
                                    </span>
                                ))}
                            </>
                        )}
                    </div>

                    {person.photo && (
                        <Image
                            src={resolvePersonPhoto(person.photo)}
                            alt={`${person.name}'s photo`}
                            width={150}
                            height={150}
                        />
                    )}
                </div>
            ))}

            <h1 className="text-3xl mb-2">Affiliates</h1>
            {affiliates.map((person) => (
                <div key={person.name}>
                    <h2 className="text-xl font-semibold">{person.name}</h2>
                    <p>Role: {person.role}</p>
                    <p>Email: {person.email}</p>

                    <div>
                        {person.keywords.length > 0 && (
                            <>
                                <p>Keywords:</p>
                                {person.keywords.map((kw, index) => (
                                    <span key={kw}>
                                        {kw}
                                        {index < person.keywords.length - 1 &&
                                            ' · '}
                                    </span>
                                ))}
                            </>
                        )}
                    </div>

                    {person.photo && (
                        <Image
                            src={resolvePersonPhoto(person.photo)}
                            alt={`${person.name}'s photo`}
                            width={150}
                            height={150}
                        />
                    )}
                </div>
            ))}

            <h1 className="text-3xl mb-2">Affiliates</h1>
            {staff.map((person) => (
                <div key={person.name}>
                    <h2 className="text-xl font-semibold">{person.name}</h2>
                </div>
            ))}
        </div>
    );
}
