import AboutISDBlock from '@/components/blocks/AboutISDBlock';
import ResourceBlock from '@/components/blocks/ResourceBlock';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col gap-10 py-10 items-center">
            <AboutISDBlock />
            <ResourceBlock />
        </div>
    );
}
