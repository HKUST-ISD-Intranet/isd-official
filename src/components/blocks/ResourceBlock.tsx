import ImageCard from '@/components/ImageCard';

import ScholarshipsImg from '@/assets/scholarships-img.png';
import ExcangeImg from '@/assets/exchange-img.jpg';
import FacilitiesImg from '@/assets/facilities-img.png';

export default function ResourceBlock() {
    return (
        <div className="container flex flex-col py-section-gap gap-section-title-gap">
            <h1 className="text-h1 offset-text-background uppercase">
                Resource
            </h1>
            <div className="flex flex-row gap-component-gap-sm">
                <ImageCard
                    imageSrc={ScholarshipsImg}
                    title="Scholarships"
                    // link="/scholarships"
                    description="Several dedicated partners share our vision of creating new modes of engineering education. As part of our partnership program, they provide valuable resources in forms of financial and in-kind support to the Division."
                />
                <ImageCard
                    imageSrc={ExcangeImg}
                    title="Internship & Exchange"
                    // link="/internships"
                    description="ISD students can enjoy a range of internship opportunities offered by our industrial partners, and participate in exchange program coordinated by Academy of Interdisciplinary Studies."
                />
                <ImageCard
                    imageSrc={FacilitiesImg}
                    title="Facilities"
                    // link="/facilities"
                    description="The division has two main design and prototyping facilities. The Design Studio is a teaching unit as well as a small 3D printing unit with small hand tools. Most of the first year design classes are held in the Design Studio."
                />
            </div>
        </div>
    );
}
