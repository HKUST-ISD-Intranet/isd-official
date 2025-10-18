import HeroImageFile from '@/assets/newsEvt/all.png';

import HeroImage from '@/components/HeroImage';
import FilterBlock from '@/components/blocks/news/FilterBlock';
import NewsEventBlock from '@/components/blocks/news/NewsEventBlock';

import news from '@/data/news_events.json';

import { filterAndSortNews, News } from '@/lib/newsFilter';

export default function PeoplePage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const type = Array.isArray(searchParams?.type)
        ? searchParams?.type[0]
        : (searchParams?.type ?? 'all');
    const year = Array.isArray(searchParams?.year)
        ? searchParams?.year[0]
        : (searchParams?.year ?? 'all');

    // Prepare filtered lists per role context
    const newsList = filterAndSortNews(news as News[], {
        type,
        year,
    });

    return (
        <div className="min-h-screen flex flex-col pb-component-gap">
            <HeroImage image={HeroImageFile} />
    
            {/* Render blocks according to selected role */}
            {(type === 'all' || year === 'all') && (
                <NewsEventBlock news={newsList} />
            )}
        </div>
    );
}
