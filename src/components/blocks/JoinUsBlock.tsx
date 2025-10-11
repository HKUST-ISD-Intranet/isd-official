import { ArrowRight } from 'lucide-react';

export default function JoinUsBlock() {
    return (
        <div
            className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap scroll-mt-[95px]"
            id="join-us"
        >
            <h1 className="text-h1 offset-text-background uppercase">
                JOIN US
            </h1>

            <div className="flex gap-component-gap-sm">
                <div className="flex flex-col w-[452px] gap-[12px] border-l-3 border-isd-primary px-component-gap-sm py-element-gap bg-isd-primary-2 p-element-gap">
                    <div className="flex gap-[24px] items-center text-isd-primary">
                        <h2 className="text-h2">Faculty Positions</h2>
                        <ArrowRight size={20} strokeWidth={3} />
                    </div>
                    <p>multiple substantiation-track at all ranks</p>
                </div>
                <div className="flex flex-col w-[452px] gap-[12px] border-l-3 border-isd-secondary px-component-gap-sm py-element-gap bg-isd-secondary-1 p-element-gap">
                    <div className="flex gap-[24px] items-center text-isd-secondary">
                        <h2 className="text-h2">Faculty Positions</h2>
                        <ArrowRight size={20} strokeWidth={3} />
                    </div>
                    <p>teaching-track</p>
                </div>
            </div>
        </div>
    );
}
