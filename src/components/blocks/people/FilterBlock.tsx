'use client';

import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import { useRouter, useSearchParams } from 'next/navigation';
import { AreaChart } from 'lucide-react';

export default function FilterBlock() {
    const roles = [
        { value: 'all', label: 'All Roles' },
        { value: 'faculty', label: 'ISD Faculty' },
        { value: 'staff', label: 'ISD Staff' },
    ];

    const areas = [
        { value: 'all', label: 'All Areas' },
        { value: 'health_tech', label: 'Health Tech' },
        { value: 'sustainable_tech', label: 'Sustainable-Tech' },
        { value: 'design_tech', label: 'Design-Tech' },
        { value: 'marine_tech', label: 'Marine-Tech' },
    ];

    const tags = [
        { value: 'regular', label: 'Regular' },
        { value: 'joint_appointment', label: 'Joint Appointment' },
        { value: 'teaching_track', label: 'Teaching Track' },
        { value: 'research_track', label: 'Research Track' },
        { value: 'adjunct', label: 'Adjunct' },
        { value: 'emeritus', label: 'Emeritus' },
        { value: 'affiliate', label: 'Affiliate' },
    ];

    const router = useRouter();
    const searchParams = useSearchParams();

    // initialize from URL so the UI reflects the current page state
    const initialRole = searchParams?.get('role') ?? 'all';
    const initialArea = searchParams?.get('area') ?? 'all';
    const initialKeyword = searchParams?.get('keyword') ?? '';
    const initialTag = searchParams?.get('tag') ?? '';

    const [role, setRole] = useState<string>(initialRole);
    const [area, setArea] = useState<string>(initialArea);
    const [keyword, setKeyword] = useState<string>(initialKeyword);
    const [tag, setTag] = useState<string>(initialTag);

    const paramString = searchParams?.toString() ?? '';

    useEffect(() => {
        // keep state synced if the user navigates with back/forward
        setRole(searchParams?.get('role') ?? 'all');
        setArea(searchParams?.get('area') ?? 'all');
        setKeyword(searchParams?.get('keyword') ?? '');
        setTag(searchParams?.get('tag') ?? '');
    }, [paramString, searchParams]);

    function applyFilters(newParams?: {
        role?: string;
        area?: string;
        keyword?: string;
        tag?: string;
    }) {
        const params = new URLSearchParams(searchParams?.toString() ?? '');
        if (newParams?.role !== undefined) params.set('role', newParams.role);
        if (newParams?.area !== undefined) params.set('area', newParams.area);
        if (newParams?.keyword !== undefined) {
            if (newParams.keyword === '') params.delete('keyword');
            else params.set('keyword', newParams.keyword);
        }

        if (newParams?.tag !== undefined) params.set('tag', newParams.tag);

        // push so page updates and server component will re-render
        const qs = params.toString();
        router.push(`/people${qs ? `?${qs}` : ''}`);
    }

    function handleSearch() {
        applyFilters({ role, area, keyword, tag });
    }

    function handleClear() {
        setRole('all');
        setArea('all');
        setKeyword('');
        setTag('');
        applyFilters({
            role: 'all',
            area: 'all',
            keyword: '',
            tag: '',
        });
    }

    return (
        <div className="bg-isd-primary-2">
            <div className="container w-full flex pt-section-gap pb-component-gap-sm gap-component-gap-sm items-center">
                <Select
                    id="role-select"
                    options={roles}
                    value={role}
                    onChange={(v) => {
                        const val = String(v);
                        setRole(val);
                        applyFilters({ role: val, area, keyword, tag });
                    }}
                    placeholder="Filter by Role"
                    className="w-[180px]"
                />

                <Select
                    id="area-select"
                    options={areas}
                    value={area}
                    onChange={(v) => {
                        const val = String(v);
                        setArea(val);
                        applyFilters({ role, area: val, keyword, tag });
                    }}
                    placeholder="Filter by area"
                    className="w-[180px]"
                />

                <div className="flex gap-element-gap flex-1">
                    <input
                        type="text"
                        placeholder="Keyword Search"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch();
                        }}
                        className="bg-white px-[12px] flex-1 h-component-gap-sm text-isd-font-1 placeholder:text-isd-font-3 focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-isd-primary w-section-gap h-component-gap-sm text-white"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-white w-section-gap h-component-gap-sm text-isd-primary"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                {tags.map((leTag) => (
                    <button
                        key={leTag.value}
                        onClick={() => {
                            if (tag !== leTag.value) {
                                setTag(leTag.value);
                                applyFilters({
                                    role,
                                    area,
                                    keyword,
                                    tag: leTag.value,
                                });
                            } else {
                                setTag('');
                                applyFilters({
                                    role,
                                    area,
                                    keyword,
                                    tag: '',
                                });
                            }
                        }}
                        className={` text-sm p-footer-gap  border w-40 m-3 rounded-xl  ${
                            tag === leTag.value
                                ? 'bg-isd-primary h-component-gap text-white'
                                : 'bg-white h-component-gap text-isd-primary'
                        }`}
                    >
                        {leTag.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
