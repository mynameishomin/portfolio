export function PageTitle1({ children }: { children: string }) {
    return (
        <h2 className="font-han text-point w-full mb-8 text-4xl">{children}</h2>
    );
}

export function PageTitle2({ children }: { children: string }) {
    return (
        <h3 className="font-han text-point w-full mb-4 text-2xl">{children}</h3>
    );
}
