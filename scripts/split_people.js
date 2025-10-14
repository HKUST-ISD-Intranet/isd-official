import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'src', 'data', 'people_raw.json');
const outFaculty = path.join(root, 'src', 'data', 'faculty.json');
const outAff = path.join(root, 'src', 'data', 'affiliates.json');
const outStaff = path.join(root, 'src', 'data', 'staff.json');

function load() {
    const raw = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(raw);
}

function isJointTrait(traits) {
    if (!traits) return false;
    if (Array.isArray(traits))
        return traits.some((t) => String(t).toLowerCase().includes('jointapt'));
    return String(traits).toLowerCase().includes('jointapt');
}

function transformTraits(item) {
    const copy = { ...item };
    // convert keywords to array split by '·'
    if (typeof copy.keywords === 'string') {
        copy.keywords = copy.keywords
            .split('·')
            .map((s) => s.trim())
            .filter(Boolean);
    } else if (!copy.keywords) {
        copy.keywords = [];
    }

    // replace traits with isJointApt boolean
    copy.isJointApt = isJointTrait(copy.traits);
    delete copy.traits;

    return copy;
}

function run() {
    const people = load();
    const faculty = [];
    const affiliates = [];
    const staff = [];

    people.forEach((p) => {
        const t = p.type || '';
        if (t === 'ISD Faculty' || t === 'ISD Faculty') {
            faculty.push(transformTraits(p));
        } else if (t === 'Affiliates') {
            affiliates.push(transformTraits(p));
        } else if (t === 'ISD Staff') {
            const copy = { ...p };
            delete copy.traits;
            delete copy.keywords;
            delete copy.links;
            staff.push(copy);
        } else {
            // fallback: categorize faculty-like titles
            if (
                p.role &&
                /Professor|Assistant Professor|Lecturer|Adjunct|Research Assistant Professor|Associate Professor/i.test(
                    p.role
                )
            ) {
                faculty.push(transformTraits(p));
            } else if (p.type && p.type.toLowerCase().includes('faculty')) {
                faculty.push(transformTraits(p));
            } else if (p.type && p.type.toLowerCase().includes('staff')) {
                staff.push(transformTraits(p));
            } else {
                // default to affiliates
                // const copy = { ...p };
                // delete copy.traits;
                // affiliates.push(copy);
            }
        }
    });

    fs.writeFileSync(outFaculty, JSON.stringify(faculty, null, 2), 'utf8');
    fs.writeFileSync(outAff, JSON.stringify(affiliates, null, 2), 'utf8');
    fs.writeFileSync(outStaff, JSON.stringify(staff, null, 2), 'utf8');
    console.log('Wrote', outFaculty, outAff, outStaff);
}

run();
