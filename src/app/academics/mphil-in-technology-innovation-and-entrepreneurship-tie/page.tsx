import HeroImageFile from '@/assets/MPTIE.jpg';

import HeroImage from '@/components/HeroImage';
import MPTIEBlock from '@/components/blocks/mphil-tie/MPTIEBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <MPTIEBlock />
        </div>
    );
}
