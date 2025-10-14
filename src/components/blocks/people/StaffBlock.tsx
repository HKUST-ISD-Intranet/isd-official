import StaffCard from '@/components/StaffCard';
import staff from '@/data/staff.json';

export default function StaffBlock() {
    return (
        <div
            className="container w-full flex flex-col py-section-gap gap-section-title-gap scroll-mt-[75px]"
            id="staff"
        >
            <h1 className="text-h1 offset-text-background uppercase">
                ISD Staff
            </h1>

            <div className="grid grid-cols-3 gap-y-component-gap-sm gap-x-component-gap">
                {staff.map((member, i) => (
                    <StaffCard
                        key={i}
                        className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary"
                        name={member.name}
                        role={member.role || undefined}
                        email={member.email || undefined}
                        phone={member.phone || undefined}
                        location={member.location || undefined}
                    />
                ))}
            </div>
        </div>
    );
}
