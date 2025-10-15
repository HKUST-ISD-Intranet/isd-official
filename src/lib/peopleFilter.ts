export type Person = {
    name: string;
    details?: string | null;
    role?: string | null;
    position?: string | null;
    keywords?: string[] | null;
    photo?: string | null;
    email?: string | null;
    phone?: string | null;
    location?: string | null;
    link?: string | null;
};

type Options = {
    keyword?: string;
    sortBy?: 'sort_name' | 'sort_position';
    context?: 'faculty' | 'affiliate' | 'staff';
};

const facultyPositionOrder = [
    'head',
    'chair professor',
    'chair professor (joint)',
    'professor',
    'professor (joint)',
    'associate professor',
    'associate professor (joint)',
    'lecturer',
    'part-time lecturer',
    'research assistant professor',
    'adjunct professor',
];

const staffPositionOrder = [
    'senior manager',
    'assistant manager',
    'officer',
    'senior technical officer',
    'technical officer',
    'teaching associate',
    'instructional assistant',
];

function normalize(s?: string | null) {
    if (!s) return '';
    return s.toLowerCase().trim();
}

function nameKey(name?: string) {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].toLowerCase();
    const last = parts[parts.length - 1];
    const first = parts.slice(0, parts.length - 1).join(' ');
    return (last + ' ' + first).toLowerCase();
}

function positionRank(
    position?: string | null,
    context: Options['context'] = 'faculty'
) {
    const pos = normalize(position);
    if (context === 'staff') {
        const idx = staffPositionOrder.findIndex((p) => pos.includes(p));
        return idx >= 0 ? idx : staffPositionOrder.length;
    }
    // faculty/affiliate or default
    const idx = facultyPositionOrder.findIndex((p) => pos.includes(p));
    return idx >= 0 ? idx : facultyPositionOrder.length;
}

export function filterAndSortPeople(items: Person[], options: Options = {}) {
    const {
        keyword = '',
        sortBy = 'sort_position',
        context = 'faculty',
    } = options;
    const tokens = keyword
        .split(/\s+/)
        .map((t) => normalize(t))
        .filter(Boolean);

    const filtered = items.filter((it) => {
        if (tokens.length === 0) return true;
        let hay = [it.name, it.role, it.position, it.location, it.email]
            .filter(Boolean)
            .map((s) => normalize(String(s)))
            .join(' ');
        // include keywords array (normalize and append)
        if (Array.isArray(it.keywords) && it.keywords.length) {
            const k = it.keywords.map((s) => normalize(String(s))).join(' ');
            if (k) hay = (hay ? hay + ' ' : '') + k;
        }
        return tokens.every((t) => hay.includes(t));
    });

    const sorted = filtered.slice();
    if (sortBy === 'sort_name') {
        sorted.sort((a, b) => {
            const ka = nameKey(a.name);
            const kb = nameKey(b.name);
            return ka.localeCompare(kb);
        });
    } else {
        // sort by position using rank then name as tiebreaker
        sorted.sort((a, b) => {
            const ra = positionRank(a.position ?? a.role ?? '', context);
            const rb = positionRank(b.position ?? b.role ?? '', context);
            if (ra !== rb) return ra - rb;
            return nameKey(a.name).localeCompare(nameKey(b.name));
        });
    }

    return sorted;
}

export default filterAndSortPeople;
