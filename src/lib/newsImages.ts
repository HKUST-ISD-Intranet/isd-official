import { StaticImageData } from 'next/image';

import noneImg from '@/assets/newsEvt/noneImg.png';

import news_2025_04_07 from '@/assets/newsEvt/news.2025.04.07.jpg';
import ach_2024_03_08 from '@/assets/newsEvt/ach.2024.03.08.jpg';
import evt_2025_10_29 from '@/assets/newsEvt/evt.2024.10.29.png';
import evt_2025_07_02 from '@/assets/newsEvt/evt.2025.07.02.png';
import news_2025_15_10 from '@/assets/newsEvt/news.2025.15.10.png';
import news_2025_09_02 from '@/assets/newsEvt/news.2025.09.02.png';
import news_2025_08_21_01 from '@/assets/newsEvt/news.2025.08.21.01.png';
import news_2025_08_21_02 from '@/assets/newsEvt/news.2025.08.21.02.png';
import news_2025_08_21_03 from '@/assets/newsEvt/news.2025.08.21.03.png';
import news_2025_08_21_04 from '@/assets/newsEvt/news.2025.08.21.04.png';
import news_2025_08_21_05 from '@/assets/newsEvt/news.2025.08.21.05.png';
import news_2025_08_21_06 from '@/assets/newsEvt/news.2025.08.21.06.png';
import news_2025_07_28_01 from '@/assets/newsEvt/news.2025.07.28.01.png';
import news_2025_07_28_02 from '@/assets/newsEvt/news.2025.07.28.02.png';
import news_2025_07_28_03 from '@/assets/newsEvt/news.2025.07.28.03.png';
import news_2025_07_28_04 from '@/assets/newsEvt/news.2025.07.28.04.png';
import news_2025_07_28_05 from '@/assets/newsEvt/news.2025.07.28.05.png';
import news_2025_07_07_01 from '@/assets/newsEvt/news.2025.07.07.01.jpg';
import news_2025_07_07_02 from '@/assets/newsEvt/news.2025.07.07.02.jpg';
import news_2025_07_07_03 from '@/assets/newsEvt/news.2025.07.07.03.jpg';
import news_2025_07_07_04 from '@/assets/newsEvt/news.2025.07.07.04.jpg';
import evt_2024_10_22 from '@/assets/newsEvt/evt.2024.10.22.png';

type Img = StaticImageData | string;

export const newsImages: Record<string, Img> = {
    'news.2025.04.07.jpg': news_2025_04_07,
    'ach.2024.03.08.jpg': ach_2024_03_08,
    'evt.2024.10.29.jpg': evt_2025_10_29,
    'evt.2025.07.02.png': evt_2025_07_02,
    'news.2025.15.10.png': news_2025_15_10,
    'news.2025.09.02.png': news_2025_09_02,
    'news.2025.08.21.01.png': news_2025_08_21_01,
    'news.2025.08.21.02.png': news_2025_08_21_02,
    'news.2025.08.21.03.png': news_2025_08_21_03,
    'news.2025.08.21.04.png': news_2025_08_21_04,
    'news.2025.08.21.05.png': news_2025_08_21_05,
    'news.2025.08.21.06.png': news_2025_08_21_06,
    'news.2025.07.28.01.png': news_2025_07_28_01,
    'news.2025.07.28.02.png': news_2025_07_28_02,
    'news.2025.07.28.03.png': news_2025_07_28_03,
    'news.2025.07.28.04.png': news_2025_07_28_04,
    'news.2025.07.28.05.png': news_2025_07_28_05,
    'news.2025.07.07.01.jpg': news_2025_07_07_01,
    'news.2025.07.07.02.jpg': news_2025_07_07_02,
    'news.2025.07.07.03.jpg': news_2025_07_07_03,
    'news.2025.07.07.04.jpg': news_2025_07_07_04,
    'evt.2024.10.22.png': evt_2024_10_22,
};

/**
 * Resolve a photo path from JSON to a static import that Next/Image can use.
 * Accepts values like:
 *  - "/src/assets/people/qianzh.jpg"
 *  - "/assets/people/qianzh.jpg"
 *  - "qianzh.jpg"
 */
export function resolveNewsPhoto(photo?: string): Img {
    if (!photo) return noneImg;
    // normalize: remove leading slashes and optional "src/" or "assets/" prefixes
    const cleaned = photo
        .replace(/^\/+/, '')
        .replace(/^src\//, '')
        .replace(/^assets\//, '');
    const name = cleaned.split('/').pop();
    console.log('Resolving photo:', photo, '->', cleaned, '->', name);
    if (!name) return noneImg;
    return newsImages[name] ?? noneImg;
}

export default newsImages;
