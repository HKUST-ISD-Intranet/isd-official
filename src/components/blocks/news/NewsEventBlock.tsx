import NewsCard from '@/components/NewsCard';
import newsEvents from '@/data/news_events.json';

import { News } from '@/lib/newsFilter';
import FilterBlock from './FilterBlock';

export default function NewsEventBlock({ news }: { news?: News[] }) {
    return (
        <div
            className={
                'container w-full flex flex-col pt-section-gap gap-section-title-gap' +
                ' dot-pattern before:top-[-95px] before:right-[-60px] [--dot-color:var(--isd-primary-2)]'
            }
        >
            <h1 className="text-h1 offset-text-background ">News & Events</h1>

            <FilterBlock />

            {(() => {
                const list = news && news;

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
                    </div>
                );
            })()}
        </div>
    );
}
