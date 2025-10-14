import StaffCard from '@/components/StaffCard';
import staff from '@/data/staff.json';
import { Person } from '@/lib/peopleFilter';

export default function StaffBlock({ people }: { people?: Person[] }) {
    return (
        <div
            className="container w-full flex flex-col py-section-gap gap-section-title-gap scroll-mt-[75px]"
            id="staff"
        >
            <h1 className="text-h1 offset-text-background uppercase">
                ISD Staff
            </h1>

            {(() => {
                const list = people ?? staff;
                if (!list || list.length === 0) {
                    return (
                        <div className="text-isd-font-2">No results found.</div>
                    );
                }

                return (
                    <div className="grid grid-cols-3 gap-y-component-gap-sm gap-x-component-gap">
                        {list.map((member, i) => (
                            <StaffCard
                                key={i}
                                className="odd:border-isd-primary odd:bg-isd-primary-2 odd:text-isd-primary even:border-isd-secondary even:bg-isd-secondary-1 even:text-isd-secondary"
                                name={member.name}
                                role={(member.role ?? '') as string}
                                email={member.email ?? undefined}
                                phone={member.phone ?? undefined}
                                location={member.location ?? undefined}
                            />
                        ))}
                    </div>
                );
            })()}
        </div>
    );
}
