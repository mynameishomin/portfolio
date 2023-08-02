export default ({ children }: { children: String }) => {
    return (
        <h2>
            <span className="block border-b border-gray-300"></span>
            <span className="inline-block pr-5 bg-gray-50 -translate-y-5 text-2xl text-gray-900 font-black">
                {children}
            </span>
        </h2>
    );
};
