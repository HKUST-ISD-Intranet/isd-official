import React, { useState } from 'react';

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

const Modal = ({
    isOpen,
    onClose,
    newsEvent,
}: {
    isOpen: boolean;
    onClose: () => void;
    newsEvent: NewsEvent | null;
}) => {
    if (!isOpen || !newsEvent) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-90 z-50">
            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 max-h-[80vh] overflow-y-auto">
                <div className="flex">
                    <div className="person-photo h-[20vh] w-[30%] flex items-center justify-center bg-gray-200 mr-4">
                        {newsEvent.picture === '' ||
                        newsEvent.picture === null ? (
                            <img
                                src="/people/default.png"
                                className="h-full w-full object-cover"
                                alt="Default"
                            />
                        ) : (
                            <img
                                src={newsEvent.picture}
                                className="h-full w-full object-cover"
                                alt={newsEvent.title}
                            />
                        )}
                    </div>

                    <div className="flex-1">
                        <h2 className="font-bold text-xl">{newsEvent.title}</h2>
                        <div
                            className="mb-4"
                            dangerouslySetInnerHTML={{
                                __html: newsEvent.details,
                            }}
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

export default function NewsAndEventsMainBlock({
    newsEvent,
}: {
    newsEvent: NewsEvent;
}) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedNewsEvent, setSelectedNewsEvent] =
        useState<NewsEvent | null>(null);

    const handleOpenModal = (newsEvent: NewsEvent) => {
        setSelectedNewsEvent(newsEvent);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedNewsEvent(null);
    };
    return (
        <>
            <div>
                <span className="text-lg">
                    {newsEvent.type} {newsEvent.date}
                </span>

                <h2 className="text-h2 font-bold">{newsEvent.title}</h2>

                <div className="person-photo h-[20vh] w-[20%] flex items-center justify-center bg-gray-200">
                    {newsEvent.picture === '' || newsEvent.picture === null ? (
                        <img
                            src="/people/default.png"
                            className="h-full w-full object-cover"
                            alt="Default"
                        />
                    ) : (
                        <img
                            src={newsEvent.picture}
                            className="h-full w-full object-cover"
                            alt={newsEvent.title}
                        />
                    )}
                </div>

                {newsEvent.type === 'Events' && (
                    <>
                        <div className="text-lg">{newsEvent.evt_date}</div>
                        <div className="text-lg">{newsEvent.evt_time}</div>
                        <div className="text-lg">{newsEvent.evt_location}</div>
                    </>
                )}
                <div
                    className="read-more text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleOpenModal(newsEvent)}
                >
                    Read More
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                newsEvent={selectedNewsEvent}
            />{' '}
        </>
    );
}
