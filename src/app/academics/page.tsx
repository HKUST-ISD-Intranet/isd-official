import HeroImage from '@/components/HeroImage';
import ProgramBlock from '@/components/blocks/ProgramsBlock';
import ResourceBlock from '@/components/blocks/ResourceBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage />
            <ProgramBlock />
            <ResourceBlock />
        </div>
    );
}
