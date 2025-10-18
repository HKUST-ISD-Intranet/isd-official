'use client';

import NewsCard from '@/components/NewsCard';
import newsEvents from '@/data/news_events.json';

import { News } from '@/lib/newsFilter';
import FilterBlock from './FilterBlock';
import { ChevronsDown } from 'lucide-react';
import { useState } from 'react';

export default function NewsEventBlock({ news }: { news?: News[] }) {
    // only first 5 records

    const [totalRecords, setTotalRecords] = useState(5);

    let slicedNews = news?.slice(0, totalRecords);

    function loadMore(): void {
        setTotalRecords(totalRecords + 5);
        slicedNews = news?.slice(0, totalRecords);
    }

    return (
        <div
            className={
                'container w-full flex flex-col pt-section-gap gap-section-title-gap' +
                ' dot-pattern before:top-[-95px] before:right-[-60px] [--dot-color:var(--isd-primary-2)]'
            }
        >
            <div className="flex justify-between">
                {' '}
                <h1 className="text-h1 offset-text-background ">
                    News & Events
                </h1>{' '}
                <FilterBlock />
            </div>

            {(() => {
                const list = slicedNews && slicedNews;

                if (!list || list.length === 0) {
                    return (
                        <div className="text-isd-font-2">No results found.</div>
                    );
                }

                return (
                    <div className="grid grid-cols-1 gap-x-section-gap gap-y-component-gap scroll-mt-[295px]">
                        {list.map((news) => (
                            <div key={news.title}>
                                <NewsCard
                                    title={news.title ?? ''}
                                    type={(news.type ?? '') as string}
                                    pictures={news.pictures ?? []}
                                    evt_date={news.evt_date ?? undefined}
                                    evt_time={news.evt_time ?? undefined}
                                    evt_location={
                                        news.evt_location ?? undefined
                                    }
                                    date={news.date ?? undefined}
                                    details={news.details ?? undefined}
                                    id={news.id ?? undefined}
                                />
                            </div>
                        ))}

                        {totalRecords < newsEvents.length && (
                            <div
                                className="flex justify-center text-lg text-isd-secondary border-b-1 mx-auto"
                                onClick={() => loadMore()}
                            >
                                Load More <ChevronsDown />
                            </div>
                        )}
                    </div>
                );
            })()}
        </div>
    );
}
