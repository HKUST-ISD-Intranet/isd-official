'use client';

import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

// From GPT 5:
// A TypeScript rewrite of the simple accessible dropdown built with React + Tailwind
// - Keyboard navigation (ArrowUp / ArrowDown / Enter / Escape)
// - Typeahead (type letters to jump to option)
// - Click-to-open, click outside to close
// - ARIA roles & attributes for accessibility

type Option = {
    value: string | number;
    label: string;
};

type CustomSelectProps = {
    options?: Option[];
    value?: string | number | null;
    onChange?: (value: string | number | null) => void;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    className?: string;
};

function useOnClickOutside(
    refs: React.RefObject<HTMLElement | null>[],
    handler: (e?: Event) => void
) {
    useEffect(() => {
        const listener = (e: Event) => {
            for (const r of refs) {
                const el = r.current;
                if (!el) continue;
                if (el.contains(e.target as Node)) return;
            }
            handler(e);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [refs, handler]);
}

export default function Select({
    options = [],
    value = null,
    onChange = () => {},
    placeholder = 'Select...',
    disabled = false,
    id = 'custom-select',
    className = '',
}: CustomSelectProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const [typeaheadBuf, setTypeaheadBuf] = useState<string>('');

    const containerRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);

    useOnClickOutside([containerRef], () => setOpen(false));

    useEffect(() => {
        if (!open) {
            setHighlightedIndex(-1);
        }
    }, [open]);

    // reset typeahead buffer after short delay
    useEffect(() => {
        if (!typeaheadBuf) return;
        const t = window.setTimeout(() => setTypeaheadBuf(''), 700);
        return () => window.clearTimeout(t);
    }, [typeaheadBuf]);

    function openAndFocusList() {
        setOpen(true);
        requestAnimationFrame(() => listRef.current?.focus());
    }

    function handleToggle() {
        if (disabled) return;
        if (!open) openAndFocusList();
        else setOpen(false);
    }

    function handleSelect(option: Option) {
        onChange(option.value);
        setOpen(false);
        buttonRef.current?.focus();
    }

    function handleKeyDown(
        e: React.KeyboardEvent<HTMLButtonElement | HTMLUListElement>
    ) {
        if (disabled) return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!open) return openAndFocusList();
                setHighlightedIndex((i) => Math.min(i + 1, options.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (!open) return openAndFocusList();
                setHighlightedIndex((i) => Math.max(i - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (!open) return openAndFocusList();
                if (
                    highlightedIndex >= 0 &&
                    highlightedIndex < options.length
                ) {
                    handleSelect(options[highlightedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setOpen(false);
                buttonRef.current?.focus();
                break;
            default: {
                // typeahead support
                if (e.key.length === 1 && /\S/.test(e.key)) {
                    const buf = (typeaheadBuf + e.key).toLowerCase();
                    setTypeaheadBuf(buf);
                    const idx = options.findIndex((o) =>
                        o.label.toLowerCase().startsWith(buf)
                    );
                    if (idx >= 0) {
                        setHighlightedIndex(idx);
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (highlightedIndex < 0) return;
        const el = listRef.current?.querySelector<HTMLElement>(
            `[data-index="${highlightedIndex}"]`
        );
        if (el) el.scrollIntoView({ block: 'nearest' });
    }, [highlightedIndex]);

    const selected = options.find((o) => o.value === value) || null;

    return (
        <div
            ref={containerRef}
            className={`relative inline-block text-left text-isd-font-3 text-sm ${className}`}
        >
            <button
                id={id}
                ref={buttonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-labelledby={`${id}-label`}
                disabled={disabled}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className="w-full flex items-center justify-between px-[12px] h-component-gap-sm bg-white focus:outline-none"
            >
                <span id={`${id}-label`} className="truncate">
                    {selected ? (
                        selected.label
                    ) : (
                        <span className="text-gray-400">{placeholder}</span>
                    )}
                </span>

                <ChevronDown
                    size={18}
                    className={`transform transition-transform ${open ? '-rotate-180' : 'rotate-0'}`}
                />
            </button>

            {open && (
                <div
                    role="dialog"
                    aria-modal="false"
                    className="absolute z-50 w-full bg-white shadow-lg shadow-black/30 left-0"
                >
                    <ul
                        role="listbox"
                        tabIndex={-1}
                        ref={listRef}
                        aria-activedescendant={
                            highlightedIndex >= 0
                                ? `${id}-option-${highlightedIndex}`
                                : undefined
                        }
                        className="overflow-auto"
                        onKeyDown={handleKeyDown}
                    >
                        {options.map((opt, idx) => {
                            if (selected && selected.value === opt.value)
                                return null;
                            const isHighlighted = idx === highlightedIndex;
                            return (
                                <li
                                    key={String(opt.value)}
                                    id={`${id}-option-${idx}`}
                                    data-index={idx}
                                    role="option"
                                    aria-selected="false"
                                    onMouseEnter={() =>
                                        setHighlightedIndex(idx)
                                    }
                                    onMouseLeave={() => setHighlightedIndex(-1)}
                                    onClick={() => handleSelect(opt)}
                                    className={`cursor-pointer select-none px-[12px] py-2 flex items-center justify-between gap-2 text-sm ${
                                        isHighlighted ? 'bg-isd-primary-2' : ''
                                    }`}
                                >
                                    <span className="truncate">
                                        {opt.label}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
