export default ({ children }: { children: React.ReactElement }) => {
    return <div className="relative min-h-screen p-10">
        <div className="absolute inset-0 min-h-screen bg-center bg-contain bg-[url('/images/creative_bg_full.jpg')] blur">
            
        </div>
        <div className="relative h-[6000px] p-4 bg-white/50 rounded-xl">
            {children}
        </div>
    </div>;
};
