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

const Modal = ({
    isOpen,
    onClose,
    person,
}: {
    isOpen: boolean;
    onClose: () => void;
    person: Person | null;
}) => {
    if (!isOpen || !person) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-90 z-50">
            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 max-h-[80vh] overflow-y-auto">
                <div className="flex">
                    <div className="person-photo h-[20vh] w-[30%] flex items-center justify-center bg-gray-200 mr-4">
                        {person.photo === '' || person.photo === null ? (
                            <img
                                src="/people/default.png"
                                className="h-full w-full object-cover"
                                alt="Default"
                            />
                        ) : (
                            <img
                                src={person.photo}
                                className="h-full w-full object-cover"
                                alt={person.name}
                            />
                        )}
                    </div>

                    <div className="flex-1">
                        <h2 className="font-bold text-xl">{person.name}</h2>
                        <div
                            className="mb-4"
                            dangerouslySetInnerHTML={{ __html: person.details }}
                        />
                        <button
                            onClick={onClose}
                            className="text-blue-600 hover:underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function PeopleBlock({ people }: { people: Person[] }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const handleOpenModal = (person: Person) => {
        setSelectedPerson(person);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPerson(null);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {people.map((person) => (
                    <div
                        className="person w-200  rounded-lg overflow-hidden shadow-lg flex p-4"
                        key={person.id}
                    >
                        <div className="person-photo h-[20vh] w-[20%] flex items-center justify-center bg-gray-200">
                            {person.photo === '' || person.photo === null ? (
                                <img
                                    src="/people/default.png"
                                    className="h-full w-full object-cover"
                                    alt="Default"
                                />
                            ) : (
                                <img
                                    src={person.photo}
                                    className="h-full w-full object-cover"
                                    alt={person.name}
                                />
                            )}
                        </div>
                        <div className="person-info flex-1 p-4">
                            <div className="person-name font-bold text-lg">
                                {person.name}
                            </div>
                            <div className="text-orange-400">{person.role}</div>
                            <div className="text-sm text-gray-500">
                                {person.keywords}
                            </div>
                            <div
                                className="read-more text-blue-600 hover:underline cursor-pointer"
                                onClick={() => handleOpenModal(person)}
                            >
                                Read More
                            </div>
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
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                person={selectedPerson}
            />{' '}
        </>
    );
}
