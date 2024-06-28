export default ({
    children,
    className,
}: {
    children: React.ReactElement;
    className?: String;
}) => {
    return (
        <div className={`mt-16 lg:ml-16 ${className ? className : ""}`}>
            {children}
        </div>
    );
};
