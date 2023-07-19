export default ({
    children,
    className,
}: {
    children: React.ReactElement;
    className?: String;
}) => {
    return (
        <div className={`max-w-6xl mx-auto px-5 ${className}`}>{children}</div>
    );
};
