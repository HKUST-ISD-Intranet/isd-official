import ResearchHero from '@/assets/research/research-hero.jpg';
import BannerImage from '@/components/HeroImage';
import Heading from './HeadingBlock';
import SustainableTechBlock from './SustainableTechBlock';
import MarineTechBlock from './MarineTechBlock';

export default function ResearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <BannerImage imageSource={ResearchHero} />
            <Heading />
            {/* TODO - fix image sizing */}
            <SustainableTechBlock />
            <MarineTechBlock />
        </div>
    );
}
