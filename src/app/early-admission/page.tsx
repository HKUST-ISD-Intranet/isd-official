import HeroImageFile from '@/assets/early-admission.jpg';

import HeroImage from '@/components/HeroImage';
import EarlyAdmissionInfoBlock from '@/components/blocks/EarlyAdmissionInfoBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <EarlyAdmissionInfoBlock />
        </div>
    );
}
