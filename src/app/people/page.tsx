import HeroImageFile from '@/assets/people/all.jpg';

import HeroImage from '@/components/HeroImage';
import FilterBlock from '@/components/blocks/people/FilterBlock';
import FacultyBlock from '@/components/blocks/people/FacultyBlock';
import StaffBlock from '@/components/blocks/people/StaffBlock';
import faculty from '@/data/faculty.json';
import affiliate from '@/data/affiliate.json';
import staff from '@/data/staff.json';
import { filterAndSortPeople, Person } from '@/lib/peopleFilter';

export default function PeoplePage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const role = Array.isArray(searchParams?.role)
        ? searchParams?.role[0]
        : (searchParams?.role ?? 'all');
    const sort = Array.isArray(searchParams?.sort)
        ? (searchParams?.sort[0] as 'sort_name' | 'sort_position')
        : (searchParams?.sort as 'sort_name' | 'sort_position') ||
          'sort_position';
    const keyword = Array.isArray(searchParams?.keyword)
        ? searchParams?.keyword[0]
        : (searchParams?.keyword ?? '');

    const tag = Array.isArray(searchParams?.tag)
        ? searchParams?.tag[0]
        : (searchParams?.tag ?? '');

    // Default to sorting by position
    const sortBy = sort === 'sort_name' ? 'sort_name' : 'sort_position';

    // Prepare filtered lists per role context
    const facultyList =
        role === 'staff'
            ? []
            : filterAndSortPeople(faculty as Person[], {
                  keyword,
                  sortBy,
                  context: 'faculty',
                  tag,
              });

    const affiliateList =
        role === 'staff'
            ? []
            : filterAndSortPeople(affiliate as Person[], {
                  keyword,
                  sortBy,
                  context: 'affiliate',
                  tag,
              });

    const staffList =
        role === 'faculty' || role === 'affiliate'
            ? []
            : filterAndSortPeople(staff as Person[], {
                  keyword,
                  sortBy,
                  context: 'staff',
                  tag,
              });

    return (
        <div className="min-h-screen flex flex-col pb-component-gap">
            <HeroImage image={HeroImageFile} />
            <FilterBlock />
            {/* Render blocks according to selected role */}
            {(role === 'all' || role === 'faculty') && (
                <FacultyBlock people={facultyList} />
            )}

            {/*(role === 'all' || role === 'affiliate') && (
                <FacultyBlock type="affiliate" people={affiliateList} />
            )*/}

            {(role === 'all' || role === 'staff') && (
                <StaffBlock people={staffList} />
            )}
        </div>
    );
}
