import HeroImage from '@/components/HeroImage';
import ProgramBlock from '@/components/blocks/ProgramsBlock';
import FAQBlock from '@/components/blocks/FAQBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage />
            <ProgramBlock />
            <FAQBlock />
        </div>
    );
}
