export default function GradientText({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent">
            {children}
        </div>
    );
}
