import HeroImageFile from '@/assets/MPTIE.jpg';

import HeroImage from '@/components/HeroImage';
import NewsListBlock from '@/components/blocks/NewsListBlock';

export default function NewsPage() {
    return (
        <div className="min-h-screen flex flex-col items-stretch">
            <HeroImage image={HeroImageFile} />
            <NewsListBlock />
        </div>
    );
}
