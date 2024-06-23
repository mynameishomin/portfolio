import GradientText from "./gradientText";

export default function Window({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="relative flex flex-col w-full h-full overflow-hidden text-white transition duration-200 bg-gray-800">
                <div className="flex items-center justify-between py-3 pl-4 pr-3 font-bold">
                    <GradientText>{title}</GradientText>
                </div>
                {children}
            </div>
        </>
    );
}
