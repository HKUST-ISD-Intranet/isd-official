export default function Styles() {
    return (
        <div className="min-h-screen p-8 gap-8 sm:p-20 bg-base-100 flex flex-col">
            <div className="bg-primary w-24 h-24 text-primary-content flex items-center justify-center">
                {" "}
                Primary{" "}
            </div>
            <div className="bg-secondary w-24 h-24 text-secondary-content flex items-center justify-center">
                {" "}
                Secondary{" "}
            </div>
            <div className="bg-accent w-24 h-24 text-accent-content flex items-center justify-center">
                {" "}
                Accent{" "}
            </div>

            <p className="text-md ">Text Font 1</p>
        </div>
    );
}
