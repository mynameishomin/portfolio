export default function Main({ children }: { children: React.ReactElement }) {
    return (
        <main className="flex flex-col grow p-8 overflow-scroll scrollbar-hide">
            {children}
        </main>
    );
}
