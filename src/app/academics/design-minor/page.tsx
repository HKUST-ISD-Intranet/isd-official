import HeroImageFile from '@/assets/carousel-3.jpg';

import HeroImage from '@/components/HeroImage';
import DesignMinorBlock from '@/components/blocks/DesignMinorBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <DesignMinorBlock />
        </div>
    );
}
