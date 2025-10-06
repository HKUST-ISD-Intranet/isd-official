export default function TextCard({
    heading,
    content,
}: {
    heading: string;
    content: string;
}) {
    return (
        <div className="relative overflow-clip p-6 lg:aspect-square text-2xl bg-primary text-white rounded-lg flex flex-col gap-4 divide-y-1 text-center">
            <div className="uppercase font-bold pb-4">{heading}</div>
            <div className="mt-4">{content}</div>
        </div>
    );
}
