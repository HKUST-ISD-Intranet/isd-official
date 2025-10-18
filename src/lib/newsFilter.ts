export type News = {
    date: string;
    details?: string | null;
    evt_date?: string | null;
    evt_location?: string | null;
    evt_time?: string | null;
    pictures?: string[] | null;
    title?: string | null;
    type?: string | null;
    id?: number | null;
};

type Options = {
    type?: string;
    year?: string;
    id?: number;
};

export function filterAndSortNews(items: News[], options: Options = {}) {
    const { type = 'all', year = 'all', id = 0 } = options;

    console.log('filterAndSortNews', items, options);

    let filtered = items;

    // filter by id
    if (id) {
        filtered = filtered.filter((it) => {
            if (!it.id) return false;
            return it.id === id;
        });
    }

    // filter by type
    if (type && type != 'all') {
        filtered = filtered.filter((it) => {
            if (!it.type) return false;
            return it.type === type;
        });
    }

    // filter by year
    if (year && year != 'all') {
        filtered = filtered.filter((it) => {
            //it.date is yyyy-mm-dd
            // convert to date and compare year
            if (!it.date) return false;
            const date = new Date(it.date);
            const y = date.getFullYear();
            return y.toString() === year;
        });
    }

    const sorted = filtered.slice();

    // sort by date desc
    sorted.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return sorted;
}

export default filterAndSortNews;
