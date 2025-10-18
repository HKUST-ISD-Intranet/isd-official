'use client';

import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBlock() {
    const typeList = [
        { value: 'all', label: 'All Types' },
        { value: 'News', label: 'News' },
        { value: 'Events', label: 'Events' },
        { value: 'Achievements', label: 'Achievements' },
    ];

    const yearList = [{ value: 'all', label: 'All Years' }];

    // from current year to 10 years ago
    for (
        let i = new Date().getFullYear();
        i >= new Date().getFullYear() - 10;
        i--
    ) {
        yearList.push({ value: i.toString(), label: i.toString() });
    }

    const router = useRouter();
    const searchParams = useSearchParams();

    // initialize from URL so the UI reflects the current page state
    const initialType = searchParams?.get('type') ?? 'all';
    const initialYear = searchParams?.get('year') ?? 'all';

    const [type, setType] = useState<string>(initialType);
    const [year, setYear] = useState<string>(initialYear);

    const paramString = searchParams?.toString() ?? '';

    useEffect(() => {
        // keep state synced if the user navigates with back/forward
        setType(searchParams?.get('type') ?? 'all');
        setYear(searchParams?.get('year') ?? 'all');
    }, [paramString, searchParams]);

    function applyFilters(newParams?: { type?: string; year?: string }) {
        const params = new URLSearchParams(searchParams?.toString() ?? '');
        if (newParams?.type !== undefined) params.set('type', newParams.type);
        if (newParams?.year !== undefined) params.set('year', newParams.year);
        // push so page updates and server component will re-render
        const qs = params.toString();
        router.push(`/news/${qs ? `?${qs}` : ''}`);
    }

    function handleSearch() {
        applyFilters({ type, year });
    }

    function handleClear() {
        setType('all');
        setYear('all');

        applyFilters({
            type: 'all',
            year: 'all',
        });
    }

    return (
        <div className="bg-isd-primary-2">
            <div className="container w-full flex pt-section-gap pb-component-gap-sm gap-component-gap-sm items-center">
                <Select
                    id="type-select"
                    options={typeList}
                    value={type}
                    onChange={(v) => {
                        const val = String(v);
                        setType(val);
                        applyFilters({ type: val, year });
                    }}
                    placeholder="Filter by type"
                    className="w-[180px]"
                />

                <Select
                    id="year-select"
                    options={yearList}
                    value={year}
                    onChange={(v) => {
                        const val = String(v);
                        setYear(val);
                        applyFilters({ type, year: val });
                    }}
                    placeholder="Filter by year"
                    className="w-[180px]"
                />
            </div>
        </div>
    );
}
