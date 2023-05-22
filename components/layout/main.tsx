export default function Main({ children }: { children: React.ReactElement }) {
    return (
        <main className="flex flex-col grow px-6 py-8 text-gray-400 overflow-auto">
            {children}
        </main>
    );
}
