import HeroImageFile from '@/assets/MSTLE.png';

import HeroImage from '@/components/HeroImage';
import MSTLEBlock from '@/components/blocks/MSTLEBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <div
                className="dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-primary-2)]"
                // aria-hidden
            />
            <MSTLEBlock />
        </div>
    );
}
