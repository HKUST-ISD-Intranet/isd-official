import FacultyCard from '@/components/FacultyCard';
import faculty from '@/data/faculty.json';
import affiliate from '@/data/affiliate.json';
import { resolvePersonPhoto } from '@/lib/peopleImages';
import { Person } from '@/lib/peopleFilter';

export default function FacultyBlock({
    type = 'faculty',
    people,
}: {
    type?: 'faculty' | 'affiliate';
    people?: Person[];
}) {
    return (
        <div
            className={
                'container w-full flex flex-col pt-section-gap gap-section-title-gap' +
                (type !== 'affiliate'
                    ? ' dot-pattern before:top-[-95px] before:right-[-60px] [--dot-color:var(--isd-secondary-1)]'
                    : '')
            }
        >
            <h1 className="text-h1 offset-text-background uppercase">
                {type === 'affiliate' ? ' Affiliates' : 'ISD Faculty'}
            </h1>

            {(() => {
                const list = people
                    ? people
                    : type === 'affiliate'
                      ? affiliate
                      : faculty;
                if (!list || list.length === 0) {
                    return (
                        <div className="text-isd-font-2">No results found.</div>
                    );
                }

                return (
                    <div
                        className="grid grid-cols-2 gap-x-section-gap gap-y-component-gap scroll-mt-[295px]"
                        id={type === 'affiliate' ? 'affiliate' : 'faculty'}
                    >
                        {list.map((person) => (
                            <div key={person.name}>
                                <FacultyCard
                                    name={person.name}
                                    role={(person.role ?? '') as string}
                                    keywords={
                                        Array.isArray(person.keywords)
                                            ? person.keywords
                                            : undefined
                                    }
                                    photo={resolvePersonPhoto(
                                        person.photo ?? undefined
                                    )}
                                    email={person.email ?? undefined}
                                    link={person.link ?? undefined}
                                    phone={person.phone ?? undefined}
                                    location={person.location ?? undefined}
                                    details={person.details ?? undefined}
                                />
                            </div>
                        ))}
                    </div>
                );
            })()}
        </div>
    );
}
