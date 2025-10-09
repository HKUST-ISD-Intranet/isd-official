export default function SubHeading({ text }: { text: string }) {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-primary text-4xl font-bold uppercase">
                {text}
            </div>
            <div className="w-48 h-0 outline-1 outline-isd-secondary" />
        </div>
    );
}
