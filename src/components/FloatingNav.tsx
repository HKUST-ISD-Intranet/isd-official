'use client';

import { ChevronsRight, ChevronsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type Section = { id: string; label: string };

export default function FloatingNav({
    sections,
    title,
}: {
    sections: Section[];
    title: string;
}) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string | null>(
        sections?.[0]?.id ?? null
    );

    useEffect(() => {
        if (!sections || sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            {
                root: null,
                // trigger when top of section crosses ~40% from top
                rootMargin: '0px 0px -60% 0px',
                threshold: 0,
            }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };

    return (
        // use sticky so the nav sits below the hero image but becomes fixed when scrolled
        <div className="sticky top-57 z-50 mt-4 w-full">
            <div className="relative">
                <button
                    aria-label={open ? 'Close navigation' : 'Open navigation'}
                    onClick={() => setOpen((v) => !v)}
                    className="absolute left-[-64px] top-[47px] transform rotate-90 w-fit h-fit px-[12px] py-[11px] bg-isd-secondary text-white shadow-lg flex items-center justify-center"
                >
                    {open ? (
                        <div />
                    ) : (
                        <div className="flex flex-row justify-center items-center gap-2">
                            <span>{title}</span>
                            <ChevronsRight />
                        </div>
                    )}
                </button>

                {/* Flyout panel anchored to the button (opens into the page) */}
                <div
                    className={`absolute left-0 top-[-24px] mt-2 w-fit whitespace-nowrap transform transition-all duration-150 ${
                        open
                            ? 'opacity-100 scale-100 translate-x-0'
                            : 'opacity-0 scale-95 translate-x-2 pointer-events-none'
                    }`}
                    aria-hidden={!open}
                >
                    <div className="bg-isd-secondary-1 shadow-lg">
                        <div className="p-2 bg-secondary text-white flex items-center gap-2 justify-between mb-2">
                            <span>{title}</span>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-isd-font-2"
                                aria-label="Close"
                            >
                                <ChevronsUp className="text-white" />
                            </button>
                        </div>

                        <nav
                            aria-label="Floating section navigation"
                            className="pb-2"
                        >
                            <ul className="space-y-2">
                                {sections.map((s) => (
                                    <li key={s.id}>
                                        <button
                                            onClick={() => handleClick(s.id)}
                                            className={`w-full text-left px-2  flex items-center justify-between text-sm ${
                                                active === s.id
                                                    ? 'text-secondary font-bold'
                                                    : 'text-isd-font-2'
                                            }`}
                                        >
                                            <span>{s.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
