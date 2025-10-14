import StaffCard from '@/components/StaffCard';

export default function StaffBlock() {
    return (
        <div className="container w-full flex flex-col py-section-gap gap-section-title-gap">
            <h1 className="text-h1 offset-text-background uppercase">
                ISD Staff
            </h1>

            <div className="grid grid-cols-3 gap-y-component-gap-sm gap-x-component-gap">
                <StaffCard className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary" />
                <StaffCard className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary" />
                <StaffCard className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary" />
                <StaffCard className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary" />
                <StaffCard className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary" />
            </div>
        </div>
    );
}
