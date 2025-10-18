import filterAndSortNews, { News } from '@/lib/newsFilter';
import { useSearchParams, useRouter } from 'next/navigation';

import newsEvents from '@/data/news_events.json';
import { ArrowRight, Mail, Phone, MapPin, Link2, X } from 'lucide-react';
import { Fragment } from 'react';

export default function NewsReadMoreBlock() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams?.toString() ?? '');

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
            if (
                part.includes('xxxTitlexxx') &&
                part.includes('xxxEndTitlexxx')
            ) {
                // Extraire le texte entre les balises
                const parts = part.split(/(xxxTitlexxx|xxxEndTitlexxx)/g);

                // Trouver l'index de xxxTitlexxx
                const titleIndex = parts.indexOf('xxxTitlexxx');
                const endTitleIndex = parts.indexOf('xxxEndTitlexxx');

                // Vérifier si les balises sont dans le bon ordre
                if (
                    titleIndex !== -1 &&
                    endTitleIndex !== -1 &&
                    titleIndex < endTitleIndex
                ) {
                    // Modifier le texte entre les balises
                    const modifiedText = parts
                        .slice(titleIndex + 1, endTitleIndex)
                        .join('')
                        .toUpperCase(); // Exemple de modification

                    return parts.map((part, idx) => {
                        if (idx === titleIndex) {
                            return null;
                        }
                        if (idx === endTitleIndex) {
                            return null;
                        }
                        if (idx > titleIndex && idx < endTitleIndex) {
                            return (
                                <div className="text-isd-primary" key={idx}>
                                    {modifiedText}
                                </div>
                            );
                        }
                        // Retourner les autres parties normalement
                        return <span key={idx}>{part}</span>;
                    });
                }
            }

            // restore escaped ** placeholders
            const restored = part.replace(new RegExp(ESC, 'g'), '**');
            return <Fragment key={idx}>{restored}</Fragment>;
        });
    }

    return (
        <>
            <div
                className="flex flex-col bg-white m-[198px] p-component-gap gap-section-title-gap items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-component-gap-sm">
                    <div className="relative w-[221px] h-[288px] flex-shrink-0 overflow-hidden"></div>

                    <div className="flex flex-col gap-[24px]">
                        <div className="text-h2 text-isd-font-1">
                            {news.title}
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
                </div>

                {news.details && (
                    <div className="flex flex-col gap-[24px]">
                        <div className="text-md text-isd-font-3 text-start">
                            <div className="whitespace-pre-wrap">
                                <span>{format(news.details)}</span>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className="text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                    onClick={() => router.back()}
                >
                    <X size={24} />
                    <span className="text-sm">Close</span>
                </button>
            </div>
        </>
    );
}
