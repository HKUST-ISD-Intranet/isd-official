import filterAndSortNews, { News } from '@/lib/newsFilter';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import newsEvents from '@/data/news_events.json';
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Link2,
    X,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { Fragment, useState } from 'react';
import { resolveNewsPhoto } from '@/lib/newsImages';

export default function NewsReadMoreBlock() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    const [currentIndex, setCurrentIndex] = useState(0);

    const type = 'all';
    const year = 'all';
    const id = Number(params.get('id'));
    // Prepare filtered lists per role context
    const newsList = filterAndSortNews(newsEvents as News[], {
        type,
        year,
        id,
    });

    const news = newsList[0];
    const pictures = news.pictures ?? [];
    console.log(pictures);

    function format(input: string) {
        const ESC = '\u0000_ESC_BOLD_\u0000';
        // protect escaped \** so they don't become bold markers
        const protectedText = input.replace(/\\\*\*/g, ESC);

        // split on whole **...** tokens (one capturing group only)
        const parts = protectedText.split(/(\*\*(?:[\s\S]+?)\*\*)/g);

        return parts.map((part, idx) => {
            const m = part.match(/^\*\*([\s\S]+?)\*\*$/);
            if (m) {
                return (
                    <strong className="text-isd-secondary" key={idx}>
                        {m[1]}
                    </strong>
                );
            }

            // check in part if http is found
            if (part.includes('http')) {
                // split on http and https
                const parts = part.split(/(http[s]?:\/\/[^\s]+)/g);
                return parts.map((part, idx) => {
                    if (part.includes('http')) {
                        return (
                            <a
                                href={part}
                                className="text-isd-primary"
                                key={idx}
                            >
                                {part}
                            </a>
                        );
                    }
                    return part;
                });
            }

            // Check in part if title is found
            // Check if title present
            if (part.includes('xTx') && part.includes('xETx')) {
                // Extract
                const parts = part.split(/(xTx|xETx)/g);
                const result = [];

                // Get all titles
                for (let i = 0; i < parts.length; i++) {
                    if (parts[i] === 'xTx') {
                        continue;
                    }
                    if (parts[i] === 'xETx') {
                        continue;
                    }

                    // check if part between title
                    if (i > 0 && parts[i - 1] === 'xTx') {
                        // Update text
                        const modifiedText = parts[i];
                        result.push(
                            <div
                                className="text-isd-primary text-h1 text-[36px]"
                                key={result.length}
                            >
                                {modifiedText}
                            </div>
                        );
                    } else {
                        result.push(
                            <span key={result.length}>{parts[i]}</span>
                        );
                    }
                }

                return result;
            }

            // restore escaped ** placeholders
            const restored = part.replace(new RegExp(ESC, 'g'), '**');
            return <Fragment key={idx}>{restored}</Fragment>;
        });
    }

    return (
        <>
            <div
                className="flex flex-col bg-white mx-[198px] mt-[41px] items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-[41px]">
                    {' '}
                    <button
                        className="text-isd-primary cursor-pointer flex"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft size={24} />

                        <span className="text-sm">Back</span>
                    </button>
                </div>

                <div className="flex flex-col gap-[48px]">
                    <div className="text-h2 text-isd-font-1 ">{news.title}</div>

                    {pictures?.map((image, index) => (
                        <Image
                            key={index}
                            src={resolveNewsPhoto(image)}
                            alt={`Carousel Image ${index + 1}`}
                            className={` w-full h-full  transition-opacity linear duration-1000 ${
                                index === currentIndex
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                        />
                    ))}

                    <div className="w-full relative overflow-hidden">
                        <div className="absolute -z-1 w-full h-full"></div>
                        <div className="absolute -z-1 w-full h-full bg-gradient-to-b via-transparent to-black"></div>
                        <div className="absolute z-0 w-full h-full flex items-center justify-between px-12 pointer-events-none">
                            <button
                                className="pointer-events-auto cursor-pointer"
                                onClick={() =>
                                    setCurrentIndex(
                                        (prevIndex) =>
                                            (prevIndex -
                                                1 +
                                                (news.pictures
                                                    ? news.pictures.length
                                                    : 0)) %
                                            (news.pictures?.length || 1)
                                    )
                                }
                            >
                                <ChevronLeft
                                    color="white"
                                    size={48}
                                    strokeWidth={1}
                                />
                            </button>
                            <button
                                className="pointer-events-auto cursor-pointer"
                                onClick={() =>
                                    setCurrentIndex(
                                        (prevIndex) =>
                                            (prevIndex + 1) %
                                            news.pictures.length
                                    )
                                }
                            >
                                <ChevronRight
                                    color="white"
                                    size={48}
                                    strokeWidth={1}
                                />
                            </button>
                        </div>
                        <div className="absolute z-0 w-full h-full pb-3 flex items-end justify-center gap-2 px-12 pointer-events-none">
                            {news.pictures?.map((_, index) => (
                                <button
                                    key={index}
                                    className="pointer-events-auto cursor-pointer py-2"
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <div
                                        className={`h-0.5 w-8 ${
                                            index === currentIndex
                                                ? 'bg-white'
                                                : 'bg-white/50'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-section-title-gap gap-y-[12px]">
                        {news.evt_location && (
                            <div className="flex gap-[12px] items-center">
                                <div className="p-[9px] rounded-full bg-isd-primary-2">
                                    <MapPin
                                        size={24}
                                        className="text-isd-primary"
                                    />
                                </div>
                                <span className="text-isd-primary text-md">
                                    {news.evt_location}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {news.details && (
                    <div className="flex flex-col ">
                        <div className="text-md text-isd-font-3 text-start">
                            <div className="whitespace-pre-wrap">
                                <span>{format(news.details)}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
