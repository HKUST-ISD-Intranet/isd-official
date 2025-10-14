'use client';

import React, { useState } from 'react';
import Select from '../../Select';

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

    const [role, setRole] = useState<string | number | null>('all');
    const [position, setPosition] = useState<string | number | null>('any');
    const [keyword, setKeyword] = useState('');

    function handleSearch() {
        // This is a UI-only filter block. Raise events or call parent handlers as needed.
        // For now we just log the filter state for debug.
        // TODO: lift state up via props when integrating with parent.
        console.log('Search filters:', { role, position, keyword });
    }

    function handleClear() {
        setRole('all');
        setPosition('any');
        setKeyword('');
    }

    return (
        <div className="bg-isd-primary-2">
            <div className="container w-full flex pt-section-gap pb-component-gap-sm gap-component-gap-sm items-center">
                <Select
                    id="role-select"
                    options={roles}
                    value={role}
                    onChange={(v) => setRole(v)}
                    placeholder="Sort by Role"
                    className="w-[180px]"
                />

                <Select
                    id="position-select"
                    options={sortOptions}
                    value={position}
                    onChange={(v) => setPosition(v)}
                    placeholder="Sort by Position"
                    className="w-[180px]"
                />

                <div className="flex gap-element-gap flex-1">
                    <input
                        type="text"
                        placeholder="Keyword Search"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
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
