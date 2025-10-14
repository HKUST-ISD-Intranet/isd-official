import FacultyCard from '@/components/FacultyCard';
import faculty from '@/data/faculty.json';
import affiliate from '@/data/affiliates.json';
import { resolvePersonPhoto } from '@/lib/peopleImages';

export default function FacultyBlock({
    type = 'faculty',
}: {
    type?: 'faculty' | 'affiliate';
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

            <div className="grid grid-cols-2 gap-x-section-gap gap-y-component-gap">
                {type === 'affiliate'
                    ? affiliate.map((person) => (
                          <div key={person.name}>
                              <FacultyCard
                                  name={person.name}
                                  role={person.role}
                                  keywords={person.keywords}
                                  photo={resolvePersonPhoto(person.photo)}
                                  email={person.email}
                                  phone={person.phone || undefined}
                                  location={person.location}
                                  link={person.link || undefined}
                              />
                          </div>
                      ))
                    : faculty.map((person) => (
                          <div key={person.name}>
                              <FacultyCard
                                  name={person.name}
                                  role={person.role}
                                  keywords={person.keywords}
                                  photo={resolvePersonPhoto(person.photo)}
                                  email={person.email}
                                  link={person.link || undefined}
                                  phone={person.phone || undefined}
                                  location={person.location || undefined}
                              />
                          </div>
                      ))}
            </div>
        </div>
    );
}
