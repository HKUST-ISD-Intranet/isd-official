export default function Custom404() {
    return (
        <div className="container flex flex-col py-section-gap gap-section-title-gap">
            <h1 className="text-h1 offset-text-background uppercase">
                Page Not Found
            </h1>
            <p className="text-body-lg">
                Sorry, the page you are looking for does not exist.
            </p>
        </div>
    );
}
