import HeroCarouselBlock from '@/components/blocks/HeroCarouselBlock';
import AboutISDNavbarBlock from '@/components/blocks/AboutISDNavbarBlock';
import HeadsMessageBlock from '@/components/blocks/HeadsMessageBlock';
import WhatIsISDBlock from '@/components/blocks/WhatIsISDBlock';
import JoinUsBlock from '@/components/blocks/JoinUsBlock';

export default function AboutISD() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroCarouselBlock />
            <AboutISDNavbarBlock />
            <HeadsMessageBlock />
            <WhatIsISDBlock />
            <JoinUsBlock />
        </div>
    );
}
