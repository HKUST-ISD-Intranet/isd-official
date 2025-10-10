import ResearchHero from '@/assets/research/research-hero.jpg';
import HeroImage from '@/components/HeroImage';
import Heading from './HeadingBlock';
import SustainableTechBlock from './SustainableTechBlock';
import MarineTechBlock from './MarineTechBlock';
import HealthTechBlock from './HealthTechBlock';
import DesignTechBlock from './DesignTechBlock';
import EmergentThemesBlock from './EmergentThemesBlock';

export default function ResearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={ResearchHero} />
            <Heading />
            {/* TODO - fix image sizing */}
            <SustainableTechBlock />
            <MarineTechBlock />
            <HealthTechBlock />
            <DesignTechBlock />
            <EmergentThemesBlock />
        </div>
    );
}
