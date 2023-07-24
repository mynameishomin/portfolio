import Footer from "./footer";
import Header from "./header";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#E8FFE8]">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
};
