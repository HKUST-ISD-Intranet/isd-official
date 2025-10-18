import HeroImageFile from '@/assets/academics-hero.jpg';

import HeroImage from '@/components/HeroImage';
import ProgramBlock from '@/components/blocks/ProgramsBlock';
import ResourceBlock from '@/components/blocks/ResourceBlock';
export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <div className="dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]" />
            <ProgramBlock />
            <ResourceBlock />
        </div>
    );
}
