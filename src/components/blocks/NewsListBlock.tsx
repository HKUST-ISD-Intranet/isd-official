'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import data from '@/data/news_events.json';
import {
    filterNews,
    sortNews,
    type NewsEntry,
    type CategoryFilter,
    getYears,
} from '@/lib/newsFilter';
import { resolveImages } from '@/lib/newsImages';
import NewsCard from '@/components/NewsCard';
import EventCard from '@/components/EventCard';
import Select, { type Option } from '@/components/Select';
import { ChevronsDown } from 'lucide-react';

export default function NewsListBlock() {
    const allItems = data as NewsEntry[];
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [visibleCount, setVisibleCount] = useState<number>(5);

    const category: CategoryFilter = useMemo(() => {
        return (searchParams.get('category') as CategoryFilter) || 'all';
    }, [searchParams]);

    const year: number | 'all' = useMemo(() => {
        const raw = searchParams.get('year');
        if (!raw) return 'all';
        const n = Number(raw);
        return Number.isFinite(n) ? (n as number) : 'all';
    }, [searchParams]);

    const categoryOptions: Option[] = [
        { value: 'all', label: 'All Category' },
        { value: 'news', label: 'News' },
        { value: 'events', label: 'Events' },
        { value: 'achievements', label: 'Achievements' },
    ];

    const yearOptions: Option[] = useMemo(() => {
        const ys = getYears(allItems);
        return [
            { value: 'all', label: 'Year' },
            ...ys.map((y) => ({ value: y, label: String(y) })),
        ];
    }, [allItems]);

    const items = sortNews(
        filterNews(allItems, {
            category,
            year,
        })
    );

    // Reset visible items when filters change
    useEffect(() => {
        setVisibleCount(5);
    }, [category, year]);

    const visibleItems = useMemo(
        () => items.slice(0, Math.max(0, visibleCount)),
        [items, visibleCount]
    );

    function updateSearchParams(next: {
        category?: CategoryFilter;
        year?: number | 'all';
    }) {
        const params = new URLSearchParams(searchParams.toString());
        if (next.category !== undefined) {
            const p = (() => {
                return next.category === 'all' ? null : next.category;
            })();
            if (!p) params.delete('category');
            else params.set('category', p);
        }
        if (next.year !== undefined) {
            if (next.year === 'all') params.delete('year');
            else params.set('year', String(next.year));
        }
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }

    return (
        <div className="dot-pattern before:top-[-115px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container flex flex-col py-section-gap gap-0">
                <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-component-gap-sm">
                    <h1 className="text-h1 offset-text-background text-isd-font-1 text-balance">
                        News & Events
                    </h1>

                    <div className="flex gap-component-gap-sm">
                        <Select
                            options={categoryOptions}
                            value={category}
                            onChange={(v) =>
                                updateSearchParams({
                                    category: (v as CategoryFilter) ?? 'all',
                                })
                            }
                            placeholder="All Category"
                            triggerClassName="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center sm:px-element-gap gap-[12px] sm:pb-0 pb-[6px]"
                        />
                        <Select
                            options={yearOptions}
                            value={year}
                            onChange={(v) =>
                                updateSearchParams({
                                    year: (v as number) ?? 'all',
                                })
                            }
                            placeholder="Year"
                            triggerClassName="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center sm:px-element-gap gap-[12px] sm:pb-0 pb-[6px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:divide-y lg:gap-0 gap-component-gap-sm lg:py-0 py-component-gap-sm divide-isd-primary-3">
                    {visibleItems.map((item) => {
                        const href = `${item.id}`;
                        const img = resolveImages(item.pictures)[0];
                        const formattedDate = formatDate(item.date);
                        if (item.type === 'events') {
                            return (
                                <EventCard
                                    key={item.id}
                                    href={href}
                                    title={item.title}
                                    date={formattedDate}
                                    time={item.evt_time ?? null}
                                    location={item.evt_location ?? null}
                                    image={img}
                                />
                            );
                        }
                        return (
                            <NewsCard
                                key={item.id}
                                href={href}
                                category={
                                    item.type === 'achievements'
                                        ? 'Achievement'
                                        : 'News'
                                }
                                title={item.title}
                                excerpt={stripTags(item.details)}
                                date={formattedDate}
                                image={img}
                            />
                        );
                    })}
                </div>

                {visibleCount < items.length && (
                    <button
                        onClick={() =>
                            setVisibleCount((c) =>
                                Math.min(c + 5, items.length)
                            )
                        }
                        className="cursor-pointer self-center text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]"
                        aria-label="Load more news and events"
                    >
                        <div className="flex items-center gap-[12px]">
                            Load more
                            <ChevronsDown size={18} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

function stripTags(text: string) {
    // Remove custom xTx/xETx tags and collapse whitespace for preview
    return text
        .replace(/x+EndTitlex+/gi, '')
        .replace(/xTx\s*/gi, '')
        .replace(/\s*xETx/gi, '')
        .replace(/\n+/g, ' ')
        .trim();
}

function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
