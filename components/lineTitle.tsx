export default ({ children }: { children: String }) => {
    return (
        <h2>
            <span className="block border-b border-gray-300"></span>
            <span className="inline-block text-lg pr-2 text-gray-900 font-black -translate-y-4 bg-gray-50 sm:pr-5 sm:-translate-y-5 sm:text-2xl">
                {children}
            </span>
        </h2>
    );
};
