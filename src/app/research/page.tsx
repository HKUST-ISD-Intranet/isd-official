import ResearchHero from '@/assets/research/research-hero.jpg';
import HeroImage from '@/components/HeroImage';
import Heading from './HeadingBlock';
import SustainableTechBlock from './SustainableTechBlock';
import MarineTechBlock from './MarineTechBlock';
import HealthTechBlock from './HealthTechBlock';
import DesignTechBlock from './DesignTechBlock';
import EmergentThemesBlock from './EmergentThemesBlock';
import FloatingNav from '@/components/FloatingNav';

export default function ResearchPage() {
    const sections = [
        { id: 'sustainable-tech', label: 'Sustainable-Tech' },
        { id: 'marine-tech', label: 'Marine-Tech' },
        { id: 'health-tech', label: 'Health-Tech' },
        { id: 'design-tech', label: 'Design-Tech' },
        { id: 'emergent-themes', label: 'Emergent Themes' },
    ];
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={ResearchHero} />
            <FloatingNav sections={sections} title="Research Areas" />
            <Heading />

            <section id="sustainable-tech" className="scroll-mt-24">
                <SustainableTechBlock />
            </section>

            <section id="marine-tech" className="scroll-mt-24">
                <MarineTechBlock />
            </section>

            <section id="health-tech" className="scroll-mt-24">
                <HealthTechBlock />
            </section>

            <section id="design-tech" className="scroll-mt-24">
                <DesignTechBlock />
            </section>

            <section id="emergent-themes" className="scroll-mt-24">
                <EmergentThemesBlock />
            </section>
        </div>
    );
}
