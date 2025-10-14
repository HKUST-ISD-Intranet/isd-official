import FacultyCard from '@/components/FacultyCard';

export default function FacultyBlock({
    type = 'faculty',
}: {
    type?: 'faculty' | 'affiliate';
}) {
    return (
        <div className="container w-full flex flex-col pt-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-[-60px] [--dot-color:var(--isd-secondary-1)]">
            <h1 className="text-h1 offset-text-background uppercase">
                {type === 'affiliate' ? ' Affiliates' : 'ISD Faculty'}
            </h1>

            <div className="grid grid-cols-2 gap-x-section-gap gap-y-component-gap">
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
                <FacultyCard />
            </div>
        </div>
    );
}
