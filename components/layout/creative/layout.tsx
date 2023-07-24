import Header from "./header";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="relative min-h-screen p-10">
            <div className="absolute inset-0 min-h-screen bg-center bg-contain bg-[url('/images/creative_bg_full.jpg')] blur"></div>
            <div className="relative max-w-7xl mx-auto p-8 bg-white/50 rounded-3xl">
                <Header />
                {children}
            </div>
        </div>
    );
};
