'use client';

import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBlock() {
    const roles = [
        { value: 'all', label: 'All Roles' },
        { value: 'faculty', label: 'ISD Faculty' },
        { value: 'affiliate', label: 'Affiliates' },
        { value: 'staff', label: 'ISD Staff' },
    ];

    const sortOptions = [
        { value: 'sort_name', label: 'Sort by Name' },
        { value: 'sort_position', label: 'Sort by Position' },
    ];

    const router = useRouter();
    const searchParams = useSearchParams();

    // initialize from URL so the UI reflects the current page state
    const initialRole = searchParams?.get('role') ?? 'all';
    const initialSort = searchParams?.get('sort') ?? 'sort_position';
    const initialKeyword = searchParams?.get('keyword') ?? '';

    const [role, setRole] = useState<string>(initialRole);
    const [sort, setSort] = useState<string>(initialSort);
    const [keyword, setKeyword] = useState<string>(initialKeyword);

    const paramString = searchParams?.toString() ?? '';

    useEffect(() => {
        // keep state synced if the user navigates with back/forward
        setRole(searchParams?.get('role') ?? 'all');
        setSort(searchParams?.get('sort') ?? 'sort_position');
        setKeyword(searchParams?.get('keyword') ?? '');
    }, [paramString, searchParams]);

    function applyFilters(newParams?: {
        role?: string;
        sort?: string;
        keyword?: string;
    }) {
        const params = new URLSearchParams(searchParams?.toString() ?? '');
        if (newParams?.role !== undefined) params.set('role', newParams.role);
        if (newParams?.sort !== undefined) params.set('sort', newParams.sort);
        if (newParams?.keyword !== undefined) {
            if (newParams.keyword === '') params.delete('keyword');
            else params.set('keyword', newParams.keyword);
        }

        // push so page updates and server component will re-render
        const qs = params.toString();
        router.push(`/people${qs ? `?${qs}` : ''}`);
    }

    function handleSearch() {
        applyFilters({ role, sort, keyword });
    }

    function handleClear() {
        setRole('all');
        setSort('sort_position');
        setKeyword('');
        applyFilters({ role: 'all', sort: 'sort_position', keyword: '' });
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
                        applyFilters({ role: val, sort, keyword });
                    }}
                    placeholder="Sort by Role"
                    className="w-[180px]"
                />

                <Select
                    id="position-select"
                    options={sortOptions}
                    value={sort}
                    onChange={(v) => {
                        const val = String(v);
                        setSort(val);
                        applyFilters({ role, sort: val, keyword });
                    }}
                    placeholder="Sort by Position"
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
        </div>
    );
}
