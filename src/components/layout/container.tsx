export default ({
    children,
    className,
}: {
    children: React.ReactElement;
    className?: String;
}) => {
    return (
        <div className={`px-[1rem] lg:px-[2rem] ${className ? className : ""}`}>
            {children}
        </div>
    );
};
