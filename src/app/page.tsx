import HeroCarouselBlock from '@/components/blocks/HeroCarouselBlock';
import AboutISDBlock from '@/components/blocks/AboutISDBlock';
import UniquePedagogy from '@/components/blocks/UniquePedagogy';
import NewsAndEventsBlock from '@/components/blocks/NewsAndEventsBlock';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroCarouselBlock />
            <AboutISDBlock />
            <UniquePedagogy />
            <NewsAndEventsBlock />
        </div>
    );
}
