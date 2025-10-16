import HeroImageFile from '@/assets/MSTLE.png';

import HeroImage from '@/components/HeroImage';
import MSTLEBlock from '@/components/blocks/MSTLEBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <MSTLEBlock />
        </div>
    );
}
