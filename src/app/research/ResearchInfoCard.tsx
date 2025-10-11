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
        <div className="self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-primary text-lg  font-bold capitalize">
                {title}
            </div>
            <div className="self-stretch justify-start text-isd-font-2 text-[12px] leading-[18px]">
                {description}
            </div>
            <div className="self-stretch justify-start text-isd-secondary text-[12px] leading-[18px] capitalize">
                {supervisor}
            </div>
        </div>
    );
}
