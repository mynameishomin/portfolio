export default ({ children }: { children: String }) => {
    return (
        <h2 className="text-center">
            <span className="block border-b border-gray-300"></span>
            <span className="inline-block px-5 bg-gray-50 -translate-y-3.5 text-md text-gray-500">
                {children}
            </span>
        </h2>
    );
};
