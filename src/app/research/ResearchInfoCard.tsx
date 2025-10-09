export default function ResearchInfoCard({
    title,
    description,
    supervisor,
}: {
    title: string;
    description: string;
    supervisor: string;
}) {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-primary text-2xl font-bold capitalize">
                {title}
            </div>
            <div className="self-stretch justify-start text-isd-font-2 text-sm">
                {description}
            </div>
            <div className="self-stretch justify-start text-isd-secondary text-sm capitalize">
                {supervisor}
            </div>
        </div>
    );
}
