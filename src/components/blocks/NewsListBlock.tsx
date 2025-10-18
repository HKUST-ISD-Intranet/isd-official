'use client';

import { ChevronDown } from 'lucide-react';
import NewsCard from '../NewsCard';
import EventCard from '../EventCard';

export default function NewsListBlock() {
    return (
        <div className="dot-pattern before:top-[-115px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container flex flex-col py-section-gap gap-0">
                <div className="flex justify-between">
                    <h1 className="text-h1 offset-text-background text-isd-font-1 text-balance">
                        News & Events
                    </h1>

                    <div className="flex gap-component-gap-sm">
                        <div className="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]">
                            <span>All Category</span>
                            <ChevronDown size={18} />
                        </div>
                        <div className="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]">
                            <span>Year</span>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-isd-primary-3">
                    <NewsCard type="news" />
                    <NewsCard type="achievement" />
                    <EventCard />
                </div>
            </div>
        </div>
    );
}
