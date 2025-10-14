import HeroImageFile from '@/assets/people/all.jpg';

import HeroImage from '@/components/HeroImage';
import FilterBlock from '@/components/blocks/people/FilterBlock';
import FacultyBlock from '@/components/blocks/people/FacultyBlock';
import StaffBlock from '@/components/blocks/people/StaffBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <FilterBlock />
            <FacultyBlock />
            <FacultyBlock type="affiliate" />
            <StaffBlock />
        </div>
    );
}
